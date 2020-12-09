import react, { useState, useEffect } from 'react'

function App() {

  const [state, setState] = useState()

  useEffect(() => {

    const fetchData = async () => {

      const response = await fetch('https://api.thecatapi.com/v1/images/search')
      const data = await response.json()

      setState(data[0].url)
    }
    fetchData()
  }, [])

  return (
    <div className="app">
      <img src={state} alt="" />
    </div>
  );
}

export default App;
