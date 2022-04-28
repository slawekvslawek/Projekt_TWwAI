import React from "react";
import {Menu} from "./Menu";
import Warehouses from "./Warehouses"

export function Wareh(){
    return (
        <div class="container" style={{backgroundColor: "#7f8285"}}>
          <div class="row">
            <div class="col"><Menu/></div>
            <div class="w-100"></div>
            <div class="col" style={{marginLeft:"3vh"}}><Warehouses/></div>
          </div>
        </div>
    )
}