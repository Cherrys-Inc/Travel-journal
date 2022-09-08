import React from "react";
import "./style.css";
export default function Card(props){ 
    return(
        <div>
            <div className="row">
                <div className="col-xs-2 imgcol">
                    <img src={require(`./assets/${props.img}`)} className="imgsize"></img>
                </div>
                <div className="col-xs-2">
                    <div className="row">
                        <img src={require("./assets/loc.png") } className="locimg"></img>
                        <div className="country">{props.country}</div>
                        <div className="untext">View on Google Maps</div>
                    </div>
                    <div className="row">
                        <div className="place">{props.place}</div>
                    </div>
                    <div className="row">
                        <div className="date">{props.sdate}-{props.edate}</div>
                    </div>
                    <div className="row">
                        <div className="desc">{props.desc}</div>
                    </div>

                </div>
            </div>
        </div>
    );

}