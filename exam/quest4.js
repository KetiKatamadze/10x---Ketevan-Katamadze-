const xCoordinate = -3; 

function direction(x){
    if(xCoordinate < 0){
        return `Route: West`
    } else {
        return `Route: East`
    }
}

console.log(direction(xCoordinate))