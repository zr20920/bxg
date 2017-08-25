/**
 * 编辑JS
 * Created by Administrator on 2017/8/22.
 */
define(['jquery', 'text!tpls/teacherEdit.html', 'template'], function ($, teacherEditTpl, template) {

    return function (id,callback) {
        console.log(id)
        alert(1111111111) //能力检测很重要,这里出现过打印两次的情况
        $.ajax({
            url: 'api/teacher/edit',
            type: 'get',
            data: {tc_id: id},
            success: function (res) {
                console.log(res)
                //var msg = eval("("+data+")");
                if (res.code != 200) throw new Error(res.msg);

                var teacherEdit = template.render(teacherEditTpl, res.result);

                var $teacherEdit = $(teacherEdit)
                //console.log($teacherEdit)
                $teacherEdit.on('submit', 'form', function () {

                    var formData = $(this).serialize();

                    $.ajax({
                        url:"/api/teacher/update",
                        type: 'get',
                        data: formData,
                        success: function (res) {
                            if(res.code!=200) throw new Error(res.msg);

                            $teacherEdit.modal('hide');
                            console.log(res)
                            callback()
                            //$teacherEdit.modal()


                        }


                    })
                    return false;

                }).appendTo('body').modal()



            }

        })


    }
})