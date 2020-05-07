import React from "react";
import Navbar from "../components/Navbar";
import EmailForm from "../components/Scheduling/emailForm";

class Schedule extends React.Component{
    render(){
        return(
            <div>
                <EmailForm/>
            </div>
        )
    };
};

export default Schedule;