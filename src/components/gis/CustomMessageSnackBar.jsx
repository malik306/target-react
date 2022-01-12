import React from "react";
import PropTypes from "prop-types";
import { hot, setConfig } from "react-hot-loader";
setConfig({
  showReactDomPatchNotification: false,
});
function CustomMessageSnackBar({ icon, message }) {
  const { d, fill } = icon;
  return (
    <div className="custom-snackbar-message">
      {icon && (
        <div className="csm-icon">
          <svg>
            <path fill={icon.fill} d={icon.d} />
          </svg>
        </div>
      )}
      <div className="csm-message" style={{ color: icon.fill }}>
        {message}
      </div>
    </div>
  );
}
export default hot(module)(CustomMessageSnackBar);
CustomMessageSnackBar.propTypes = {
  message: PropTypes.string,
  d: PropTypes.string,
  fill: PropTypes.string,
};
