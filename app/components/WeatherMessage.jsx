var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {wLoc, temp} = this.props;
//     return (
//       <h4>Temperature in {wLoc} is {temp}</h4>
//     );
//   }
// });

var WeatherMessage = ({temp, wLoc}) => {
  return (
    <h4>Temperature in {wLoc} is {temp}</h4>
  );
}

module.exports = WeatherMessage;
