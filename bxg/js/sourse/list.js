/**
 * 课程管理
 * Created by Administrator on 2017/8/23.
 */
define(['jquery','text!tpls/sourseList.html','sourse/time','sourse/info','sourse/image','template'],function($,sourseListpl,sourseTime,sourseInfo,sourseImage,template){

        return function fn(){

                //alert(111111111212)
            $.ajax({

                    url:'api/course',
                    type:'get',
                    success:function(res){
                            //console.log(res)
                        //if(res.code!=200) return console.log(res.msg);

                        var sourseList = template.render(sourseListpl,res);
                        var $sourseList = $(sourseList)

                        $sourseList.on('click','.btn-time',function(){
                            var id  = $(this).parent().attr('cs_id')
                            sourseTime(id)
                            //console.log(id) //ok 数字


                        }).on('click','.btn-info',function(){

                                //alert('信息')
                            sourseInfo();
                        }).on('click','a',function(){
                            var cs_id  = $(this).attr('cs_id')
                            // alert(111)
                            sourseImage(cs_id,function(){
                                fn()
                            });

                        })


                        $('.right .content').html($sourseList)

                    }


            })




        }


})