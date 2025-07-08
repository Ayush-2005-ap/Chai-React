import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// import Chai from './chai.jsx'

function MyApp() {
  return (
    <div>
      <h1>Chai is Ready!</h1>
    </div>
  )

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />
    {/* <Chai /> */}
   </StrictMode>,
)
