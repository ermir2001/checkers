

const checkPosition = (firstIndex,secoundIndex,areaPawn,turn) => {
    if(areaPawn[firstIndex][secoundIndex] === "white" &&
        turn === "white") {
        if ((areaPawn[firstIndex - 1][secoundIndex + 1] === "black") &&
            (areaPawn[firstIndex - 2][secoundIndex + 2] === "area")) {
            return true;
        }
        else if ((areaPawn[firstIndex - 1][secoundIndex - 1] === "black" &&
            areaPawn[firstIndex - 2][secoundIndex - 2] === "area"))
        {
            return true;
        }
        else if ((areaPawn[firstIndex - 1][secoundIndex - 1] === "area" ||
            areaPawn[firstIndex - 1][secoundIndex + 1] === "area")
        ) {
            return true;
        }
    }
    else if(areaPawn[firstIndex][secoundIndex] === "black" &&
        turn === "black") {

        if ((areaPawn[firstIndex + 1][secoundIndex - 1] === "white" &&
            areaPawn[firstIndex + 2][secoundIndex - 2] === "area"))
        {
            return true;
        }
        else if((areaPawn[firstIndex + 1][secoundIndex + 1] === "white") &&
            (areaPawn[firstIndex + 2][secoundIndex + 2] === "area"))
        {
            return true;
        }
        else if(areaPawn[firstIndex + 1][secoundIndex - 1] === "area" ||
            areaPawn[firstIndex + 1][secoundIndex + 1] === "area")
        {
            return true;
        }
    }
    else {
        return false;
    }
}

export default checkPosition;