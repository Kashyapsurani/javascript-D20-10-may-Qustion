function containsValue() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    var v = arr.includes(2)

    if (v) {
        console.log(true)
    } else {
        console.log(false)
    }
}
var add = containsValue()
console.log(add);