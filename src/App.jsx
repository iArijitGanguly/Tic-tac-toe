import React from 'react';
import Grid from './components/Grid';

function App() {

  return (
    <div className='h-screen grid place-items-center'>
      <Grid numberOfCards={9} />
    </div>
  )
}

export default App;
