import React from "react";
import {Menu} from "./Menu";

export function Home() {
  return (
    <div className="container-fluid" style={{backgroundColor: "#7f8285"}} >
        <div><Menu/></div>
      <div class="container">
        <div class="row" style={{marginTop: "10vh", marginLeft: "13vh"}}>
          <div class="col">
            <div class="card" style={{ width: 250, high: 300, backgroundColor: "#91b3bf" }}>
              <img class="card-img-top" src="https://icon-library.com/images/home-icon-for-website/home-icon-for-website-5.jpg" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Home</h5>
                <p class="card-text">
                  Default path to navigation.
                </p>
                <a href="http://localhost:3000/" class="btn btn-primary">
                  Go to home
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: 250, high: 300, backgroundColor: "#91b3bf" }}>
              <img class="card-img-top" src="https://www.consafelogistics.com/wp-content/uploads/2019/03/VIVE-warehouse.jpg" alt="Card image cap" style={{marginTop: "7vh"}} />
              <div class="card-body" style={{marginTop: "7vh"}}>
                <h5 class="card-title">Warehouses</h5>
                <p class="card-text">
                  Warehouses with information.
                </p>
                <a href="http://localhost:3000/warehouses" class="btn btn-primary">
                  Go to warehouses
                </a>
              </div>
            </div>
          </div>
          <div class="w-100"></div>
          <div class="col" style={{marginTop: "9vh"}}>
            <div class="card" style={{ width: 250, high: 300, backgroundColor: "#91b3bf" }}>
              <img class="card-img-top" src="https://2v1p011c9d9y1a3zveg9dmu6-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/home-type-business.jpg" alt="Card image cap" style={{marginTop: "6vh"}} />
              <div class="card-body" style={{marginTop: "4vh"}}>
                <h5 class="card-title">Companies</h5>
                <p class="card-text" >
                  Companies with information.
                </p>
                <a href="http://localhost:3000/companies" class="btn btn-primary">
                  Go to companies
                </a>
              </div>
            </div>
          </div>
          <div class="col" style={{marginTop: "9vh"}}>
            <div class="card" style={{ width: 250, high: 300, backgroundColor: "#91b3bf" }}>
              <img class="card-img-top" src="https://bramar.pl/wp-content/uploads/kontrola_dostepu_gdynska_001.jpg" alt="Card image cap" style={{marginTop: "7vh"}} />
              <div class="card-body" style={{marginTop: "6vh"}}>
                <h5 class="card-title">Entrances</h5>
                <p class="card-text">
                  Statistic about entrances.
                </p>
                <a href="http://localhost:3000/entrances" class="btn btn-primary">
                  Go to entrances
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
