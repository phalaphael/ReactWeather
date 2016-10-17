var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to About page.</p>
      <p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - JS framework
              used for the course.
          </li>
          <li>
            <a href="http://openweathermap.org">OpenWwather</a> - bubububu
          </li>
        </ul>
      </p>
        <table>
    <thead>
      <tr>
        <th width="200">Table Header</th>
        <th>Table Header</th>
        <th width="150">Table Header</th>
        <th width="150">Table Header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Content Goes Here</td>
        <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
        <td>Content Goes Here</td>
        <td>Content Goes Here</td>
      </tr>
      <tr>
        <td>Content Goes Here</td>
        <td>This gravida at eget metus.</td>
        <td>Content Goes Here</td>
        <td>Content Goes Here</td>
      </tr>
      <tr>
        <td>Content Goes Here</td>
        <td>This is longer Content at eget metus.</td>
        <td>Content Goes Here</td>
        <td>Content Goes Here</td>
      </tr>
    </tbody>
  </table>
    </div>
  )
}

module.exports = About;
