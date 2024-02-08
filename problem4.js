function password(obj) {
    const { name, birthYear, siteName } = obj;
    if (!name || !siteName || !birthYear || birthYear.toString().length !== 4) {
        return "invalid";
    }
    const password = `${siteName}#${name}@${birthYear}`;
    return password;
}



// Test cases
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));