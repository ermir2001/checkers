import React from "react";


const generatePawn = (firstIndex,secoundIndex,areaPawn)=>{
    return(
        (areaPawn[firstIndex][secoundIndex] === "black")?<div className={"styleBlack"}/>:
            (areaPawn[firstIndex][secoundIndex] === "white")?<div className={"styleWhite"}/>:null
    )
}

export default generatePawn;