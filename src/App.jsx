import React,{useState} from 'react'
import './styles/index.scss'
import Form from './components/Form'
import Switch from './components/Switch'
import Chart from './components/Chart'
import AppState from './context/AppState'

const App = () => {
  const [variant,setVariant] = useState(0)

  return (
    <AppState>
      <header className="container header">
        <div className="content">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1024px-React.svg.png" alt=" "/>
            <span className="f-subtitle2">Simulador CAF</span>
          </div>
        </div>
      </header>
      <main className="container">
        <div className="content">
          <div className="grid">
            <Switch
              variant={variant}
              setVariant={setVariant}
            />
            <Form 
              variant={variant}
            />
            <Chart />
          </div>
        </div>
      </main>
    </AppState>
  )
}

export default App
