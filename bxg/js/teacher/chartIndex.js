define(['text!tpls/chartIndex.html','echarts'],function(chartIndexTpl,echarts){

    return function(){

            $.ajax({
                url:'/api/teacher',
                success:function(res){
                    // var count = [{name:'男',value:0},{name:'女',value:0}]

                    $('.right .content').html(chartIndexTpl);


                    var mychartIndex = echarts.init(document.querySelector('#echartMain'));
                    var option = {
                        title: {
                            text: '前端九期男女统计'
                        },
                        tooltip: {},
                        legend: {
                            data:['男女比例']
                        },
                        xAxis: {
                            data: ["男","女"]
                        },
                        yAxis: {},
                        series: [{
                            name: '比例',
                            type: 'bar',
                            data: [80, 16]
                        }],


                    }
            
                    // 使用刚指定的配置项和数据显示图表。
                  
                    mychartIndex.setOption(option);
                    
                }



            })
           


    }



})