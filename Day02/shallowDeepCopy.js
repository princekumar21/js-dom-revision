var employeDetailsOriginal = {
    name : "prince",
    age : 24,
    address : {
        place : "salugara",
        zip : 734008
    }
}
//shallow copy
var employeDetailsDuplicates = employeDetailsOriginal;
employeDetailsDuplicates.name = "change";
console.log(employeDetailsDuplicates);
console.log(employeDetailsOriginal);


let deepCopy = JSON.parse(JSON.stringify(employeDetailsOriginal));