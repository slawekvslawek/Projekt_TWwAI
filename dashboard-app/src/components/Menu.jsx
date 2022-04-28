import React from "react";

export function Menu(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#babec2"}}>
          <a class="navbar-brand" href="#" style={{marginLeft: "48vh"}}></a>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="http://localhost:3000/">Home</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="http://localhost:3000/warehouses/">Warehouses</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="http://localhost:3000/companies">Companies</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="http://localhost:3000/entrances">Entrances</a>
              </li>
            </ul>
          </div>
        </nav>
        )
}