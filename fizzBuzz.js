// i % 3 and i % 5 == fizzbuzz
// i % 3 = fizz
// i % 5 = buzz 

for(let i = 1; i <= 50; i++){
    if(i % 5 == 0 && i % 3 == 0){
        console.log("fizzbuzz")
    }
    else if(i % 5 == 0){
        console.log("buzz")
    }
    else if(i % 3 == 0){
        console.log("fizz")
    }
    else{
        console.log(i)
    }
}