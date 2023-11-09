import React from 'react';

function NavBar() {
  return (
    <header id="header">
    <div className="inner">
        <a href="index.html" className="logo">
          <span className="symbol"><img src="https://firebasestorage.googleapis.com/v0/b/protafolio-d54aa.appspot.com/o/Dino1Logo.jpg?alt=media&token=e532d319-526d-4c73-b3bf-b9ed601aa539" alt=""/></span><span className="title">Jesus Barajas</span>
        </a>
        <nav>
          <ul>
            <li><a href="#menu">Menu</a></li>
          </ul>
        </nav>

    </div>
  </header>
  );
}


export default NavBar;