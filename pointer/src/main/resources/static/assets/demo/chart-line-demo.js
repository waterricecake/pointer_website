//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["1회차", "2회차", "3회차", "4회차"],
datasets: [
{
    label: "추임새(회)",
    data: [18, 6, 2, 3],
    backgroundColor: [
    'rgba(105, 0, 132, .2)',
    ],
    borderColor: [
    'rgba(200, 99, 132, .7)',
    ],
    borderWidth: 2
},
{
    label: "떨림(회)",
    data: [11, 11, 10, 5],
    backgroundColor: [
    'rgba(0, 250, 220, .2)',
    ],
    borderColor: [
    'rgba(0, 213, 132, .7)',
    ],
    borderWidth: 2
},
{
    label: "침묵(초)",
    data: [13, 10, 7, 0],
    backgroundColor: [
    'rgba(111, 137, 132, .2)',
    ],
    borderColor: [
    'rgba(0, 10, 30, .7)',
    ],
    borderWidth: 2
}
]
},
options: {
responsive: true
}
});