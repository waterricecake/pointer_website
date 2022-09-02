// Chart customizer
window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

(function(global) {
	var MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	var COLORS = [
		'#4dc9f6',
		'#f67019',
		'#f53794',
		'#537bc4',
		'#acc236',
		'#166a8f',
		'#00a950',
		'#58595b',
		'#8549ba'
	];

	var Samples = global.Samples || (global.Samples = {});
	var Color = global.Color;

	Samples.utils = {
		// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
		srand: function(seed) {
			this._seed = seed;
		},

		rand: function(min, max) {
			var seed = this._seed;
			min = min === undefined ? 0 : min;
			max = max === undefined ? 1 : max;
			this._seed = (seed * 9301 + 49297) % 233280;
			return min + (this._seed / 233280) * (max - min);
		},

		numbers: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 1;
			var from = cfg.from || [];
			var count = cfg.count || 8;
			var decimals = cfg.decimals || 8;
			var continuity = cfg.continuity || 1;
			var dfactor = Math.pow(10, decimals) || 0;
			var data = [
				{x:200.0,y:300.0},{x:324.75,y:222.875},{x:334.875,y:222.5},{x:332.5,y:206.5},{x:325.875,y:196.375},{x:330.5,y:218.625},{x:329.25,y:217.625},{x:327.25,y:229.0},{x:327.25,y:233.5},{x:328.25,y:228.25},{x:336.0,y:219.875},{x:334.125,y:231.5},{x:324.5,y:216.25},{x:332.0,y:225.125},{x:335.5,y:237.25},{x:329.125,y:234.0},{x:332.0,y:221.125},{x:339.0,y:216.5},{x:338.75,y:224.375},{x:327.375,y:225.75},{x:329.125,y:221.5},{x:328.375,y:237.125},{x:327.75,y:228.125},{x:333.25,y:222.25},{x:334.0,y:236.0},{x:332.75,y:238.125},{x:326.375,y:221.625},{x:334.0,y:220.25},{x:332.0,y:235.5},{x:336.5,y:222.25},{x:346.0,y:239.625},{x:327.125,y:220.125},{x:328.75,y:224.25},{x:330.0,y:249.625},{x:322.625,y:235.5},{x:330.25,y:217.0},{x:327.25,y:262.5},{x:241.5,y:219.25},{x:262.5,y:238.625}
			// {
			// 	x: -10,
			// 	y: 0
			// }, {
			// 	x: 0,
			// 	y: 10
			// }, {
			// 	x: 10,
			// 	y: 5
			// }, {
			// 	x: 0.5,
			// 	y: 5.5
			// }
		]
			return data;
		},

		labels: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 100;
			var count = cfg.count || 8;
			var step = (max - min) / count;
			var decimals = cfg.decimals || 8;
			var dfactor = Math.pow(10, decimals) || 0;
			var prefix = cfg.prefix || '';
			var values = [];
			var i;

			for (i = min; i < max; i += step) {
				values.push(prefix + Math.round(dfactor * i) / dfactor);
			}

			return values;
		},

		months: function(config) {
			var cfg = config || {};
			var count = cfg.count || 12;
			var section = cfg.section;
			var values = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = MONTHS[Math.ceil(i) % 12];
				values.push(value.substring(0, section));
			}

			return values;
		},

		color: function(index) {
			return COLORS[index % COLORS.length];
		},

		transparentize: function(color, opacity) {
			var alpha = opacity === undefined ? 0.5 : 1 - opacity;
			return Color(color).alpha(alpha).rgbString();
		}
	};

	// DEPRECATED
	window.randomScalingFactor = function() {
		return Math.round(Samples.utils.rand(-100, 100));
	};

	// INITIALIZATION

	Samples.utils.srand(Date.now());

	// Google Analytics
	/* eslint-disable */
	if (document.location.hostname.match(/^(www\.)?chartjs\.org$/)) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-28909194-3', 'auto');
		ga('send', 'pageview');
	}
	/* eslint-enable */

}(this));

// Scatter chart
var color = Chart.helpers.color;
function generateData() {
  var data = [
	{x:200.0,y:300.0},{x:324.75,y:222.875},{x:334.875,y:222.5},{x:332.5,y:206.5},{x:325.875,y:196.375},{x:330.5,y:218.625},{x:329.25,y:217.625},{x:327.25,y:229.0},{x:327.25,y:233.5},{x:328.25,y:228.25},{x:336.0,y:219.875},{x:334.125,y:231.5},{x:324.5,y:216.25},{x:332.0,y:225.125},{x:335.5,y:237.25},{x:329.125,y:234.0},{x:332.0,y:221.125},{x:339.0,y:216.5},{x:338.75,y:224.375},{x:327.375,y:225.75},{x:329.125,y:221.5},{x:328.375,y:237.125},{x:327.75,y:228.125},{x:333.25,y:222.25},{x:334.0,y:236.0},{x:332.75,y:238.125},{x:326.375,y:221.625},{x:334.0,y:220.25},{x:332.0,y:235.5},{x:336.5,y:222.25},{x:346.0,y:239.625},{x:327.125,y:220.125},{x:328.75,y:224.25},{x:330.0,y:249.625},{x:322.625,y:235.5},{x:330.25,y:217.0},{x:327.25,y:262.5},{x:241.5,y:219.25},{x:262.5,y:238.625}
// 	{
// 	x: -10,
// 	y: 0
//   	}, {
// 	x: 0,
// 	y: 10
//   }, {
// 	x: 10,
// 	y: 5
//   }, {
// 	x: 0.5,
// 	y: 5.5
//   }
]

  return data;
}

var scatterChartData = {
  datasets: [{
    label: '본인',
    borderColor: window.chartColors.blue,
    backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
    data: generateData()
  }]
};

window.onload = function() {
  var ctx = document.getElementById('canvas').getContext('2d');
  window.myScatter = Chart.Scatter(ctx, {
    data: scatterChartData
  });
};

document.getElementById('randomizeData').addEventListener('click', function() {
  scatterChartData.datasets.forEach(function(dataset) {
    dataset.data = dataset.data.map(function() {
      return {
        x: randomScalingFactor(),
        y: randomScalingFactor()
      };
    });
  });
  window.myScatter.update();
});