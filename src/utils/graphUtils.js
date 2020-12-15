export const formatLineGraphData = (name, color, inputData, isYTime) => {
    console.log("Formatting input data: ", inputData);
    console.log("Y TIME: ", isYTime);

    let formattedData = inputData.map((item, index) => {
        if(isYTime){
            console.log("Its Y TIME")
            return {
                "x": `${index}`,
                "y": parseFloat(formatSecondsToMinutes(item))
            }
        }else{
            return {
                "x": `${index}`,
                "y": item
            }
        }
        
    })

    let outputData = {
        id: name,
        color: color, 
        data: formattedData
    }

    console.log("Formatted input data: ", outputData);

    return [outputData];
}

const formatSecondsToMinutes = (timeSeconds) => {
    let out = parseInt(timeSeconds)/60;
    return out.toFixed(2)
}