/*
* Switch Statement
*   Syntax:
    switch (key) {
        case value:
        
            break;
        
        default:
            break;
    }
        */

// Examples:
const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    
    default:
        console.log("Default case matched..!")
        break;
}
// note: Jab case match ho jata hain aur us case ke baad break keyword nahi lagate to baaki ka saara code execute hota hain except default block. case ke end me break keyword lagana isliye zaruri hai kyunki ham control flow ko vahin par rok paaye.

// How do i pass string datatype?
const  weekDays= 'Wednesday'

switch (weekDays) {
    case 'Monday':
        console.log("Monday");
        break;
    case 'Tuesday':
        console.log("Tuesday");
        break;
    case 'Wednesday':
        console.log("Wednesday");
        break;
    case 'Thursday':
        console.log("Thursday");
        break;
    case 'Friday':
        console.log("Friday");
        break;
    
    default:
        console.log("Default case matched..!")
        break;
}

// note: values are case sensitive

// group cases example
const day = "Saturday";

switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend vibes! 😎");
        break;
    default:
        console.log("Workday grind!");
}


// real use case
const paymentStatus = "failed";

switch (paymentStatus) {
    case "success":
        console.log("Payment successful! 🎉");
        break;
    case "pending":
        console.log("Payment is still pending...");
        break;
    case "failed":
        console.log("Payment failed ❌");
        break;
    default:
        console.log("Unknown payment status.");
}
