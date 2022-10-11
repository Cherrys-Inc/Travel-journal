import React from "react";
import globe from "./assets/globe.png"
import "./style.css"
export default function Navbar(){
    return(
        <div>
            <nav className = "navhead ">
                <img src = {globe} />
                <div class = "headtxt">my travel journal.</div>
            </nav>
        </div>
    )
}
