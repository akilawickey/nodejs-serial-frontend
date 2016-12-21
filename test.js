/*
NODE js library handler to get data from serial ports and push them to the websockets and display in GUI
*/

var express = require("express");
var app = express();
var http = require('http').Server(app);
var path = __dirname + '/';
var io = require('socket.io')(http);
var router = express.Router();
var SerialPort = require('serialport'); /*Serial Port Intitiate*/
var port = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600,
  bufferSize: 1 ,
  rtscts: true ,
});

var str = "";
var count=0;
var no_pkt = 0;
var flag_V = 0; /*Validation Flag*/

/*Socket IO*/
router.use("/",function(req,res){
  res.sendFile(path + "index.html");
});
app.use("/",router);
app.use(express.static(__dirname + '/public'));

port.on('data', function (data) {
  if(flag_V == 0) validateData(data) ;
  else{
  	str += data;
  	if(data == "!"){ 	
  		myPrint(str);
  		count = 0;
  		io.emit('chat message', str);	//send msg to web interface.
  		str=""
  		flag_V = 0;
  		no_pkt++;
  		console.log("data number :" + no_pkt);
  	} 	
  	count++;
  }

});

io.on('connection', function(socket){
    console.log('User connected'); // this will print when users are connected
    socket.on('chat message', function(msg){

    });
    socket.on('disconnect', function(data) {
        console.log('-----------------disconnected the socket!-------------');
    });
});

/*Create http server*/
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on :3000');
  console.log('--------------------Server Started---------------------------');
});

// these functions are for data validation

function myPrint(data) {
	var i;
 	console.log('Data: ' + data);
}
// this function will validate data
function validateData(x){
	if(x != "#"){
		port.flush();
	}else if( x == "#"){
		flag_V=1;
		console.log("Validated");
	}
}

