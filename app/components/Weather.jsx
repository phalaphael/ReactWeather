var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap  = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },

    handleSearch: function(wLoc ) {
      var that = this;

      this.setState({
        isLoading: true
      });
      openWeatherMap.getTemp(wLoc).then(function(temp){
        that.setState({
          wLoc: wLoc,
          temp: temp,
          isLoading: false
        });
      }, function(errorMessage){
        that.setState({
          isLoading: false
        });
        alert(errorMessage);
      })
    },

    render: function() {
        var {isLoading,  wLoc, temp} = this.state;

        function renderMessage() {
          if (isLoading) {
            return <h3>Fetching weather...</h3>
          } else if (wLoc && temp) {
            return <WeatherMessage wLoc={wLoc} temp={temp}/>
          }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )

    }
});

module.exports = Weather;
