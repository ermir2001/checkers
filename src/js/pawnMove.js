const pawnMove = (firstIndex,secoundIndex,areaTable,setAreaTable,areaPawn,setPawn,turn,setTurn,prevTable) =>{


        //zminne dla usuniecia pionka
        let areaFirstIndex;
        let areaSecoundIndex;
        let capturing = 0;
        let capturingareaFirstIndex;
        let capturingareaSecoundIndex;

    if(turn==="white"){

        if(firstIndex+2<8 && secoundIndex+2<8 && areaTable[firstIndex+2][secoundIndex+2]=== "choosed"){
            areaFirstIndex = firstIndex+2;
            areaSecoundIndex = secoundIndex+2;
            capturing=1;
            capturingareaFirstIndex = firstIndex+1;
            capturingareaSecoundIndex = secoundIndex+1;
        }
        else if (firstIndex+2<8 && secoundIndex-2<8 && areaTable[firstIndex+2][secoundIndex-2]=== "choosed"){
            areaFirstIndex = firstIndex+2;
            areaSecoundIndex = secoundIndex-2;
            capturing=1;
            capturingareaFirstIndex = firstIndex+1;
            capturingareaSecoundIndex = secoundIndex-1;
        }
        else if(areaTable[firstIndex+1][secoundIndex+1] === "choosed"){
            areaFirstIndex = firstIndex+1;
            areaSecoundIndex = secoundIndex+1;
        }
        else{
            areaFirstIndex = firstIndex+1;
            areaSecoundIndex = secoundIndex-1;
        }


        let table = areaPawn.map((element,index)=>{
            return element.map((element2,index2)=>{
                if(index === firstIndex && index2 === secoundIndex){
                    return "white"
                }
                else if(index === areaFirstIndex && index2 === areaSecoundIndex) {
                    return "area"
                }
                else if(capturing===1 && index === capturingareaFirstIndex && index2 ===capturingareaSecoundIndex){
                    return "area"
                }
                else{
                    return element2
                }
            })
        })

        //sprawdzenie czy po ruchu jest bicie

        setAreaTable(prevTable);
        setPawn(table);
        setTurn("black");
    }

    else if(turn==="black"){

        if(firstIndex-2>0 && areaTable[firstIndex-2][secoundIndex+2] === "choosed"){
            areaFirstIndex = firstIndex-2;
            areaSecoundIndex = secoundIndex+2;
            capturing=1;
            capturingareaFirstIndex = firstIndex-1;
            capturingareaSecoundIndex = secoundIndex+1;
        }
        else if(firstIndex-2>0 && areaTable[firstIndex-2][secoundIndex-2] === "choosed"){
            areaFirstIndex = firstIndex-2;
            areaSecoundIndex = secoundIndex-2;
            capturing=1;
            capturingareaFirstIndex = firstIndex-1;
            capturingareaSecoundIndex = secoundIndex-1;
        }
        else if(areaTable[firstIndex-1][secoundIndex+1] === "choosed"){
            areaFirstIndex = firstIndex-1;
            areaSecoundIndex = secoundIndex+1;
        }
        else{
            areaFirstIndex = firstIndex-1;
            areaSecoundIndex = secoundIndex-1;
        }



        let table = areaPawn.map((element,index)=>{
            return element.map((element2,index2)=>{
                if(index === firstIndex && index2 === secoundIndex){
                    return "black"
                }
                else if(index === areaFirstIndex && index2 === areaSecoundIndex) {
                    return "area"
                }
                else if(capturing===1 && index === capturingareaFirstIndex && index2 ===capturingareaSecoundIndex){
                    return "area"
                }
                else{
                    return element2
                }
            })
        })

        setAreaTable(prevTable);
        setPawn(table);
        setTurn("white");
    }

}

export default pawnMove;