import React from 'react';
import AccountSetting from './components/AccountSetting';

function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', 
                  minHeight: '100vh', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'flex-start', 
                  paddingTop: '50px' }}>
      <AccountSetting />
    </div>
  );
}

export default App;