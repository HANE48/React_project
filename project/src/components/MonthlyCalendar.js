import React from "react";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'

const MonthlyCalendar = ()=>{

    return(
        <div>
            <h3>월</h3>
            <div>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                />
            </div>
        </div>
    )
}

export default MonthlyCalendar