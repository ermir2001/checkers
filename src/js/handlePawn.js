import possibilityMove from "./possibilityMove";
import pawnMove from "./pawnMove";
import checkPosition from "./checkPosition";
//use to check which area was locked

const handlePawn = (firstIndex,secoundIndex,areaTable,setAreaTable,areaPawn,setPawn,turn,setTurn,prevTable)=> {

    let i = 1;
    areaTable.forEach((element) => {
        element.forEach((element2) => {
            return (element2 === "choosed") ? i = 0 : i;
        })
    })

    if(areaTable[firstIndex][secoundIndex]==="possible"){
        pawnMove(firstIndex,secoundIndex,areaTable,setAreaTable,areaPawn,setPawn,turn,setTurn,prevTable);
    }


    if(areaTable[firstIndex][secoundIndex] === "choosed"){
        let table = prevTable.map(element=>{
            return element.map((element2) => {
                return element2;
            })
        })
        setAreaTable(table);
    }

    else if (i===1 && checkPosition(firstIndex, secoundIndex,areaPawn,turn)) {
        let table = areaTable.map((element, index) => {
            return element.map((element2, index2) => {
                if (index === firstIndex && index2 === secoundIndex) {
                    return "choosed"
                } else {
                    return element2;
                }
            })
        });

        possibilityMove(firstIndex,secoundIndex,areaTable,setAreaTable,areaPawn,turn,table);
    }
}


export default handlePawn;