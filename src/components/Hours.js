// Placeholder to host a component
import React from "react";

const Hours = () => {
    // add logic
    const shelterHours = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "12:00", close: "16:00" },
        { day: "Sunday", open: "12:00", close: "16:00" }
    ];
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    // get today's hours
    const todayHours = shelterHours.find(day => day.day === today);
    // display a header of "Today's Hours", and the name of today and hours (in a paragraph), inside an div with an id of "hours"
    return (
        <div id="hours">
            <h2>Today's Hours</h2>
            <p>{todayHours.day} {todayHours.open} - {todayHours.close}</p>
        </div>
    )

}

export default Hours;
