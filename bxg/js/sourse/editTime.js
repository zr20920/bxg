/**
 * 编辑课时
 * Created by Administrator on 2017/8/24.
 */
define(['jquery','text!tpls/sourseEditTime.html'],function($,sourseEditTimeTpl){

        return function(){
            $('form').('submit',function(){})
            //alert('小伙子还可以嘛')

            $(sourseEditTimeTpl).appendTo('body').modal()

        }



})