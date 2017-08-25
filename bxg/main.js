/**
 * 入口文件
 * Created by Administrator on 2017/8/21.
 */

require.config({

        baseUrl:'js',

        paths:{
            jquery:'lib/jquery-2.1.4',//不添加后缀
            bootstrap:'../assets/bootstrap/js/bootstrap',
            text:'lib/text',
            tpls:'../tpls',
            template:'lib/template-web',
            upload:'../assets/uploadify/jquery.uploadify',
            echarts:'lib/echarts.min'
        },
        shim:{
            bootstrap:{
                deps:['jquery']
            },
            upload:{
                deps:['jquery']
            }
        }

})

require(['jquery','teacher/list','sourse/list','sourse/add','category/list','teacher/chartIndex','bootstrap'],function($,teacherList,sourseList,sourseAdd,categoryList,chartIndex){
    var userInfoObj = sessionStorage.getItem('userInfo'); //页面关闭之前一直保留用户信息

    //console.log(userInfoObj)
    var userInfo= JSON.parse(userInfoObj); //将json格式的字符串转成对象,因为对象才能点属性
    //console.log(userInfo)
    var tc_name = userInfo.tc_name; //用点语法获取属性值
    var tc_avatar = userInfo.tc_avatar;

    $('.profile h4').text(tc_name); //将信息值放在渲染在页面上

    $('.profile img').attr('src',tc_avatar)

    $('.left .list-group').on('click','.lecturer',function(){
            //讲师列表
            //alert('点到了1')
            teacherList()
        $(this).addClass('active').siblings().removeClass('active')
    }).on('click','.sourse',function(){
        sourseList();
            //alert('点到了2')
            //课程管理
        $(this).addClass('active').siblings().removeClass('active')
    }).on('click','.classify',function(){
            //课程分类
            //alert('点到了3')
        categoryList()




        $(this).addClass('active').siblings().removeClass('active')
    }).on('click','.statistics',function(){
        chartIndex()
            // alert('点到了4')

        $(this).addClass('active').siblings().removeClass('active')
    }).on('click','.add',function(){
            //添加分类
            //alert('点到了4')
        sourseAdd();
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.right .top').on('click','.parsonal',function(){
        //个人中心
        
                             
        
        
                            })

        $('.left .list-group .lecturer').trigger('click');//这是登录页面后默认点击触发加载讲师列表

})
