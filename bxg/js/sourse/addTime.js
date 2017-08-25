/**
 * 添加课时
 * Created by Administrator on 2017/8/24.
 */
define(['jquery','text!tpls/sourseAddTime.html',],function($,sourseAddTimeTpl){

        return function(){

                //alert('不错噢')
            //$sourseAddTime.on('submit','form',function(){})
            //var formData = $(this).serialize()
            //$.ajax({
            //    url:'api/course/chapter/add',
            //    type:'post',
            //    data:formData,
            //    success:function(res){
            //       var sourseAddTime = template.render(sourseAddTimeTpl,res)
            //        var $sourseAddTime =$(sourseAddTime)
            //
            //    }
            //
            //
            //
            //})
            $(sourseAddTimeTpl) 
        }


})