/**
 * 课时列表
 * Created by Administrator on 2017/8/24.
 */
define(['jquery', 'text!tpls/sourseTimeList.html', 'sourse/addTime', 'sourse/editTime','template'], function ($, sourseTimeListTpl, sourseAddTime, sourseEditTime,template) {

    return function (id) {
        //单元检测
        //    alert(1111111111111)
        //$('.right .content').html('加载了课时列表')

        $.ajax({
            url: 'api/course/lesson',
            type: 'get',
            data: {cs_id: id},
            success: function (res) {
                if (res.code != 200) throw new Error(res.msg);
                var sourseTimeList = template.render(sourseTimeListTpl, res)
                console.log(res)
                var $sourseTimeList = $(sourseTimeList)

                $('.right .content').html($sourseTimeList);
                $sourseTimeList.on('click', '.btn-add', function () {
                    //e.preventDefault()
                    //alert('你点到我了哦')
                    sourseAddTime()

                    //return false;
                })
                    .on('click', '.btn-edit', function () {
                        //e.preventDefault()
                        //alert('你点到我了哦')
                        sourseEditTime()

                        //return false;
                    })


            }


        })

    }


})