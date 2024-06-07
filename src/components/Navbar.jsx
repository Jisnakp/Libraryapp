import React from 'react'

const Navbar = () => {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Library</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">AddBook</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Search">SearchBook</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Delete">DeleteBook</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="View">ViewAll</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
           


    </div>
  )
}

export default Navbar