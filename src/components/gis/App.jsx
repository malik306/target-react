import React, { lazy, Suspense } from "react";
import { hot, setConfig } from "react-hot-loader";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getIcon } from "../../libs/getMessageIconByType";
import CustomMessageSnackBar from "./CustomMessageSnackBar";
//import PropTypes from 'prop-types';
const ShellWrapper = lazy(() => import("./ShellWrapper"));
setConfig({
  showReactDomPatchNotification: false,
});

function App() {
  const { addToast, dismissToast } = useSelector((state) => state.handleToast);
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route
            path="/"
            element={
              <ShellWrapper
                showToast={({ message = "", type = "info" }) => {
                  addToast(
                    <CustomMessageSnackBar
                      message={message}
                      icon={getIcon(type)}
                    />
                  );
                }}
              />
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
export default hot(module)(App);
