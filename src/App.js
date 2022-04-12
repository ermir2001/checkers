import React, {useEffect, useState} from "react";
import './App.scss';
import generatePawn from "./js/generatePawn";
import handlePawn from "./js/handlePawn";

const Area = () =>{
    const [turn, setTurn]=useState("white");

    //zmienna do ustawienia klucza

    const areaKey =[
        ["A1","B1","C1","D1","E1","F1","G1","H1"],
        ["A2","B2","C2","D2","E2","F2","G2","H2"],
        ["A3","B3","C3","D3","E3","F3","G3","H3"],
        ["A4","B4","C4","D4","E4","F4","G4","H4"],
        ["A5","B5","C5","D5","E5","F5","G5","H5"],
        ["A6","B6","C6","D6","E6","F6","G6","H6"],
        ["A7","B7","C7","D7","E7","F7","G7","H7"],
        ["A8","B8","C8","D8","E8","F8","G8","H8"]];

    //zmienna do ustawienia planszy podstawowej

    const prevTable=[
        ["white","black","white","black","white","black","white","black"],
        ["black","white","black","white","black","white","black","white"],
        ["white","black","white","black","white","black","white","black"],
        ["black","white","black","white","black","white","black","white"],
        ["white","black","white","black","white","black","white","black"],
        ["black","white","black","white","black","white","black","white"],
        ["white","black","white","black","white","black","white","black"],
        ["black","white","black","white","black","white","black","white"]];

    //stan planszy do zmiann

    const [areaTable, setAreaTable] = useState([
        ["white","black","white","black","white","black","white","black"],
        ["black","white","black","white","black","white","black","white"],
        ["white","black","white","black","white","black","white","black"],
        ["black","white","black","white","black","white","black","white"],
        ["white","black","white","black","white","black","white","black"],
        ["black","white","black","white","black","white","black","white"],
        ["white","black","white","black","white","black","white","black"],
        ["black","white","black","white","black","white","black","white"]]);

    //stan z pionkami

    const [areaPawn,setPawn] = useState([
        ["area","black","area","black","area","black","area","black"],
        ["black","area","black","area","black","area","black","area"],
        ["area","black","area","black","area","black","area","black"],
        ["area","area","area","area","area","area","area","area"],
        ["area","area","area","area","area","area","area","area"],
        ["white","area","white","area","white","area","white","area"],
        ["area","white","area","white","area","white","area","white"],
        ["white","area","white","area","white","area","white","area"],]);



    //podstawowy kontener do generowania pionków oraz planszy

    const Area = ({parametr})=>{
        return (
            areaTable[parametr].map((element, firstIndex) => {
                    return (
                        (element === "black") ?
                        <div key={areaKey[parametr][firstIndex]} className={"container-area_black"}
                             onClick={()=>{handlePawn(parametr,firstIndex,areaTable,setAreaTable,areaPawn,setPawn,turn,setTurn)}}>
                            {generatePawn(parametr,firstIndex,areaPawn)}
                        </div>

                            : element==="choosed"?<div key={areaKey[parametr][firstIndex]}
                             onClick={()=>{handlePawn(parametr,firstIndex,areaTable,setAreaTable,areaPawn,setPawn,turn,setTurn,prevTable)}} className="choosed">
                                {generatePawn(parametr,firstIndex,areaPawn)}
                            </div>

                                :(element === "possible")?<div key={areaKey[parametr][firstIndex]}
                             onClick={()=>{handlePawn(parametr,firstIndex,areaTable,setAreaTable,areaPawn,setPawn,turn,setTurn,prevTable)}} className="possible">
                                {generatePawn(parametr,firstIndex,areaPawn)}
                            </div>:
                            <div key={areaKey[parametr][firstIndex]} className="container-area_white"/>
                    )
            })
        )
    }

    //{(turn ==="white")?<h1>Ruch gracza białego</h1>: <h1>Ruch gracza czarnego</h1>}
        return(
            <>

                <div style={{boxShadow:"0 0 15px black"}}>
                    <div style={{display: "flex"}}>
                        <Area parametr={0} />
                    </div>
                    <div style={{display: "flex"}}>
                        <Area parametr={1} />
                    </div>
                    <div style={{display: "flex"}}>
                        <Area parametr={2} />
                    </div>
                    <div style={{display: "flex"}}>
                        <Area parametr={3} />
                    </div>
                    <div style={{display: "flex"}}>
                        <Area parametr={4} />
                    </div>
                    <div style={{display: "flex"}}>
                        <Area parametr={5} />
                    </div>
                    <div style={{display: "flex"}}>
                        <Area parametr={6} />
                    </div>
                    <div style={{display: "flex"}}>
                        <Area parametr={7} />
                    </div>
                </div>
            </>
        )
    }


const App = () =>{

    return(
        <>
            <Area/>
        </>
    )
}

export default App;