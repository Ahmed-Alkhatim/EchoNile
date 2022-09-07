import React from "react";
import arrow from "../images/arrow.svg"
import { Link } from "react-router-dom";

import image from  "../images/shop.jpg";
import "./service.css"

const Service = ({ data, date, button }) => (
    <div className="main-card">
        <div className="img-container">
            <img src={ image } alt="" />
            { date }
        </div>
        <div className = "card-description">
            <div>
                <h3 className="head-marg">{ data.title }</h3>
                <p>{ data.discription }</p>
                { button }
            </div>
        </div>
    </div>
)
const OtherService = ({ session , date, button }) => {
    return(
        <div className="card">
            <div className="img-container">
                <img src={ image } alt="" />
                { date }
            </div>
            <div className = "card-description">
                <div>
                    <h3 className="head-marg">{ session.title }</h3>
                    <p>{ session.discription }</p>
                    { button }
                </div>
            </div>
        </div>
    )
}

const OtherServices = ({ data, contain }) => {
    const servicesList = data.map( (session, index) => {
        let button , date
        if( contain ) {
            button = <More linkedTo = {"/"} pad = {1}/>
            date= <Date date = "Monday, June 27, 2022" time = "1:24 AM -GTM" />
        }
        return (
        <React.Fragment key = { index }>
            <OtherService session = { session } button = { button } date = { date } />
        </React.Fragment>
        )})
    return(
        <div className="flex-between">
            { servicesList }
        </div>
    )
}

const Date = ({ date, time}) => {
    return(
        <div className="date">
            <div>
                <p>Date</p>
                <p>{ date }</p>
            </div>
            <div>
                <p>Hour</p>
                <p>{ time }</p>
            </div>
        </div>
    )
}

const More = ({ linkedTo, pad }) => ( <Link to = {linkedTo} ><p style={{ color : "#65A94D" , fontFamily : "theRegular", paddingRight : "10px", paddingTop : (16 * pad + "px"), paddingBottom : (16 * pad + "px")  }}>View details <img src={ arrow } alt="arrow" /></p></Link>)

const Session = ({ data }) => (
    <div className="main-card">
        <div className="img-container">
        <iframe width="56z" height="315" src={data.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className = "card-description">
            <div>
                <h3 className="head-marg">{ data.title }</h3>
                <p>{ data.discription }</p>
            </div>
        </div>
    </div>
)
const OtherSession = ({ session }) => {
    return(
        <div className="card">
            <div className="img-container">
            <iframe width="56z" height="315" src={session.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className = "card-description">
                <div>
                    <h3 className="head-marg">{ session.title }</h3>
                    <p>{ session.discription }</p>
                </div>
            </div>
        </div>
    )
}

const OtherSessions = ({ data }) => {
    const servicesList = data.map( (session, index) => {

        return (
        <React.Fragment key = { index }>
            <OtherSession session = { session }  />
        </React.Fragment>
        )})
    return(
        <div className="flex-between">
            { servicesList }
        </div>
    )
}


export { Service, OtherService, OtherServices, Date, More, Session, OtherSession, OtherSessions  }