// let x = 23;

// if (x==0) {
//     console.log('number is neither odd or even');
// }
// else{
//     if (x%2==0) {
//         console.log('number is even');
//     }
//     else{
//        console.log('number is odd');
//     }
// }

// let x = - 3;

// x>0 ? console.log('positive') : x==0 ? console.log('zero') : console.log('negative');

// if (x>0 && x%2==0)
//     console.log(true);
// else
//     console.log(false);

// let customer = {
//     name: 'Joe',
//     age: 18,
//     balance: 5
// };
// console.log('Welcome to the Cinema Plus');
// const ticketPrice = 8;

// if (customer.age > 18) {
//     console.log('welcome!');
//     if (customer.balance >= ticketPrice) {
//         customer.balance -= ticketPrice;
//         console.log(`${customer.name} your balance is: ${customer.balance}`);
//     }
//     else{
//         console.warn('not enough money');
//     }
// }
// else if(customer.age==18 && customer.balance>=ticketPrice/2){
//     customer.balance -= ticketPrice/2;
//     console.log(`${customer.name} your balance is: ${customer.balance}`);
// }
// else{
//     console.log('boyu gelersen');
// }

let currentWeekDay = window.prompt("enter week day: ");
currentWeekDay = currentWeekDay.toLowerCase();

switch (currentWeekDay) {
  case 'monday':
    console.log("1");
    break;
  case 'tuesday':
    console.log("2");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Invalid Input");
    break;
}

// if (currentWeekDay == 1) {
//     console.log('Monday')
// }
// else if(currentWeekDay == 2){
//     console.log('Tuesday');
// }
// else if(currentWeekDay == 3){
//     console.log('Wednesday');
// }
// else if(currentWeekDay == 4){
//     console.log('Thursday');
// }
// else if(currentWeekDay == 5){
//     console.log('Friday');
// }
// else if(currentWeekDay == 6){
//     console.log('Saturday');
// }
// else if(currentWeekDay == 7){
//     console.log('Sunday');
// }
// else{
//     console.error('Invalid Input');
// }
