// ************************************ callBack and CallBack Hell

// let stocks = {
//     Fruits : ["strawberry", "banana", "grapes", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "stick", "cup"],
//     toppings : ["chocolate", "peanuts"],
// };

// let order = (Fruit_name, call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[Fruit_name]}`);
//         call_production();
//     },2000);
//     // call_production() // don't write it here
// };

// let production = () => {
//     setTimeout(()=>{
//         console.log("Production has started");

//         setTimeout(()=>{
//             console.log("Fruits has been chopped");

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//                 setTimeout(()=>{
//                     console.log("Machine was started");

//                     setTimeout(()=>{
//                         console.log(`Ice cream was placed on the ${stocks.holder[0]}`);

//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[0]} was added as toppings`);

//                             setTimeout(()=>{
//                                 console.log("Serve the Ice cream");
//                             },2000);
//                         },3000);
//                     },2000);
//                 },1000);
//             }, 1000);
//         }, 2000);
//     },0);
// };

// order("0", production);

// ********************************** Promises and Promise Chaining

// let stocks = {
//     Fruits : ["strawberry", "banana", "grapes", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "stick", "cup"],
//     toppings : ["chocolate", "peanuts"],
// };

// let is_open = true;
// // let is_open = 0;

// let order = (time, work) =>{
//     return new Promise((resolve, reject)=>{
//         if(is_open){
//             setTimeout(()=>{
//                 resolve(work());
//             },time);
//         } else {
//             reject(console.log("Our Shop is Closed"));
//         }
//     });
// };

// order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected.`))
// .then(()=>{
//     return order(000, ()=>console.log("Production has Started"));})
// .then(()=>{
//     return order(2000, ()=>console.log("Fruits was Chopped"));})
// .then(()=>{
//     return order(2000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`));})
// .then(()=>{
//     return order(2000, ()=>console.log("Start the Machine"));})
// .then(()=>{
//     return order(2000, ()=>console.log(`Ice cream was placed on the ${stocks.holder[0]}`));
// })
// .then(()=>{
//     return order(3000, ()=>console.log(`${stocks.toppings[0]} was selected`))
// })
// .then(()=>{
//     return order(1000, ()=>console.log("Serve the Ice Cream"))
// })

// // it will only run when our promise is rejected.
// .catch(()=>{
//     console.log("Customer Left");
// })

// // It will work for both conditions resolve and rejected.
// .finally(()=>{
//     console.log("Day Ended, Shop is closed");
// });

// ***************************** Async/ Await

// let stocks = {
//     Fruits : ["strawberry", "banana", "grapes", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "stick", "cup"],
//     toppings : ["chocolate", "peanuts"],
// };

// let is_open = true;
// // let is_open = 0;

//********************************
// let order = () => {
//     return new Promise((resolve, reject)=>{
//         if(){
//             resolve()
//         } else {
//             reject()
//         }
//     })
// }

// order()
// .then()
// .then()
// .catch()
// .finally()

// async function order(){
//     try{
//         await abc;
//     } catch(error){
//         console.log("abc doesn't exits", error);
//     }

//     finally{
//         console.log("Runs Code Anyways");
//     }
// }

// order()
// .then(()=>{
//     console.log("sfgsdgfdgdfdg");
// });

//*******************************************
// let toppings_choice = () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(
//                 console.log("Which topping would you love? ")
//             );
//         },3000);
//     });
// };

// async function kitchen(){
//     console.log("A");
//     console.log("B");
//     console.log("C");
//     await toppings_choice();
//     console.log("D");
//     console.log("E");
// }

// kitchen();

// console.log("Cleaning the dishes");
// console.log("Cleaning the tables");
// console.log("Taking Others Order");

//******************************************* */

let stocks = {
    Fruits : ["strawberry", "banana", "grapes", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "stick", "cup"],
    toppings : ["chocolate", "peanuts"],
};

let is_open = true;
// let is_open = 0;

function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_open){
            setTimeout(resolve, ms);
        } else {
            reject(console.log("Shop is closed"));
        }
    });
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.Fruits[1]} was selected`);

        await time(0000);
        console.log("Start the production");

        await time(2000);
        console.log("Cut the Fruits");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(1000);
        console.log("Start the Machine");

        await time(2000);
        console.log(`Ice cream was placed on the ${stocks.holder[0]}`);

        await time(3000);
        console.log(`${stocks.toppings[0]} was added`);

        await time(2000);
        console.log("Serve the Ice Cream");
    }catch(error){
        console.log("Customer left", error);
    }finally{
        console.log("Day Ended, Shop is closed");
    }
}

kitchen();