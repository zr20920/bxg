/**
 * 添加讲师模版
 * Created by Administrator on 2017/8/23.
 */
define(['jquery','text!tpls/teacherAdd.html','template'],function($,teacherAddTpl,template){

            return function(){
                // alert(222222222222)

                $teacherAdd = $(teacherAddTpl).on('submit','form',function(){
                
                   var formData = $(this).serialize();
                    console.log(formData)
                   $.ajax({
                        url:'api/teacher/add',
                        type:'post',
                        data:formData,      
                        success:function(res){
                            console.log(res)
                            $teacherAdd.modal('hide');
                            
                            // $('.left .list-group .lecturer').trigger('click');//这是登录页面后默认点击触发加载讲师列表
                            location.reload();
                        }

                   })
                
                
                
                   return false;
                }).appendTo('body').modal();
                






            }



})