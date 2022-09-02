// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1회차","2회차","3회차","4회차"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [16, 20, 13, 35],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'number'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

// Area Chart Example
var ctx = document.getElementById("myAreaChart-x");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    /*labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],*/
    labels: ["0.0","1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","11.0","12.0","13.0","14.0","15.0","16.0","17.0","18.0","19.0","20.0","21.0","22.0","23.0","24.0","25.0","26.0","27.0","28.0","29.0","30.0","31.0","32.0","33.0","34.0","35.0","36.0","37.0"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      /*data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],*/
      data: [-11.617427814158486,-10.749355666322792,-7.083333907058346,-5.2346279823390205,-10.148076917885444,-7.815964840318079,-11.001495390157327,-11.222634869534577,-9.792554858612391,-7.332085084840219,-10.426274075185688,-9.974495721614675,-9.889249422165394,-10.06097149330841,-10.497722951947999,-9.95965467682059,-5.523660336740676,-9.11829355072207,-8.797570712717064,-8.3284608568325,-10.323251027775715,-10.339207128226635,-5.928863588650976,-9.260273788187856,-9.638547892034733,-10.324715682236953,-7.951167534367894,-10.500361558019385,-8.363573293774268,-7.679101270734416,-6.570805555945499,-6.320873050164233,-11.516152034896349,-11.551216181108856,-9.28106837150486,-15.374459841258076,-9.501170847853064,-11.28284500866939],

    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'number'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: -20,
          max: 0,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

// Area Chart Example
var ctx = document.getElementById("myAreaChart-y");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["0.0","1.0","2.0","3.0","4.0","5.0","6.0","7.0","8.0","9.0","10.0","11.0","12.0","13.0","14.0","15.0","16.0","17.0","18.0","19.0","20.0","21.0","22.0","23.0","24.0","25.0","26.0","27.0","28.0","29.0","30.0","31.0","32.0","33.0","34.0","35.0","36.0"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [12.115795490038444,15.440088881034827,17.646998260829783,12.654687230782864,18.539519594388942,13.744013650958749,16.313588740064656,17.32728883628165,16.492335199375194,19.32127132378536,18.593256481975263,17.903525801064553,18.23927638772554,17.464327873678762,15.47250819275718,18.781558297531056,14.770370673666843,17.271388465913432,16.67723727948029,17.30379754791485,12.815192219521421,14.205183302180023,13.408471930623884,10.937859325208827,11.700283022348104,17.509375623693458,16.24024083806007,15.116540003608081,16.7127785133589,17.310040125385303,15.018536027562316,11.28934864112068,12.740223554969452,17.31293182252788,15.455912672488479,14.853292349410996,7.87145537519201,10.745135998336021]
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'number'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 10,
          max: 20,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

// Area Chart Example
var ctx = document.getElementById("myAreaChart-z");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1회차","2회차","3회차","4회차"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [1, 0, 2, 1],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'number'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 3,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
