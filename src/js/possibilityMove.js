
//use to check where we can move

const possibilityMove = (firstIndex,secoundIndex,areaTable,setAreaTable,areaPawn,turn,table) => {
    let capturing = 0;

    table = table.map((element, index) => {
        return element.map((element2, index2) => {
            if ((index === firstIndex - 2 &&
                    index2 === secoundIndex + 2 &&
                    turn === "white" &&
                    areaPawn[firstIndex - 1][secoundIndex + 1] === "black") &&
                (areaPawn[firstIndex - 2][secoundIndex + 2] === "area")) {
                //zmiana na bicie
                capturing = 1;
                return "possible"
            } else if ((index === firstIndex - 2 &&
                    index2 === secoundIndex - 2 &&
                    turn === "white" &&
                    areaPawn[firstIndex - 1][secoundIndex - 1] === "black") &&
                (areaPawn[firstIndex - 2][secoundIndex - 2] === "area")) {
                //zmiana na bicie
                capturing = 1;
                return "possible"
            } else if ((index === firstIndex + 2 &&
                    index2 === secoundIndex + 2 &&
                    turn === "black" &&
                    areaPawn[firstIndex + 1][secoundIndex + 1] === "white") &&
                areaPawn[firstIndex + 2][secoundIndex + 2] === "area") {
                //zmiana na bicie
                capturing = 1;
                return "possible"
            } else if ((index === firstIndex + 2 &&
                    index2 === secoundIndex - 2 &&
                    turn === "black" &&
                    areaPawn[firstIndex + 1][secoundIndex - 1] === "white") &&
                areaPawn[firstIndex + 2][secoundIndex - 2] === "area") {
                //zmiana na bicie
                capturing = 1;
                return "possible"
            } else {
                return element2;
            }
        })
    });


    if(capturing===0) {
        table = table.map((element, index) => {
            return element.map((element2, index2) => {
                if (index === firstIndex - 1 && index2 === secoundIndex + 1 && turn === "white" && areaPawn[firstIndex - 1][secoundIndex + 1] === "area") {
                    return "possible"
                } else if (index === firstIndex - 1 && index2 === secoundIndex - 1 && turn === "white" && areaPawn[firstIndex - 1][secoundIndex - 1] === "area") {
                    return "possible"
                } else if (index === firstIndex + 1 && index2 === secoundIndex + 1 && turn === "black" && areaPawn[firstIndex + 1][secoundIndex + 1] === "area") {
                    return "possible"
                } else if (index === firstIndex + 1 && index2 === secoundIndex - 1 && turn === "black" && areaPawn[firstIndex + 1][secoundIndex - 1] === "area") {
                    return "possible"
                }
                else {
                return element2;
                }
            })
        });
    }

    setAreaTable(table);
}


export default possibilityMove;