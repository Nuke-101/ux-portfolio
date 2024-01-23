import './App.scss'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout/layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <div>Hello World</div>
    </Routes>
  )
}

export default App
