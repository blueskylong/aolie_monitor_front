import * as echarts from 'echarts';


export class EchartsTools {
    static showBarChart(el: HTMLElement, title: string, subTitle: string, data: Array<Array<any>>) {
        echarts.dispose(el as any);
        let myChart = echarts.init(el as any, "macarons");
        // 绘制图表
        myChart.setOption({
            title: {
                text: title
            },
            tooltip: {},
            xAxis: {
                // data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                data: data[0]
            },
            yAxis: {},
            series: [{
                name: subTitle,
                type: 'bar',
                // data: [5, 20, 36, 10, 10, 20]
                data: data[1]
            }]
        });
    }

    static toArray(data: []): Array<Array<any>> {
        if (!data) {
            return new Array<Array<any>>();
        }
        let title = [];
        let num = [];
        for (let row of data) {
            title.push(row[0]);
            num.push(row[1]);
        }
        return [title, num];

    }

    static toPieData(data: Array<Array<any>>) {
        if (!data) {
            return new Array<Array<any>>();
        }
        let result = [];
        for (let row of data) {
            result.push({"name": row[0], "value": row[1]});
        }
        return result;
    }

    static showPieChart(el: HTMLElement, title: string, subTitle: string, data: Array<Array<any>>) {
        let option = {
            title: {
                text: title,
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            series: [
                {
                    name: subTitle,
                    type: 'pie',
                    radius: '50%',
                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        echarts.dispose(el as any);
        let myChart = echarts.init(el as any);
        // 绘制图表
        myChart.setOption(option as any);
    }

    static showLineChart(el: HTMLElement, title: string, subTitle: string, data: Array<Array<any>>) {
        echarts.dispose(el as any);
        let myChart = echarts.init(el as any, "macarons");
        // 绘制图表
        myChart.setOption({
            title: {
                text: title
            },
            tooltip: {},
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: data[0]
            },
            yAxis: {type: 'value'},
            series: [{
                name: subTitle,
                type: 'line',
                // data: [5, 20, 36, 10, 10, 20]
                data: data[1],
                areaStyle: {}
            }]
        });

    }

    static showDashChart(el: HTMLElement, title: string, count: number) {
        echarts.dispose(el as any);
        let myChart = echarts.init(el as any, "macarons");
        // 绘制图表
        myChart.setOption({
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            series: [{
                name: 'Pressure',
                type: 'gauge',
                progress: {
                    show: true
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value}'
                },
                data: [{
                    value: count,
                    name: title
                }]
            }]
        } as any);

    }
}

