import { hot,setConfig } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import TargetShell from './components/gis/App';
import { configStore } from './store/configStore';
setConfig({
  showReactDomPatchNotification: false
});
function App() {
  return (
    <>
      <Provider store={configStore()}>
        <Router>
          <TargetShell />
        </Router>
      </Provider>
    </>
  );
}

export default hot(module)(App);
