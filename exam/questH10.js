const values = [10, 20, 5, 30]; 


function createLogger(threshold = 15){
    function logValues(){
        for(number of values){
            if(number > threshold){
                console.log(`prints Warning: ${number}`)
            }
        }
    }
    return logValues;
}

createLogger();

