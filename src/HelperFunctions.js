const convertToKm = (inputType, value) => {
  value = parseInt(value);
    if (typeof value === "number") {
    if(inputType === "centimetres"){
      return(value/100000)
    } else if(inputType === "metres"){
      return(value/1000)
    } else return value
  }
  }
  
  const convertFromKm = (inputType, value) => {
    value = parseInt(value);
    if (typeof value === "number") {
      console.log('passed!');
    if(inputType === "centimetres"){
      return(value*100000)
    } else if(inputType === "metres"){
      return(value*1000)
    } else 
    return value
  }
  }
  
  const conversionIndexKm = {
    
    imperialCoversionFactors : {
    "miles" : 0.621371,
    "yards" : 1093.61,
    "feet" : 3280.84,
    "inches" : 39370.1
    },
    
    generateConversion(conversionDirection,imperialUnit,inputValue){
        if(conversionDirection === "MetricToImperial"){
        /*return inputValue * this.imperialCoversionFactors[imperialUnit] */
        let generatedValue = (inputValue * this.imperialCoversionFactors[imperialUnit])
        return ( Math.floor(generatedValue * 100) / 100 )
      } else if (conversionDirection === "ImperialToMetric"){
        /*return inputValue / this.imperialCoversionFactors[imperialUnit] */
        let generatedValue = (inputValue / this.imperialCoversionFactors[imperialUnit]);
        return ( Math.floor(generatedValue * 100) / 100 )
      }
    }
    
  }
  
  export const convertUserInput = (conversionDirection,imperialUnit,metricUnit,inputValue) => {
    
      console.log('helper takes '+ conversionDirection,imperialUnit,metricUnit,inputValue)
      if(conversionDirection === "MetricToImperial"){
        console.log('going in with: '+typeof parseInt(inputValue))
      inputValue = convertToKm(metricUnit,inputValue);
      }
      console.log('conv value is: '+inputValue)
      let convertedValue = conversionIndexKm.generateConversion(conversionDirection,imperialUnit,inputValue);
    
    if(conversionDirection === "ImperialToMetric"){
    return convertFromKm(metricUnit,convertedValue)
    } else {
      return convertedValue
    }
    
  }