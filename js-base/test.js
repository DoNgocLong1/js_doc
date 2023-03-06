/* const S = [60, 40, 69, 65, 55, 86, 81, 3, 99, 83, 6, 70, 80, 2, 66, 98]

const isSort = S.sort((prev, next) => {
    return  prev - next
})

console.log(isSort) */

/* const rootArr = [
    [60, 40, 69, 65, 55],
    [86,81,3,99,83,6],
    [1,81,3,99,83,99],
    [70,80,2,66,98],
    [1,80,2,66,99]
]

for(let i = 0; i <= rootArr.length - 1; i++){
    rootArr[i].reduce((total, elemnent) => {
        total += elemnent
    },0)
    let max = rootArr[1].reduce((total, elemnent) => {
        if(elemnent) {
            return total += elemnent
        }     
    },0)
    console.log(max)
    if(rootArr[1].reduce((total, elemnent) => {
        if(elemnent) {
            return total += elemnent
        }     
    },0) > max) {
        return max
    }
}
 */
let arr 
let a
for( let i = 0; i < 10; i++){
    for( let j = 0; j < 10; j++){
        a[i][j]= 1
        arr.push(a[i][j])  
        console.log(arr[i][j])
    }
}