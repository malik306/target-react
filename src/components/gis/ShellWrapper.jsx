import React from "react";
import PropTypes from "prop-types";
import { hot, setConfig } from "react-hot-loader";
import { ShellProvider, AppShellSide } from "@target-energysolutions/app-shell";
setConfig({
  showReactDomPatchNotification: false,
});
function ShellWrapper({ showToast }) {
  console.log(showToast + `Shell Wrapper ShowToast`);
  return (
    <>
      <ShellProvider>
        <AppShellSide
          envURL=""
          apps=""
          disableSidebar={false}
          accessToken=""
          notificationAPI=""
          meTo=""
          production=""
          productConfig=""
          forcedLogoApp=""
          title=''
          navBarCollapsed={false}
        />
      </ShellProvider>
    </>
  );
}

export default hot(module)(ShellWrapper);
ShellWrapper.propTypes = {
  showToast: PropTypes.any,
};
/*accessToken={getAccessToken()}
            notificationAPI={PRODUCT_APP_URL_API}
            meTo={PRODUCT_APP_URL_PROFILE}
            production={'GIS FE'}
            onLogoClick={() => {
              window.open(PRODUCT_APP_URL_WORKSPACE, '_self')
            }}
            productConfig={productConfig}
            forcedLogoApp={'gis-fe'}*/
