import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="login">Login User</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="register">Register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="add">Add User</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="show">Show User</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="class1">Props</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="class2">Ref Variable/Add User</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="class3">State Variable</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="class4">Class State Variable</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/Comp1">Props Drilling</Link>
        </li>
       </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
