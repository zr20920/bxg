/* 
    点击获取图片

*/

define(['jquery', 'text!tpls/sourseImage.html', 'template','upload'], function ($, sourseImageTpl, template) {

    return function (cs_id,callback) {

        // alert(111)

        $.ajax({
            url: '/api/course/picture',
            type: 'get',
            data: {
                cs_id: cs_id,
            },
            success: function (res) {
                console.log(res)
                var sourseImage = template.render(sourseImageTpl, res.result);
                var $sourseImage = $(sourseImage);

                $('.right .content').html($sourseImage);
                $("#fileImage").uploadify({
                    
                            auto:true,//选择文件之后是否自动上传        true自动上传
                    
                    //        buttonImage:"../imgs/pic.jpg",
                    
                    //        checkExisting:true,//选择一个文件的时候，检测上传队列中是否有相同的文件,如果相同会有提示
                    
                            fileObjName:"cs_cover_original", //：等同于file标签的name值
                    
                            fileTypeExts:"*.jpg; *.png; *.gif",
                    
                            formData:{
                                cs_id:cs_id
                            },       //用于表单提交的额外数据
                    
                            itemTemplate:"<span></span>",     //上传模板
                    
                            // height        : 198,
                            swf           : '../assets/uploadify/uploadify.swf',//swf文件的地址
                            uploader      : '/api/uploader/cover',//服务器中处理上传请求的地址
                            // width         : 195,
                            buttonText:"选择图片",
                            onUploadSuccess : function(file, data, response) {
                                console.log(file);
                                console.log(data);
                                console.log(response);
            
                                // $(".left .list-group .sourse").trigger("click");
                                callback();
                            }
                        });


            }
        })



    }


})