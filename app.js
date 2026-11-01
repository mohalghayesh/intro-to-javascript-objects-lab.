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

// const order = {
//   customerName: 'Mariam',
//   itemName: 'Sandwich',
//   price: 4,
//   quantity: 3,
//   isPaid: true,

// };

// if (order.isPaid) {
//   console.log('Ready to prepare')
// } else { console.log('Waiting for payment')
// }

// order.orderTotal = order.price * order.quantity
// console.log(`${order.customerName} ordered ${order.quantity} ${order.itemName} items.`)
// console.log(`Order total: ${order.orderTotal}`)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//exercise 8

// const studySession = {
//   title: 'JavaScript Practice',
//   room: 'Lab 2',
//   topics: ['Variables', 'Arrays'],
// };

// console.log(studySession.topics[0])

// studySession.topics.push('Objects')

// console.log(studySession.topics.length)

// studySession.topics((topic) => {
//   console.log(topic)
// })

// studySession.room = 'Lab 3'

// console.log(`${studySession.title} will take place in ${studySession.room}.`)

// console.log(studySession.topics)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//exercise 9

// const products = [
//   { name: 'Tea', price: 2 },
//   { name: 'Sandwich', price: 4 },
//   { name: 'Cookie', price: 1 },
// ];

// console.log(products[1].name)

// products[1].price = 5

// products.push({name: 'juice' , price: 3 })
// products.forEach((product) => {
//   console.log(`${product.name} costs ${product.price}BD.`)
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//exercise 10

const studyGroup = {
  name: 'JavaScript Crew',
  members: [
    { name: 'Aisha', completedHomework: true },
    { name: 'Omar', completedHomework: false },
    { name: 'Noor', completedHomework: true },
  ],
};

console.log(studyGroup.name)
console.log(studyGroup.members.length)

let completedCount = 0
studyGroup.members.forEach((member) => {
  if (member.completedHomework) {
    completedCount++
  } else {
    console.log(`${member.name} needs to finish the homework`)
  }
})

console.log(`Completed homework: ${completedCount}`)