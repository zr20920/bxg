/**
 * 课程分类
 * Created by Administrator on 2017/8/21.
 */
define(['jquery','text!tpls/categoryList.html','category/add','template'],function($,categoryListTpl,categoryAdd,template){

        return function(){

            //alert(11111111111)
            $.ajax({
                    url:'api/category',
                    type:'get',
                    success:function(res){
                            if(res.code!=200) throw new Error(res.msg);
                        //console.log(res)
                             var  categoryList =  template.render(categoryListTpl,res)
                                var $categoryList = $(categoryList);
                                 $('.right .content').html($categoryList)

                         $categoryList.on('click','.btn-add',function(){

                                //alert('你真厉害')
                             categoryAdd()


                         })


                    }
            })


        }

})