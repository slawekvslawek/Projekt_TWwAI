import React from "react";
import {Menu} from "./Menu";
import Companies from "./Companies"

export function Compah(){
    return (
        <div class="container" style={{backgroundColor: "#7f8285"}}>
          <div class="row">
            <div class="col"><Menu/></div>
            <div class="w-100"></div>
            <div class="col" style={{marginLeft:"3vh"}}><Companies/></div>
          </div>
        </div>
    )
}