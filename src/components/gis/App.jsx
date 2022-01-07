import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
const ShellWrapper = lazy(() => import('./ShellWrapper'));
function App() {
  const toast = useSelector((state) => state.handleToast);
  console.log(toast);
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='' element={<ShellWrapper />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default hot(module)(App);
