import React from 'react';
import { hot } from 'react-hot-loader';
import {ShellProvider,AppShellSide} from '@target-energysolutions/app-shell';

function ShellWrapper(props) {
  console.log(props+`Shell Wrapper Props`);
  return (
    <>
      <ShellProvider> 
        {/* <AppShellSide envURL='' apps={[]} disableSidebar={false}/> */}
       </ShellProvider>
    </>
  );
}

export default hot(module)(ShellWrapper);
