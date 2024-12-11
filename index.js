const employee = {name:"John", streetAdress:"Kayole"}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key] :value}
}
console.log(updateEmployeeWithKeyAndValue(employee, "streetAdress", "Uthiru"));
console.log (employee)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAdress", "Uthiru"))
console.log(employee)

// Non-mutating delete function
function deleteFromEmployeeByKey(employee, key){
   const{[key]:_ ,...ourEmployee} =employee;
   return ourEmployee;
}
console.log(deleteFromEmployeeByKey(employee, "streetAdress"))



function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key];
   return employee;
}
console.log(deleteFromEmployeeByKey(employee,"streetAdress")); 
