import { Link } from "react-router-dom"

function App() {

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-body-tertiary">
    <div className="h-50 w-50 bg-body-secondary border border-primary rounded ">
      <h2 className="d-flex justify-content-center mt-5">Welcome</h2>
      <div className="d-flex justify-content-center gap-5 mt-5">
        <Link to="/login" className="text-decoration-none text-black p-2 g-col-6 h-3 w-5 bg-primary text-white rounded border">Login</Link>
        <Link to="register" className="text-decoration-none text-black p-2 g-col-6 h-3 w-5 bg-primary text-white rounded border">Register</Link>
        </div>
        </div>
    </div>
  )
}

export default App
