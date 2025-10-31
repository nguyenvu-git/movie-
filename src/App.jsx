import Header from './components/Header'
import './App.css'
import HomePage from './assets/page/HomePage'
import { Route,Routes,Link,NavLink } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </>
  )
}

export default App
