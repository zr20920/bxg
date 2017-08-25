/**
 * 讲师管理列表JS
 * Created by Administrator on 2017/8/21.
 */
define(['jquery','text!tpls/teacherList.html','template','teacher/show','teacher/edit','teacher/add'],function($,teacherListTpl,template,teacherShow,teacherEdit,teacherAdd){

        return function fn(){
            //检测ok
                //$('.right .content').html('讲师管理')
            $.ajax({
                url:'api/teacher',
                type:'get',
                data:{},
                success:function(res){
                    console.log(res.result); //为什么会打印两次
                    if(res.code!=200) throw new Error(res.msg);
                    //把返回数据填入模块中
                    var teacherList = template.render(teacherListTpl,res);
                    var $teacherList = $(teacherList); //转成jquery对象
                    //console.log(teacherListTpl);
                    $('.content').html($teacherList);

                    $teacherList.on('click','.btn-show',function(){
                        var id = $(this).parent().attr('tc_id') //在td自定义属性取值
                            //alert(id) //id返回的是数字类型
                        //console.log($(this).parent()) //这是找到事件源的父元素

                            teacherShow(id); //调用函数并传实参ID


                    }).on('click','.btn-edit',function(){
                                    //alert(11111111111)
                        var id = $(this).parent().attr('tc_id') //在td自定义属性取值


                        teacherEdit(id,fn);

                    }).on('click','.btn-status',function(){
                                    //alert(11111111111)
                        var $btnStatus = $(this);
                        $.ajax({
                            url:'api/teacher/handle',
                            type:'post',
                            data:{
                                tc_status:$(this).parent().attr('tc_status'),
                                tc_id:$(this).parent().attr('tc_id'),
                            },
                            success:function(res){


                                var tc_status = res.result.tc_status;

                                if(tc_status==0){
                                    $btnStatus.parent().siblings('.td-status').text('启用');
                                    $btnStatus.text('注销');
                                    //$btnStatus.parent().attr('tc_status',tc_status)
                                }else{
                                    $btnStatus.parent().siblings('.td-status').text('注销');
                                    $btnStatus.text('启用');
                                    //$btnStatus.parent().attr('tc_status',tc_status)
                                }
                                $btnStatus.parent().attr('tc_status',tc_status)
                                //$btnStatus.parent().siblings('.td-status').text(tc_status==0?'启用':'注销');
                                //console.log(tc_status)
                                //
                                //$btnStatus.text(tc_status==1?'启用':'注销');
                                //
                                //$btnStatus.parent().attr('tc_status',tc_status)
                                //console.log($btnStatus.parent().siblings('.td-status'))
                            }
                        })


                    }).on('click','.btn-add',function(){

                        teacherAdd();
                    })

                }



            })

        }


})