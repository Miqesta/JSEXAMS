const values = [10,20,5,30];
function createLogger(threshold = 15){
    function logValues(){
        for(let i =0; i<values.length; i++){
            if(values[i]>threshold){
                console.log('warning: ${values[i]}');
            }
        }
    }
    return logValues;
}
const logger = createLogger();
logger();