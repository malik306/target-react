import React from 'react';
import { hot,setConfig } from 'react-hot-loader';
import {ShellProvider,AppShellSide} from '@target-energysolutions/app-shell';
setConfig({
  showReactDomPatchNotification: false
});
function ShellWrapper(props) {
  console.log(props+`Shell Wrapper Props`);
  return (
    <>
      <ShellProvider> 
        <AppShellSide envURL='' apps="" disableSidebar={false}/>
       </ShellProvider>
    </>
  );
}

export default hot(module)(ShellWrapper);
