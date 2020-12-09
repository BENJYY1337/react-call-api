import react, { useState, useEffect } from 'react'

function App() {

  const [state, setState] = useState()
  const [isTrue, setIsTrue] = useState(true)

  useEffect(() => {

    if (isTrue) {

      const fetchData = async () => {

        const response = await fetch('https://api.thecatapi.com/v1/images/search')
        const data = await response.json()

        setState(data[0].url)
      }

      fetchData()

      setIsTrue(!isTrue)
    }
  }, [isTrue])

  return (
    <div className="app">
      <img src={state} alt="" />
      <button onClick={(() => setIsTrue(!isTrue))}>Click</button>
    </div>
  );
}

export default App;
