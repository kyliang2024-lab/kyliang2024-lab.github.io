function calculate() {
    // let n1 =document.get

    // console.log(document.getElementById("number1"));
    // console.log(document.getElementById("number2"));

    let n1 = document.getElementById("number1");
    let n2 = document.getElementById("number2");

    n1 = Number(n1.value);
    n2 = Number(n2.value);

    let sum =0;

    for (let index = n1; index < n2 + 1; index++) {
        sum += index;
        // console.log(index);
    }

    // console.log(sum);
    let result = document.getElementById("result");
    console.log(result);
    result.innerText = "the result is " +sum;
    
    
}