(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

window.ReactDOM = require("react-dom");
window.React = require("react");
window.Dashboard = require('./jsx/dashboard.jsx');
window.NavBar = require('./jsx/nav.jsx');
window.PerProfile = require('./jsx/perProfile.jsx');

},{"./jsx/dashboard.jsx":5,"./jsx/nav.jsx":6,"./jsx/perProfile.jsx":7,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
  var name = _ref.name;

  return _react2.default.createElement(
    'div',
    { className: 'col-lg-6 col-sm-6' },
    _react2.default.createElement(
      'div',
      { className: 'card hovercard' },
      _react2.default.createElement(
        'div',
        { className: 'card-background' },
        _react2.default.createElement('img', { className: 'card-bkimg', alt: '', src: '/img/Profile_pic.jpg' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'useravatar' },
        _react2.default.createElement('img', { alt: '', src: '/img/Profile_pic.jpg' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'card-info' },
        _react2.default.createElement(
          'span',
          { className: 'card-title' },
          name[0]
        ),
        _react2.default.createElement(
          'span',
          { className: 'card-title' },
          name[1]
        )
      )
    )
  );
};

exports.default = Avatar;

},{"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bio = function Bio(_ref) {
  var text = _ref.text;

  return _react2.default.createElement(
    'div',
    null,
    text
  );
};

exports.default = Bio;

},{"react":"react","react-dom":"react-dom"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Social_Media = function Social_Media(_ref) {
  var list = _ref.list;

  return _react2.default.createElement(
    'div',
    { className: 'row' },
    list.map(function (account) {
      return _react2.default.createElement(
        'div',
        { className: 'col-sm-6' },
        account
      );
    })
  );
};

exports.default = Social_Media;

},{"react":"react","react-dom":"react-dom"}],5:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nav = require('./nav.jsx');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dashboard = _react2.default.createClass({
  displayName: 'Dashboard',

  getIntialState: function getIntialState() {
    name: {}
  },
  componentDidMount: function componentDidMount() {
    $(document).ready(function () {
      $('#example').DataTable({
        dom: 'l<".dashboard-label">frtip'
      });
      $('<label class="label label-info"/>').text('Daily').appendTo('.dashboard-label');
      $('<label class="label label-primary"/>').text('Monthly').appendTo('.dashboard-label');
      $('<label class="label label-success"/>').text('All-Time').appendTo('.dashboard-label');
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_nav2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'container dashboard-container' },
        _react2.default.createElement(
          'div',
          { className: 'row', style: { margin: "10px" } },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
              'table',
              { id: 'example', className: 'table table-striped table-bordered dashboard-table', cellspacing: '0' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Avatar'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Name'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'LAI'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Actions'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Points'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement('img', { alt: 'image', className: 'dashboard-table-avatar', src: '/img/1065-IMG_2529.jpg' })
                  ),
                  _react2.default.createElement(
                    'td',
                    { className: 'dashboard-fix-td-margin' },
                    'Karam'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement('img', { alt: 'image', className: 'dashboard-table-avatar', src: '/img/1065-IMG_2529.jpg' })
                  ),
                  _react2.default.createElement(
                    'td',
                    { className: 'dashboard-fix-td-margin' },
                    '5 Actions'
                  ),
                  _react2.default.createElement(
                    'td',
                    { className: 'dashboard-fix-td-margin' },
                    '200pts'
                  )
                )
              )
            )
          )
        )
      )
    );
  }
});
module.exports = Dashboard;

},{"./nav.jsx":6,"react":"react","react-dom":"react-dom"}],6:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dashboard = _react2.default.createClass({
    displayName: 'Dashboard',

    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'navbar navbar-default navbar-fixed-top', role: 'navigation' },
            _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'navbar-header' },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse' },
                        _react2.default.createElement('span', { className: 'icon-bar' }),
                        _react2.default.createElement('span', { className: 'icon-bar' }),
                        _react2.default.createElement('span', { className: 'icon-bar' })
                    ),
                    _react2.default.createElement(
                        'a',
                        { target: '_blank', href: '#', className: 'navbar-brand', style: { marginTop: "5px" } },
                        'My App.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'collapse navbar-collapse' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'nav navbar-nav' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                'Home'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'nav navbar-nav navbar-right' },
                        _react2.default.createElement(
                            'li',
                            { className: 'dropdown' },
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-user', style: { paddingRight: "5px" } }),
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Salman'
                                ),
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-down', style: { paddingLeft: "5px" } })
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'dropdown-menu' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'navbar-login' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-lg-4' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'text-center' },
                                                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-user icon-size' })
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-lg-8' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'text-left' },
                                                    _react2.default.createElement(
                                                        'strong',
                                                        null,
                                                        'Salman Khan'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'text-left small' },
                                                    'crazytodevelop@@gmail.com'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'text-left' },
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: '#', className: 'btn btn-primary btn-block btn-sm' },
                                                        'Profile'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement('li', { className: 'divider navbar-login-session-bg' }),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'Account Settings ',
                                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-cog pull-right' })
                                    )
                                ),
                                _react2.default.createElement('li', { className: 'divider' }),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'User stats ',
                                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-stats pull-right' })
                                    )
                                ),
                                _react2.default.createElement('li', { className: 'divider' }),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'Sign Out ',
                                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-log-out pull-right' })
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
});
module.exports = Dashboard;

},{"react":"react","react-dom":"react-dom"}],7:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Avatar = require('./Per_Profile/components/Avatar.jsx');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Bio = require('./Per_Profile/components/Bio.jsx');

