let x = true;

if (typeof(x) == "number"){
    console.log(`${x} - число`)
} else if (typeof(x) === "string"){
    console.log(`${x} - строка`) 
} else {
    console.log(`${x} - bool`)
} 
