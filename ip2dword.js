net = require("net");
exports.ip2dword = function (ip){
  if(net.isIP(ip)){
      var x  = new Buffer(ip.split('.'));
      var ip = x[0] * Math.pow(256,3) + x[1] * Math.pow(256,2) + x[2] * 256 + x[3];
      return {
        "dec": ip,
        "oct": "0x"+ip.toString(8),
        "hex": "0"+ip.toString(16)
      };
  } else {
    return "Invalid IP";
  }
	
}

