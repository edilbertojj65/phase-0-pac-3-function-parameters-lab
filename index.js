/*Define a Function That Uses a Parameter*/
function introduction(name) {
    return (`Hi, my name is ${name}.`);  
}

console.log(introduction("Edith"));

/*Define a Function That Uses Two Parameters */
function introductionWithLanguage(name , language ){
    
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("Edith", "Java"));


/*Define a Function That Uses an Optional Parameter */
function introductionWithLanguageOptional(name , language = "JavaScript"){
        
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("Gracie", "Python"));


if (introduction === introductionWithLanguage(String)){
    console.log("Hi, my name is Gracie and I am learning to program in JavaScript.")
    
}else{ (introductionWithLanguageOptional(String))
    console.log("Hi, my name is Gracie and I am learning to program in Python.")
}

