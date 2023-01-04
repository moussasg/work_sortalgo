// Choisissez l'élément arr[i] et insérez-le dans une séquence triée 
//dans le arr de 0 à i-1.;
function tri(a , b){
    return a - b
}
var arr = [0,1,2,3,6,100]
arr.push(5)
arr.sort(tri)
console.log(arr)