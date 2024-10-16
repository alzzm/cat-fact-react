import { useEffect, useState } from 'react';
import './App.css'


function App() {

  const [catFact, setCatFact] = useState('')
  const endpoint = 'https://catfact.ninja/fact';

  const catFactFetch = () => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setCatFact(data.fact))
  }

  useEffect(() => {
    catFactFetch()
  }, [])

  return (<div className='app'
    style={{
      "fontFamily": "Open Sans, sans-serif",
    }}
  >
    <button onClick={() => catFactFetch()} style={{
      "padding": "12px",
      "border": "none",
      "borderRadius": "5px",
      "backgroundColor": "blueviolet",
      "color": "white",
      "fontSize": "16px",
    }}>Generate Cat Fact</button>
    <p>
      {catFact}
    </p>
  </div>)
}

export default App
