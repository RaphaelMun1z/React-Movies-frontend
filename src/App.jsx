import "./index.scss"

import { Link, Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
