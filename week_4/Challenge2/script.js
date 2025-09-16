// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
// USE eventlistener so no need function
button = document.getElementById("justin-btn").addEventListener( "mouseover", function() {
    let message_over = "Welcome to My Heart";
    let result = document.getElementById("result");
    
    result.style.backgroundColor="pink";
    result.style.color="blue";
    result.innerText = message_over; 
}


);

button = document.getElementById("justin-btn").addEventListener( "mouseout", function() {
    let message_over = "Dont leave my heart";
    let result = document.getElementById("result");
    
    result.style.backgroundColor="black";
    result.style.color="red";
    result.innerText = message_over; 
}


);
// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)

// completed by editing the html, 

// function WelHeart() {
    
//     let message_over = "Welcome to My Heart";
//     let result = document.getElementById("result");
    
//     result.style.backgroundColor="pink";
//     result.style.color="blue";
//     result.innerText = message_over;
// }

// function LeaveHeart() {
//     let message_out = "Dont leave my heart";
//     let result = document.getElementById("result");

//     result.style.backgroundColor="black";
//     result.style.color="red";
//     result.innerText= message_out

// }