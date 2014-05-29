var React = require('react');
var hello = require('./hello.jsx');

React.renderComponent(hello({name: 'World'}), document.getElementById('app'));
