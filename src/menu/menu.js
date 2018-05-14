var menu = {
    list: [
        {
            "menu": "指标监测",
            "img": "./img/menu1.png",
            "url": "/"
        }, {
            "menu": "区域发展环境",
            "img": "./img/menu2.png",
            "url": "/",
            "submenu": [
                {
                    "name": "地区生产总值",
                    "url": "/",
                    "attr": "2-1"
                }, {
                    "name": "产业结构",
                    "url": "/",
                    "attr": "2-2"
                }, {
                    "name": "人均生产总值",
                    "url": "/",
                    "attr": "2-3"
                }, {
                    "name": "人口规模",
                    "url": "/",
                    "attr": "2-4"
                }, {
                    "name": "跨界交通",
                    "url": "/",
                    "attr": "2-5"
                }
            ]
        }, {
            "menu": "刚性空间管控",
            "img": "./img/menu3.png",
            "url": "/",
            "submenu": [
                {
                    "name": "管控边界",
                    "url": "/",
                    "attr": "3-1"
                }, {
                    "name": "冲突检测",
                    "url": "/",
                    "attr": "3-2",
                    "grandmenu": [
                        {
                            "name": "上传CAD文件",
                            "type": "button",
                            "url": "/"
                        }
                    ]
                }
            ]
        }, {
            "menu": "空间格局评估",
            "img": "./img/menu4.png",
            "url": "/",
            "submenu": [
                {
                    "name": "人口分布特征",
                    "url": "/",
                    "attr": "4-1",
                    "grandmenu": [
                        {
                            "name": "常住人口分布与变化",
                            "url": "/"
                        }, {
                            "name": "人口密度分布",
                            "url": "/"
                        }, {
                            "name": "户籍人口占比分布",
                            "url": "/"
                        }, {
                            "name": "人口学历结构分布",
                            "url": "/"
                        }, {
                            "name": "劳动龄人口占比分布",
                            "url": "/"
                        }
                    ]
                }, {
                    "name": "建设用地布局",
                    "url": "/",
                    "attr": "4-2"
                }, {
                    "name": "扩展强度评估",
                    "url": "/",
                    "attr": "4-3",
                    "grandmenu": [
                        {
                            "name": "总体扩展情况",
                            "url": "/"
                        }, {
                            "name": "用地扩展强度",
                            "url": "/"
                        }, {
                            "name": "用房扩展强度",
                            "url": "/"
                        }
                    ]
                }, {
                    "name": "用地效益评估",
                    "url": "/",
                    "attr": "4-4",
                    "grandmenu": [
                        {
                            "name": "建设强度",
                            "url": "/"
                        }, {
                            "name": "人均建设用地",
                            "url": "/"
                        }, {
                            "name": "地均产出",
                            "url": "/"
                        }
                    ]
                }, {
                    "name": "中心体系评估",
                    "url": "/",
                    "attr": "4-5",
                    "grandmenu": [
                        {
                            "name": "中心功能用地核密度分析",
                            "url": "/"
                        }, {
                            "name": "中心功能用房核密度分析",
                            "url": "/"
                        }
                    ]
                }
            ]
        }, {
            "menu": "生活空间评估",
            "img": "./img/menu5.png",
            "url": "/",
            "submenu": [
                {
                    "name": "居住空间",
                    "url": "/",
                    "attr": "5-1",
                    "grandmenu": [
                        {
                            "name": "居民用地分布",
                            "url": "/"
                        }, {
                            "name": "住房空间分布",
                            "url": "/"
                        }, {
                            "name": "人均住房面积",
                            "url": "/"
                        }
                    ]
                }, {
                    "name": "教育设施",
                    "url": "/",
                    "attr": "5-2",
                    "grandmenu": [
                        {
                            "name": "空间分布",
                            "url": "/"
                        }, {
                            "name": "服务半径",
                            "url": "/"
                        }, {
                            "name": "设施覆盖率",
                            "url": "/"
                        }
                    ]
                }, {
                    "name": "医疗设施",
                    "url": "/",
                    "attr": "5-3"
                }
            ]
        }, {
            "menu": "生产空间评估",
            "img": "./img/menu6.png",
            "url": "/",
            "submenu": [
                {
                    "name": "工业发展评估",
                    "url": "/",
                    "attr": "6-1",
                    "grandmenu": [
                        {
                            "name": "用地分布",
                            "url": "/"
                        }, {
                            "name": "用房分布",
                            "url": "/"
                        }, {
                            "name": "产业格局",
                            "url": "/"
                        }, {
                            "name": "空间效益",
                            "url": "/"
                        }
                    ]
                }, {
                    "name": "服务业发展评估",
                    "url": "/",
                    "attr": "6-2",
                    "grandmenu": [
                        {
                            "name": "用地分布",
                            "url": "/"
                        }, {
                            "name": "用房分布",
                            "url": "/"
                        }, {
                            "name": "产业格局",
                            "url": "/"
                        }, {
                            "name": "空间效益",
                            "url": "/"
                        }
                    ]
                }, {
                    "name": "创新发展评估",
                    "url": "/",
                    "attr": "6-3",
                    "grandmenu": [
                        {
                            "name": "产业格局",
                            "url": "/"
                        }, {
                            "name": "空间效益",
                            "url": "/"
                        }
                    ]
                }
            ]
        }, {
            "menu": "生态空间评估",
            "img": "./img/menu7.png",
            "url": "/"
        }, {
            "menu": "现状规划对比",
            "img": "./img/menu8.png",
            "url": "/"
        }
    ]
}
var leftMenu = template('left-menu', menu);
var grandMenu = template('3d-menu', menu);
document
    .getElementById('menuTree')
    .innerHTML = leftMenu;
document
    .getElementById('grandson-menu')
    .innerHTML = grandMenu;