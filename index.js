//require('node-jsx').install({extension: '.jsx'});
var React = require('react');
var config = require('./config');
var FieldManager = require('./fieldManager');
var Parameters = require('./parameters');
var Flyout = require('./controls/flyout.jsx');
var TravelPeriodFlyout = require('./controls/travelPeriodFlyout.jsx');
var TravellersFlyout = require('./controls/travellersFlyout.jsx');

var parameters = new Parameters();

var fm = new FieldManager(config);


var travelPeriodFlyout = React.render(React.createElement(TravelPeriodFlyout), document.getElementById('travelPeriodFlyout'));

//var travellersFlyout = React.render(React.createElement(TravellersFlyout), document.getElementById('travellersFlyout'));

var destinations = React.render(React.createElement(require('./controls/destinations.jsx'), {param: "destinations"}), document.getElementById('destinations'));
var changedParams = React.render(React.createElement(require('./controls/changedParams.jsx')), document.getElementById('changedParams'));

fm.bindControl(changedParams);
fm.bindControl(travelPeriodFlyout);
//fm.bindControl(travellersFlyout);
fm.bindControl(destinations, "destinations");
fm.bindControl(parameters);