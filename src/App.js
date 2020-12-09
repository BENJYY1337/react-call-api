import react, { useState, useEffect } from 'react'

function App() {

  const [state, setState] = useState()

  useEffect(() => {

    console.log('fdp');
  }, [])

  return (
    <div className="app">
      fdp
    </div>
  );
}

export default App;
