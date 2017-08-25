/**
 * Created by Administrator on 2017/8/22.
 */
define(['jquery','text!tpls/teacherShow.html','template'], function ($,teacherShowTpl,template) {


    return function (id){
           //alert(1111111111111)
        $.ajax({
            url:'api/teacher/view',
            type:'get',
            data:{tc_id:id},
            success:function(res){
                        //console.log(res.result);
                        if(res.code!=200) throw new Error(res.msg)
                var teacherShow = template.render(teacherShowTpl,res.result);

                var $teacherShow = $(teacherShow);
                //console.log($teacherShow)
                $('#modaShowTeacher').remove();

                $teacherShow.appendTo('body').modal();


            }


        })

    }
})