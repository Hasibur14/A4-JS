function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Please provide a valid Array";
    }
    let result = [];
    for (let arr of array) {
        if (typeof arr === 'number' && !isNaN(arr)) {
            result.push(arr);
        }
    }
    return result;
}


const input1 = [1, null, undefined, 18, -19, , "12", [1, 2], { ob: "lala" }];
const input2 = ["1", { num: 2 }, ];
const input3 = [1, 2, -3];
const input4 = { num: [1, 2, 3] };


console.log(deleteInvalids(input1)); 
console.log(deleteInvalids(input2)); 
console.log(deleteInvalids(input3)); 
console.log(deleteInvalids(input4)); 