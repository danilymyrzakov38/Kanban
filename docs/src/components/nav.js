import React from "react";
import '../index.css';
import Profile from "./profile";

function СompNav() {
    return (
        <nav>
            <div className="content nav">
                <h1>Awesome Kanban Board</h1>
                <Profile />
            </div>
        </nav>
    );
}

export default СompNav;