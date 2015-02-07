//require('node-jsx').install({extension: '.jsx'});
var React = require('react');
var config = require('./config');
var FieldManager = require('./fieldManager');
var Parameters = require('./parameters');
var Flyout = require('./flyout.jsx');
var TravelPeriodFlyout = require('./travelPeriodFlyout.jsx');

var parameters = new Parameters();

var fm = new FieldManager(config);


var travelPeriodFlyout = React.render(React.createElement(TravelPeriodFlyout, {
    fieldManager: fm
}), document.getElementById('travelPeriod'));

var destinations = React.render(React.createElement(require('./destinations.jsx'), {param: "destinations"}), document.getElementById('destinations'));

fm.bindControl(travelPeriodFlyout);
fm.bindControl(destinations, "destinations");
fm.bindControl(parameters);