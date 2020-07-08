const convertToKm = (inputType, value) => {
  console.log('covertToKm: '+inputType,value)
  value = parseFloat(value);

    if (typeof value === "number") {
    if(inputType === "centimetres"){
      return(value/100000)
    } else if(inputType === "metres"){
      return(value/1000)
    } else return value
  }
  }
  
  const convertFromKm = (inputType, value) => {
    console.log('covertFromKm: '+inputType,value)
    value = parseFloat(value);
    if (typeof value === "number") {
    if(inputType === "centimetres"){
      return(value*100000)
    } else if(inputType === "metres"){
      console.log('passed metres :'+value)
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
      console.log('going into generateConversion: '+conversionDirection,imperialUnit,inputValue)

        if(!inputValue){
          inputValue = 0;
          console.log('fixed zero')
        }

        if(conversionDirection === "MetricToImperial"){
        /*return inputValue * this.imperialCoversionFactors[imperialUnit] */
        let generatedValue = (inputValue * this.imperialCoversionFactors[imperialUnit])
        if(!generatedValue){
          generatedValue = 0
        }
        console.log('abcd'+generatedValue)
        return generatedValue
      
       /*return generatedValue */
      } else if (conversionDirection === "ImperialToMetric"){
        /*return inputValue / this.imperialCoversionFactors[imperialUnit] */
        let generatedValue = (inputValue / this.imperialCoversionFactors[imperialUnit]);
        if(!generatedValue){
          generatedValue = 0
        }
        console.log('abcd'+generatedValue)
        return generatedValue 
      }
    }
    
  }
  
  export const convertUserInput = (conversionDirection,imperialUnit,metricUnit,inputValue) => {
      console.log('convertUserInput: '+conversionDirection,imperialUnit,metricUnit,inputValue)
      if(conversionDirection === "MetricToImperial"){
      inputValue = convertToKm(metricUnit,inputValue);
      }
      let convertedValue = conversionIndexKm.generateConversion(conversionDirection,imperialUnit,inputValue);
    
    if(conversionDirection === "ImperialToMetric"){
      let finalValue = convertFromKm(metricUnit,convertedValue)
      return (
        (finalValue > 1) ?
        ( Math.floor(finalValue * 100) / 100 ) :
        finalValue
      )
    } else {
      /*return convertedValue */
      let finalValue = convertedValue;
      return (
        (finalValue > 1) ?
        ( Math.floor(finalValue * 100) / 100 ) :
        finalValue
      )
    }
    
  }