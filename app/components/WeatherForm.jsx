var React = require('react');

var WeatherForm = React.createClass({

    onFormSubmit: function(e) {
        e.preventDefault();

        var wLoc = this.refs.wLoc.value;

        if (wLoc.length > 0) {
            this.refs.wLoc.value = '';
            this.props.onSearch(wLoc);

        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div><input type="text" ref="wLoc"/></div>
                    <div>
                        <button className="button expanded hollow">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
