var request = require('request');


function sendToArteco(onvifInfo){


const data = {
  "lane": "manageEvent",
  "data": {
      "ctx": "liveEvent",
      "chId": 10,
      "param": "Courma cortina",
      "brand": "VCA",
      "data": onvifInfo,
      "image": "",
      "cat": 200
  }
}


  request.post({
    headers: {'content-type' : 'application/json'},
    url:     'https://arteco1020.lan.omniaweb.cloud:496/api/v2/event',
    body:    JSON.stringify(data)
  }, function(error, response, body){
    console.log(body);
    console.log(response);

  });
  

}

sendEvent();