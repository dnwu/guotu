//获取api地址
// function mapserverManagment() {
//     var mapxml = loadXML("../xml/api.xml");
//     var mapArray = new Array();
//     for (i = 0; i < mapxml.children.length; i++) {
//         var type = mapxml.children[i].nodeName;
//         var name = mapxml.children[i].attributes['name'].value;
//         var mapurl = mapxml.children[i].attributes['url'].value;
//         var map = new apiManagement(type, name, mapurl);
//         mapArray.push(map);
//     }
//     return mapArray;
// }


// var mapArray = mapserverManagment();
// console.log('mapArray',mapArray);
// var uploader = mapArray[0].url;
// var baseMapServer = mapArray[1].url;
// var cadquery = mapArray[2].url;

var uploader = "http://172.20.104.70:8080/upload"
var baseMapServer = "http://58.251.157.179:8399/arcgis/rest/services/test/MapServer";
var cadquery = "http://58.251.157.179:8399/arcgis/rest/services/definite1/MapServer/0"

//CAD文件上传
var CADData;
$('#inputFile').fileinput({
    language: 'zh',
    uploadUrl: uploader,
    showCaption: true,
    showUpload: true,
    showRemove: true,
    showClose: true,
    showPreview: false,
    autoReplace: true,
    allowedFileExtensions: ["dwg", "dwf", "dxf", "dwt"],
}).on("fileuploaded", function (event, data, previewId, index) {
    CADData = data.response;
    console.log('cad-data',data);
});

//加载地图
function map(mapserverUrl) {
    require(["esri/map", "esri/layers/ArcGISTiledMapServiceLayer", "dojo/dom", "dojo/on", "./js/geojsonlayer.js", "esri/tasks/query", "esri/tasks/QueryTask", "esri/symbols/SimpleFillSymbol", "esri/InfoTemplate", "esri/geometry/Polygon", "esri/SpatialReference", "esri/config", "dojo/domReady!"], function (Map, ArcGISTiledMapServiceLayer, dom, on, GeoJsonLayer, Query, QueryTask, SimpleFillSymbol, InfoTemplate, Polygon, SpatialReference, esriConfig) {
        //代理
        esriConfig.defaults.io.proxyUrl = "http://172.20.104.70:8081/Java/proxy.jsp"
        esriConfig.defaults.io.alwaysUseProxy = false;
        //解决跨域的问题
        esri.config.defaults.io.corsDetection = false;
        //初始化地图
        var map = new Map("map", {
            center: [
                114.127028, 22.610259
            ],
            zoom: 1,
            // slider:false,
            logo: false,
        });

        //添加底图
        var basemap = new ArcGISTiledMapServiceLayer(mapserverUrl);
        map.addLayer(basemap);

        //添加GeoJson图层
        var geoJsonLayer;

        function addGeoJsonLayer(json) {
            // Create the layer
            geoJsonLayer = new GeoJsonLayer({
                // url: url,
                data: json
            });

            // Zoom to layer
            geoJsonLayer.on("update-end", function (e) {
                map.setExtent(e.target.extent.expand(1.2));
            });
            // Add to map
            map.addLayer(geoJsonLayer);
        }

        var symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID);
        var infoTemplate = new InfoTemplate("${OBJECTID}", "${*}");


        function polygonInter(url, polygon) {
           
            map.graphics.clear();
            var features ;
            var feature;
            var attributes ;
            for (i = 0; i < polygon.features.length; i++) {
                var myPolygon = new esri.geometry.Polygon(new SpatialReference({
                    wkid: 2435
                }));
                myPolygon.addRing(polygon.features[i].geometry.coordinates[0]);
                var query = new Query();
                var queryTask = new QueryTask(url);
                query.geometry = myPolygon;
                // query.where = "1=1";
                query.geometryType = "polygon";
                query.returnGeometry = true;
                // query.outFields = ["*"];
                // console.log(query);
                queryTask.execute(query, ShowQueryResult, ShouError);

                function ShowQueryResult(result) {
                    // console.log(result);
                    // alert("success");
                     features = result.features;
                     attributes = features.attributes;
                    // console.log(features);
                    for (i = 0; i < features.length; i++) {
                        feature = features[i];
                        map.graphics.add(features[i].setSymbol(symbol).setInfoTemplate(infoTemplate));
                    }
                }

                function ShouError() {
                    alert("有部分空间查询失败");
                }
            }
        }

        on(dom.byId("showCAD"), "click", function () {
            if (CADData != null) {
                //显示CAD图层
                addGeoJsonLayer(CADData);
                //显示空间查询后的图层
                polygonInter(cadquery, CADData);
            } else {
                alert("无CAD数据");
            }
        })
    })
}

//初始化地图
map(baseMapServer);