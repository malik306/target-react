import React, { lazy, Suspense } from "react";
import { hot } from "react-hot-loader";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getIcon } from "../../libs/getMessageIconByType";
import CustomMessageSnackBar from './CustomMessageSnackBar';
const ShellWrapper = lazy(() => import("./ShellWrapper"));


function App() {
  const toast = useSelector((state) => state.handleToast);
  console.log(toast);
  const addToast = () => {
    console.log("add Toast gis");
  };
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
