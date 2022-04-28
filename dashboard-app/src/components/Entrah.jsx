import React from "react";
import {Menu} from "./Menu";
import Entrances from "./Entrances"
import {BarChart} from "./BarChart"


export function Entrah(){
    return (
        <div class="container">
          <div class="row">
            <div class="col" ><Menu/></div>
            <div class="w-100"></div>
            <div style={{marginTop: "6vh"}}><BarChart/></div>>
          </div>
        </div>
    )
}