function join(arr, concatStr) {
    let arr2 = '';
    for (let i=0; i < arr.length; i++) {
        arr2 += arr[i]+concatStr
    }
    arr2 = arr2.slice(0, -1)
    return arr2;
}

function repeat(str, times) {
    str2 = ''
    while (times > 0) {
        str2 += str
        times --
    }
    return str2
}

console.log(join(["a", 1, "b", 2, "c", 3], ','));
console.log(repeat('yoyo', 2));
