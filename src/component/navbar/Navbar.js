import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Navbar.css'


export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/lift">lift</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hooks
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/usestate">useState</Link></li>
            <li><Link className="dropdown-item" to="/useeffect">useEffect</Link></li>
            <li><Link className="dropdown-item" to="/useMemo">useMemo</Link></li>
            <li><Link className="dropdown-item" to="/useCallback">useCallback</Link></li>
            <li><Link className="dropdown-item" to="/usecontext">useContext</Link></li>
            <li><Link className="dropdown-item" to="/useref">useRef</Link></li>
            <li><Link className="dropdown-item" to="/usereducer">useReducer</Link></li>
            <li><Link className="dropdown-item" to="/todoreducer">TodoReducer</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/custome">CustomeHook</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Feathers
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/map">Map</Link></li>
            <li><Link className="dropdown-item" to="/modulecss">Module Css</Link></li>
            <li><Link className="dropdown-item" to="/form">Form</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/lifecycle">Didmount</Link></li>
            <li><Link className="dropdown-item" to="/willanmount">Willunmount</Link></li>
            <li><Link className="dropdown-item" to="/didupdate">DidUpdate</Link></li>
            <li><Link className="dropdown-item" to="/drivedstpr">DerivedSt&Pr</Link></li>
            <li><Link className="dropdown-item" to="/snapshot">Snapshot</Link></li>
            <li><Link className="dropdown-item" to="/shouldupdate">ShouldUpdate</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            router
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/user/vinit">vinit</Link></li>
            <li><Link className="dropdown-item" to="/user/kartik">kartik</Link></li>
            <li><Link className="dropdown-item" to="/filter">Filter</Link></li>
            <li><Link className="dropdown-item" to="/navigate">useNavigate</Link></li>
            <li><Link className="dropdown-item" to="/outlet">Outlet</Link></li>
            <li><Link className="dropdown-item" to="/uselocation">UseLocation</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/axios">Axios</Link>
        </li>
      </ul>
      {props.searchbar?
      <li className="d-flex">
      <Link className="nav-link" to="/login"><button className='btn btn-primary mx-2' >Login</button></Link>
      <Link className="nav-link" to="/logout"><button className='btn btn-primary'>LogOut</button></Link>
    </li>:""}
    </div>
  </div>
</nav>
    </div>
  )
}

// Navbar.defaultProps={
//     title:"your title here"
// }

Navbar.propTypes={
    title:PropTypes.string
}
