/**
 * 添加分类
 * Created by Administrator on 2017/8/24.
 */

define(['jquery','text!tpls/categoryAdd.html'],function($,categoryAddTpl){

        return function(){
                $.ajax({
                        url:'/api/category/add',
                        type:'post',
                        success:function(res){
                                        console.log(res)


                        }



                })

                $(categoryAddTpl).appendTo('body').modal()
        }



})