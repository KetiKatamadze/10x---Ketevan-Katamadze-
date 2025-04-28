const sectorCode = "beta"

function sector(x){
    switch(sectorCode){
        case "alpha":
            return "Sector Alpha";
        case "beta":
            return "Sector Beta";
        default: 
            return "Unknown Sector";
    }
}

console.log(sector(sectorCode))