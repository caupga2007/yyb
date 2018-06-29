var chart = Highcharts.chart('container', {
		title: {
				text: '东京月平均天气数据'
		},
		subtitle: {
				text: '数据来源: WorldClimate.com'
		},
		xAxis: [{
				categories: [
						'一月', '二月', '三月', '四月', '五月', '六月','七月', '八月', '九月', '十月', '十一月', '十二月'
				],
				crosshair: true
		}],
		yAxis:[{
				lineWidth : 1,
				labels: {
						format: '{value}°C',
						style: {
								color: Highcharts.getOptions().colors[2]
						}
				},
				title: {
						text: '温度',
						style: {
								color: Highcharts.getOptions().colors[2],
								writingMode:'tb-rl'    //文字样式，
						},
						y: -150,
						x: 30,
						floating: true
				},
		},{
				lineWidth : 1,
				title: {
						text: '降雨量',
						style: {
								color: Highcharts.getOptions().colors[0],
								writingMode:'tb-rl'    //文字样式，
						},
						y: -150,
						x: 60,
						floating: false
				},
				labels: {
						format: '{value} mm',
						style: {
								color: Highcharts.getOptions().colors[0]
						}
				}
		},{
				title:{
						text :'y2'
				},
				lineWidth : 1,
				opposite:true
		},{
				title:{
						text :'y3'
				},
				lineWidth : 1,
				opposite:true
		}],
		series: [{
				data: [1,2,3,4,5,6,7,8,9],
				name: 'Right',
				yAxis:0
		}, {
				data: [4,1,5,8,7,10,13,11,11],
				yAxis:1,
				name: 'Center'
		}, {
				data: [9,10,11,12,13,14,15,16,17],
				step: 'left',
				yAxis:2,
				name: 'Left'
		}, {
				data: [1,10,9,12,3,1,12,19,11],
				step: 'left',
				yAxis:3,
				name: 'Left'
		}]
});
