 var batt_temp;
 var y = [];
 var speed;
 var voltPct;
 var mAmps;
 var bAmps;
 var throttle;
 var Id;
 var Iq;
 var IdRef;
 var IqRef;


 swapTxt = true;
 var socket = io();

socket.on('chat message', function (msg){
  var res = msg.split(",");

  txtWhere = swapTxt ? $('#msg1') : $('#msg2');
  addToTextarea(txtWhere, (msg+"\n"));

  if(res[0].includes("T")){
    batt_temp = [];
    y[0] = [];
    speed = res[2];
    voltPct = res[3];
    mAmps = res[4];
    bAmps = res[5];
    throttle = res[6];
    Iq = res[7];
    Id = res[8];
    IqRef = res[9];
    IdRef = res[10];
    // bAmps = res[11];
    // bAmps = res[12];
    // bAmps = res[13];
    // bAmps = res[14];
    // bAmps = res[15];
    // bAmps = res[16];
    // bAmps = res[17];
    // bAmps = res[18];
    // bAmps = res[19];
  }
  //if (res[0].includes("M")) speed = res[1];
});


var addToTextarea = ($ta, text) => {
  const length = 20;
  var t = (($ta.val() ? $ta.val() : "") + text).split("\n");
  t = (t.length > length) ? t.slice(t.length - length) : t
  $ta.val(t.join("\n")).scrollTop($ta[0].scrollHeight);;
}


var swapTextArea = () => {
  swapTxt = swapTxt ? false : true
}

function reload(){
  //battery.series[0].setData(batt_temp);
  point = chartRpm.series[0].points[0].update( (parseInt(speed)) / 5);
  point = chartVoltPct.series[0].points[0].update( (parseInt(voltPct)) * 3);
  point = chartMotorAmps.series[0].points[0].update( (parseInt(mAmps)) * 8);
  point = chartBatteryAmps.series[0].points[0].update( (parseInt(bAmps)) * 8);
  point = chartThrottlePct.series[0].points[0].update( (parseInt(throttle)) * 100);
  point = chartId.series[0].points[0].update( (parseInt(Id)) * 100);
  point = chartIq.series[0].points[0].update( (parseInt(Iq)) * 100);
  point = chartIdRef.series[0].points[0].update( (parseInt(IdRef)) * 100);
  point = chartIqRef.series[0].points[0].update( (parseInt(IqRef)) * 10);


}
setInterval(reload, 100);

