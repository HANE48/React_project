import React from "react";
import { useParams } from "react-router-dom";
import MMD from "../components/MMD";
import MonthlyCalendar from "../components/MonthlyCalendar";

function MainHome(){

    const {id} = useParams()

    return(
        <div>
            <MMD/>
            <MonthlyCalendar/>
        </div>
    )
}

export default MainHome