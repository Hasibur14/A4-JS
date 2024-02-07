function checkName(name) {
    if (typeof name !== 'string') {
        return "The name should be string";
    }
    const lastChar = name.charAt(name.length - 1);

    if (['A', 'y', 'i', 'e', 'o', 'u', 'w'].includes(lastChar.toUpperCase())) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}
const nam = checkName(15);
console.log(nam);