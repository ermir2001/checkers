

const mustCapturing = (firstIndex,secoundIndex,areaTable,setAreaTable,areaPawn,setPawn,turn,setTurn,prevTable) => {
    if (turn === "black") {
        console.log(areaPawn);
        console.log(firstIndex, secoundIndex)
        console.log(areaPawn[firstIndex][secoundIndex]);

        if (areaPawn[firstIndex + 1][secoundIndex + 1] === "white" &&
            areaPawn[firstIndex + 2][secoundIndex + 2] === "area") {
            console.log(areaPawn[firstIndex][secoundIndex]);

            return true;
        } else if (areaPawn[firstIndex + 1][secoundIndex - 1] === "white" &&
            areaPawn[firstIndex + 2][secoundIndex - 2] === "area") {
            console.log(areaPawn[firstIndex][secoundIndex]);

            return true;
        }
        return false;
    }

}

export default mustCapturing;