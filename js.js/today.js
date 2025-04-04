function add(a){
    const b = "suri"

    try{
        if (a === b) {
            console.log("pass")
        } else {
            console.log("Failed")
        }

    }catch (error) {
        console.error("Failed", error)

    }
    return a === b
}
console.log(add("suri"))




