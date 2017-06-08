var About = require("./private/about.jsx")
var PrivateProfile = React.createClass({
  render: function() {
    return (
      <div>
        <About></About>
      </div>
    );
  }
});
module.exports = PrivateProfile;
