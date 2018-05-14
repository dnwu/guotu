$(function(){
    // tab栏切换
    // 控制一级
    $('.menu-box').on('click','.title',function(e){
        // $('.menu-box .title').removeClass('active')
        // $('.menu-box .sub li').removeClass('active')
        // $(e.target).parent('.title').addClass('active')
        $(e.target).parent('.title').next('.sub').slideToggle()
    })
    // 如果点击带有没有二级标签的一级标签 , 隐藏三级标签
    $('.menu-box .box.title').on('click',function(e){
        $('.menu-box .sub li').removeClass('active')
        $('.menu-box .title').removeClass('active')
        $('#grandson-menu>div').hide()
        $(this).addClass("active")
        // console.log($(e.target).parent('.title'));
    })
    // 如果点击带有有二级标签的一级标签 , 展开并替换箭头
    $('.menu-box .box.has-son').on('click',function(e){
        if(!$(e.target).hasClass('title') && !$(e.target).parent().hasClass('title')){
            return
        }
        var dom = $(this).find(".title .glyphicon")
    //    var dom =  $('.menu-box .box.has-son>.title .glyphicon ')
       if(dom.hasClass('glyphicon-chevron-right')){
           dom.removeClass('glyphicon-chevron-right')
           dom.addClass('glyphicon-chevron-down')
       }else {
        dom.removeClass('glyphicon-chevron-down')
        dom.addClass('glyphicon-chevron-right')
       }
    })
    // 控制二级
    $('.menu-box .sub').on('click','li',function(e){
        $('.menu-box .sub li').removeClass('active')
        $('.menu-box .title').removeClass('active')
        $(e.target).parents('.box').find('.title').addClass('active')
        // console.log(e.target);
        $(e.target).addClass('active')
        // 控制三级隐藏
        var sonClass = $(e.target).attr('attr-son')
        $('#grandson-menu>div').hide()
        $('#grandson-menu').find(`.${sonClass}`).show()
        // console.log($('#grandson-menu').find(`.${sonClass}`));
    })
    // 控制三级菜单active
    $('#grandson-menu').on('click',function(e) {
        $('#grandson-menu>div>div').removeClass('active')
        $(e.target).addClass('active')
        // console.log(e.target);
    })

    
})