var _Bio2 = _interopRequireDefault(_Bio);

var _Social_Media = require('./Per_Profile/components/Social_Media.jsx');

var _Social_Media2 = _interopRequireDefault(_Social_Media);

var _nav = require('./nav.jsx');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dummy_data = {
  "Name": "John Doe",
  "Title": "Developer",
  "Integrations": ["Twitter", "Facebook", "LinkedIn"]
};

var PerProfile = _react2.default.createClass({
  displayName: 'PerProfile',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_nav2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-12' },
          _react2.default.createElement(
            'div',
            { className: 'panel panel-info' },
            _react2.default.createElement(
              'div',
              { className: 'panel-heading' },
              'YOUR PROFILE'
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel-body' },
              _react2.default.createElement(
                'div',
                { className: 'list-group-item' },
                _react2.default.createElement(_Avatar2.default, { name: [dummy_data.Name, dummy_data.Title] }),
                _react2.default.createElement(_Bio2.default, { text: dummy_data.Title }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_Social_Media2.default, { list: dummy_data.Integrations })
              )
            )
          )
        )
      )
    );
  }

});
module.exports = PerProfile;

},{"./Per_Profile/components/Avatar.jsx":2,"./Per_Profile/components/Bio.jsx":3,"./Per_Profile/components/Social_Media.jsx":4,"./nav.jsx":6,"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDbGllbnRcXGFwcC5qc3giLCJDbGllbnRcXGpzeFxcUGVyX1Byb2ZpbGVcXGNvbXBvbmVudHNcXEF2YXRhci5qc3giLCJDbGllbnRcXGpzeFxcUGVyX1Byb2ZpbGVcXGNvbXBvbmVudHNcXEJpby5qc3giLCJDbGllbnRcXGpzeFxcUGVyX1Byb2ZpbGVcXGNvbXBvbmVudHNcXFNvY2lhbF9NZWRpYS5qc3giLCJDbGllbnRcXGpzeFxcZGFzaGJvYXJkLmpzeCIsIkNsaWVudFxcanN4XFxuYXYuanN4IiwiQ2xpZW50XFxqc3hcXHBlclByb2ZpbGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxPQUFPLFFBQVAsR0FBaUIsUUFBUSxXQUFSLENBQWpCO0FBQ0EsT0FBTyxLQUFQLEdBQWMsUUFBUSxPQUFSLENBQWQ7QUFDQSxPQUFPLFNBQVAsR0FBbUIsUUFBUSxxQkFBUixDQUFuQjtBQUNBLE9BQU8sTUFBUCxHQUFnQixRQUFRLGVBQVIsQ0FBaEI7QUFDQSxPQUFPLFVBQVAsR0FBb0IsUUFBUSxzQkFBUixDQUFwQjs7Ozs7Ozs7O0FDSkE7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTSxTQUFTLFNBQVQsTUFBUyxPQUFXO0FBQUEsTUFBVCxJQUFTLFFBQVQsSUFBUzs7QUFDeEIsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLG1CQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWY7QUFDRSwrQ0FBSyxXQUFVLFlBQWYsRUFBNEIsS0FBSSxFQUFoQyxFQUFtQyxLQUFJLHNCQUF2QztBQURGLE9BREY7QUFLQTtBQUFBO0FBQUEsVUFBSyxXQUFVLFlBQWY7QUFDSSwrQ0FBSyxLQUFJLEVBQVQsRUFBWSxLQUFJLHNCQUFoQjtBQURKLE9BTEE7QUFRQTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFB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REYsU0FERjtBQXNERDtBQXhEK0IsQ0FBbEIsQ0FBaEI7QUEwREEsT0FBTyxPQUFQLEdBQWlCLFNBQWpCOzs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU0sYUFBYTtBQUNiLFVBQVEsVUFESztBQUViLFdBQVMsV0FGSTtBQUdiLGtCQUFnQixDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLFVBQXhCO0FBSEgsQ0FBbkI7O0FBTUEsSUFBSSxhQUFhLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDakMsVUFBUSxrQkFBVztBQUNqQixXQUNFO0FBQUE7QUFBQTtBQUNFLHdEQURGO0FBRUU7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGVBQWY7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsaUJBQWY7QUFDRSxrRUFBUSxNQUFNLENBQUMsV0FBVyxJQUFaLEVBQWtCLFdBQVcsS0FBN0IsQ0FBZCxHQURGO0FBRUUsK0RBQUssTUFBTSxXQUFXLEtBQXRCLEdBRkY7QUFHRSx5REFIRjtBQUlFLHdFQUFjLE1BQU0sV0FBVyxZQUEvQjtBQUpGO0FBREY7QUFGRjtBQURGO0FBREY7QUFGRixLQURGO0FBb0JEOztBQXRCZ0MsQ0FBbEIsQ0FBakI7QUF5QkEsT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIndpbmRvdy5SZWFjdERPTT0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcclxud2luZG93LlJlYWN0PSByZXF1aXJlKFwicmVhY3RcIik7XHJcbndpbmRvdy5EYXNoYm9hcmQgPSByZXF1aXJlKCcuL2pzeC9kYXNoYm9hcmQuanN4Jyk7XHJcbndpbmRvdy5OYXZCYXIgPSByZXF1aXJlKCcuL2pzeC9uYXYuanN4Jyk7XHJcbndpbmRvdy5QZXJQcm9maWxlID0gcmVxdWlyZSgnLi9qc3gvcGVyUHJvZmlsZS5qc3gnKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuXHJcbmNvbnN0IEF2YXRhciA9ICh7bmFtZX0pID0+e1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhvdmVyY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtYmtpbWdcIiBhbHQ9XCJcIiBzcmM9XCIvaW1nL1Byb2ZpbGVfcGljLmpwZ1wiLz5cclxuICAgICAgICAgIHsvKjwhLS0gaHR0cDovL2xvcmVtcGl4ZWwuY29tLzg1MC8yODAvcGVvcGxlLzkvIC0tPiovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJhdmF0YXJcIj5cclxuICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiL2ltZy9Qcm9maWxlX3BpYy5qcGdcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5mb1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57bmFtZVswXX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntuYW1lWzFdfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuXHJcbmNvbnN0IEJpbyA9ICh7dGV4dH0pID0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2Pnt0ZXh0fTwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlvO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5cclxuY29uc3QgU29jaWFsX01lZGlhID0gKHtsaXN0fSkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgey8qSXQgdGFrZXMgdGhlIGFycmF5IG9iamVjdFxyXG4gICAgICAgICAgdGhlbiB1c2VzIG1hcCwgYWNjb3VudCBpcyBhbm90aGVyIGZ1bmN0aW9uXHJcbiAgICAgICAgICBhbmQgaXQgd2lsbCBqdXN0IHJldHVybiBlYWNoIG9mIHRoZSBhcnJheSBpdGVtKi99XHJcbiAgICAgICAge2xpc3QubWFwKChhY2NvdW50KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj57YWNjb3VudH08L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxfTWVkaWE7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL25hdi5qc3gnXHJcbnZhciBEYXNoYm9hcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgZ2V0SW50aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgbmFtZToge1xyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJyNleGFtcGxlJykuRGF0YVRhYmxlKHtcclxuICAgICAgICBkb20gOiAnbDxcIi5kYXNoYm9hcmQtbGFiZWxcIj5mcnRpcCdcclxuICAgICAgfSk7XHJcbiAgICAgICQoJzxsYWJlbCBjbGFzcz1cImxhYmVsIGxhYmVsLWluZm9cIi8+JykudGV4dCgnRGFpbHknKS5hcHBlbmRUbygnLmRhc2hib2FyZC1sYWJlbCcpXHJcbiAgICAgICQoJzxsYWJlbCBjbGFzcz1cImxhYmVsIGxhYmVsLXByaW1hcnlcIi8+JykudGV4dCgnTW9udGhseScpLmFwcGVuZFRvKCcuZGFzaGJvYXJkLWxhYmVsJylcclxuICAgICAgJCgnPGxhYmVsIGNsYXNzPVwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiLz4nKS50ZXh0KCdBbGwtVGltZScpLmFwcGVuZFRvKCcuZGFzaGJvYXJkLWxhYmVsJylcclxuICAgIH0gKTtcclxuIFx0fSxcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2QmFyPjwvTmF2QmFyPlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImNvbnRhaW5lciBkYXNoYm9hcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7Ly8gPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgLy8gICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGRhc2hib2FyZC1maWx0ZXJcIj5cclxuICAgICAgICAgIC8vIFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPkV4cG9ydCBCYXNpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgLy8gXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiYWxsXCI+RXhwb3J0IEFsbDwvb3B0aW9uPlxyXG4gICAgICAgICAgLy8gXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwic2VsZWN0ZWRcIj5FeHBvcnQgU2VsZWN0ZWQ8L29wdGlvbj5cclxuICAgICAgICAgIC8vIFx0XHQ8L3NlbGVjdD5cclxuICAgICAgICAgIC8vICAgPC9kaXY+XHJcbiAgICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggZGFzaGJvYXJkLWxhYmVsXCI+XHJcbiAgICAgICAgICAvLyAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtaW5mb1wiPkRhaWx5PC9zcGFuPlxyXG4gICAgICAgICAgLy8gICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGxhYmVsLXByaW1hcnlcIj5Nb250aGx5PC9zcGFuPlxyXG4gICAgICAgICAgLy8gICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIj5BbGwtVGltZTwvc3Bhbj5cclxuICAgICAgICAgIC8vICAgPC9kaXY+XHJcbiAgICAgICAgICAvLyA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgLy8gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgIC8vICAgICA8aW1nIGFsdD1cImltYWdlXCIgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXByb2ZpbGUtcGljdHVyZVwiIHNyYz1cIi4uLy4uLy4uL2ltZy8xMDY1LUlNR18yNTI5LmpwZ1wiIC8+XHJcbiAgICAgICAgICAvLyAgICA8L2Rpdj5cclxuICAgICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3ttYXJnaW46IFwiMTBweFwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGlkPVwiZXhhbXBsZVwiIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgZGFzaGJvYXJkLXRhYmxlXCIgY2VsbHNwYWNpbmc9XCIwXCI+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+QXZhdGFyPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+TEFJPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+UG9pbnRzPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cImltYWdlXCIgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXRhYmxlLWF2YXRhclwiIHNyYz1cIi9pbWcvMTA2NS1JTUdfMjUyOS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLWZpeC10ZC1tYXJnaW5cIj5LYXJhbTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIGFsdD1cImltYWdlXCIgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXRhYmxlLWF2YXRhclwiIHNyYz1cIi9pbWcvMTA2NS1JTUdfMjUyOS5qcGdcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkYXNoYm9hcmQtZml4LXRkLW1hcmdpblwiPjUgQWN0aW9uczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkYXNoYm9hcmQtZml4LXRkLW1hcmdpblwiPjIwMHB0czwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IERhc2hib2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxudmFyIERhc2hib2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLXRvcFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjVweFwifX0+TXkgQXBwLjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcIiBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjVweFwifX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TYWxtYW48L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duXCIgc3R5bGU9e3twYWRkaW5nTGVmdDpcIjVweFwifX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXIgaWNvbi1zaXplXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPjxzdHJvbmc+U2FsbWFuIEtoYW48L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHNtYWxsXCI+Y3Jhenl0b2RldmVsb3BAQGdtYWlsLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGJ0bi1zbVwiPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyIG5hdmJhci1sb2dpbi1zZXNzaW9uLWJnXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFjY291bnQgU2V0dGluZ3MgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jb2cgcHVsbC1yaWdodFwiPjwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlVzZXIgc3RhdHMgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGF0cyBwdWxsLXJpZ2h0XCI+PC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U2lnbiBPdXQgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctb3V0IHB1bGwtcmlnaHRcIj48L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxubW9kdWxlLmV4cG9ydHMgPSBEYXNoYm9hcmQ7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuL1Blcl9Qcm9maWxlL2NvbXBvbmVudHMvQXZhdGFyLmpzeCc7XHJcbmltcG9ydCBCaW8gZnJvbSAnLi9QZXJfUHJvZmlsZS9jb21wb25lbnRzL0Jpby5qc3gnO1xyXG5pbXBvcnQgU29jaWFsX01lZGlhIGZyb20gJy4vUGVyX1Byb2ZpbGUvY29tcG9uZW50cy9Tb2NpYWxfTWVkaWEuanN4JztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL25hdi5qc3gnXHJcblxyXG5cclxuY29uc3QgZHVtbXlfZGF0YSA9IHtcclxuICAgICAgXCJOYW1lXCI6IFwiSm9obiBEb2VcIixcclxuICAgICAgXCJUaXRsZVwiOiBcIkRldmVsb3BlclwiLFxyXG4gICAgICBcIkludGVncmF0aW9uc1wiOiBbXCJUd2l0dGVyXCIsIFwiRmFjZWJvb2tcIiwgXCJMaW5rZWRJblwiXVxyXG59XHJcblxyXG52YXIgUGVyUHJvZmlsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZCYXI+PC9OYXZCYXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPllPVVIgUFJPRklMRTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhciBuYW1lPXtbZHVtbXlfZGF0YS5OYW1lLCBkdW1teV9kYXRhLlRpdGxlXX0vPlxyXG4gICAgICAgICAgICAgICAgICA8QmlvIHRleHQ9e2R1bW15X2RhdGEuVGl0bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgPFNvY2lhbF9NZWRpYSBsaXN0PXtkdW1teV9kYXRhLkludGVncmF0aW9uc30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgfSk7XHJcbm1vZHVsZS5leHBvcnRzID0gUGVyUHJvZmlsZTtcclxuIl19
