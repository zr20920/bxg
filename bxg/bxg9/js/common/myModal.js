/**
 * 自定义的模态框插件
 * Author:Wilbert
 *   Date:2017/8/24
 */
define(["jquery","bootstrap"],function($){

    //jquery插件
    $.fn.myModal=function(id){
        //this：jquery对象本身

        id && $(id).remove();
        this.appendTo("body").modal();

        return this;//实现链式编程
    };


})