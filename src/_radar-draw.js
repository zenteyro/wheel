function showRadar(d, e)
{
  if(d != "" && e.keyCode == 13)
   var data = [];
    var chart = RadarChart.chart();

  dataInput = d.split(", ");
  serie = {};
  serie.className = "Учні";
  serie.axes = [];
  dataInput.forEach(function(item, i){
    serie.axes.push({"axis":i + 1, "value": parseFloat(item)});
  });
  serie.axes = serie.axes.reverse();
  data.push(serie);
  client_w=document.body.clientWidth;
client_h=document.body.clientHeight;
RadarChart.defaultConfig.radius = 3;
RadarChart.defaultConfig.w = client_w / 100 * 40;
RadarChart.defaultConfig.h = client_w / 100 * 40;
RadarChart.draw("#chart-container", data);
function animate(elem,time) {
    if( !elem) return;
    var to = elem.offsetTop;
    var from = window.scrollY;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            window.scrollTo(0,(from+step*(to-from))+1);
            if( step == 1){ clearInterval(timer);};
        },25);
        window.scrollTo(0,(from+1));
    }

var divVal = document.getElementById('chart-container');
animate(divVal,600);
}