// i % 3 and i % 5 == fizzbuzz
// i % 3 = fizz
// i % 5 = buzz 

for(let i = 1; i <= 50; i++){
    if(i % 5 == 0 && i % 3 == 0){
        console.log("FizzBuzz")
    }
    else if(i % 5 == 0){
        console.log("Buzz")
    }
    else if(i % 3 == 0){
        console.log("Fizz")
    }
    else{
        console.log(i)
    }
}