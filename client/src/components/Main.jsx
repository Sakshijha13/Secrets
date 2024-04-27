import React, { useEffect, useState } from "react";
import Header from "./Header";


function Main(props) {
    
    

    return (
        <div>
            <Header user={props.user} />
            <h2>You are logged in!</h2>

        </div>
    )
}

export default Main;