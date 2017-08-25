/**
 * 添加课程
 * Created by Administrator on 2017/8/23.
 */

define(['jquery', 'text!tpls/sourseAdd.html'], function ($, sourseAddTpl) {


    return function () {
        var $sourceAdd = $(sourseAddTpl).on('submit', 'form', function () {
            var formData = $(this).serialize();
            console.log(formData)
            $.ajax({

                url: 'api/course/create',
                type: 'post',
                data: formData,
                success: function (res) {
                    if (res.code != 200) throw new Error(res.msg);

                    //console.log(res)

                }


            })


            //alert(1111111111)


            //$('.right .content').html(sourseAddTpl);

            return false;
        }).appendTo('body').modal()

    }
})