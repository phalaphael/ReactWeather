var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c51ea725149450653689218e21324556&units=metric';


// c51ea725149450653689218e21324556
// api.openweathermap.org/data/2.5/weather?appid=c51ea725149450653689218e21324556
module.exports = {
  getTemp: function(wLoc) {
    var encodedLocation = encodeURIComponent(wLoc);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    })



  }
};
