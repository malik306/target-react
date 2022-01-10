import React from "react";

export default function CustomMessageSnackBar(props) {
  return (
    <div className="custom-snackbar-message">
      {props.icon && (
        <div className="csm-icon">
          <svg>
            <path fill={props.icon.fill} d={props.icon.d} />
          </svg>
        </div>
      )}
      <div className="csm-message" style={{ color: props.icon.fill }}>
        {props.message}
      </div>
    </div>
  );
}
