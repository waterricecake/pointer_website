//radar
var ctxR = document.getElementById("radarChart").getContext('2d');
var myRadarChart = new Chart(ctxR, {
type: 'radar',
data: {
labels: ["추임새(횟수)", "떨림(횟수)", "침묵(초)", "빠르기(음절/초)"],
datasets: [{
label: "4회차",
data: [3, 5, 0, 4.92],
backgroundColor: [
'rgba(105, 0, 132, .2)',
],
borderColor: [
'rgba(200, 99, 132, .7)',
],
borderWidth: 2
},
{
label: "전체 평균",
data: [7.25, 3.5, 7.5, 3.27],
backgroundColor: [
'rgba(0, 250, 220, .2)',
],
borderColor: [
'rgba(0, 213, 132, .7)',
],
borderWidth: 2
}
]
},
options: {
responsive: true
}
});