// const menuItems = ['Tea', 'Coffee', 'Sandwich', 'Cookie']

// console.log(menuItems[0])
// console.log(menuItems[2])
// console.log(menuItems.length)
// console.log(menuItems[menuItems.length - 1])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// exercise 2

// const waitingCustomers = ['Aisha', 'Omar', 'Noor'];

// waitingCustomers[1] = 'Ali'
// waitingCustomers.push('Dana')
// console.log(waitingCustomers.length)

// const removedCustomer = waitingCustomers.pop()
// console.log(removedCustomer)
// console.log(waitingCustomers)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// exercise 3

// const drinks = ['Water', 'Tea', 'Coffee', 'Juice', 'Monkey Juice'];
// for (let idx = 0; idx < drinks.length; idx++) {
//     console.log(`${idx + 1}. ${drinks[idx]}`)

// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//exercise 4

// const prices = [2, 5, 3, 6, 4];

// let totalPrice = 0
// let expensiveItemCount = 0

// prices.forEach((price) => {
//     totalPrice = totalPrice + price
//     if (price >= 4 ){
//         expensiveItemCount++
//     }
// });


// console.log(totalPrice)
// console.log(expensiveItemCount)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//exercise 5

// const cafe = {
//     name: 'Campus Cafe',
//     location: 'Building A',
//     seats: 24,
//     isOpen: true,

// }
// console.log(`${cafe.name} is located in ${cafe.location}`)
// console.log(`Available seats: ${cafe.seats}`)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//exercise 6

// const drink = {
//   name: 'Iced Coffee',
//   price: 3,
//   size: 'small',
//   temporaryCode: 'TEMP-01',
// };

// drink.size = 'large'
// drink.price = drink.price + 1
// drink.isAvailable = true
// delete drink.temporaryCode

// console.log(drink)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//exercise 7

const order = {
  customerName: 'Mariam',
  itemName: 'Sandwich',
  price: 4,
  quantity: 3,
  isPaid: false,
  orderTotal() {
   orderTotal= order.price + order.quantity
  }
};

console.log(order)