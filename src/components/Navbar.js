const Navbar = () => {
  return(
    <nav>
      <div className="navbar">
        <a href="#">Lifeinvader</a>
      </div>
      <div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Search" />
      </div>
      <div>
        <i class="fa-solid fa-bell"></i>
      </div>
    </nav>
  )
}

export default Navbar;