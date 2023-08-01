// Minimal
let shoppingList = [
  {name: 'milk', amount: 3, purchased: true, price: 35, total: 105},
  {name: 'cheese', amount: 0, purchased: false, price: 70, total: 0},
  {name: 'bread', amount: 1, purchased: true, price: 20, total: 20},
  {name: 'tomatoes', amount: 7, purchased: true, price: 30, total: 210},
  {name: 'ice cream', amount: 0, purchased: false, price: 35, total: 0}
];

function printShoppingList() {
  console.log('Shopping List:');
  // Sort the shoppingList based on the purchased status 
  shoppingList.sort((a, b) => a.purchased - b.purchased);
  shoppingList.forEach(item => {
    console.log(`${item.name}: ${item.purchased ? 'Purchased' : 'Not Purchased'}`);
  });
}

//  Функція приймає назву продукту і відзначає його як придбаний.
function purchaseItem(productName) {
  let item = shoppingList.find(item => item.name === productName);
  if (item) {
    item.purchased = true;
    console.log(`Purchased: ${item.name}`);
  } else {
    console.log(`Product not found: ${productName}`);
  }
}

printShoppingList();
purchaseItem('cheese');


// Норма
// 1. Видалення продукту зі списку (видалення повинно проводитися шляхом 
// створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

let purchaseList = [
  {name: 'milk', amount: 3, purchased: true, price: 35, 
  total() {
    return `${this.amount * this.price}`;
  },
  },
  {name: 'cheese', amount: 0, purchased: false, price: 70, 
  total() {
    return `${this.amount * this.price}`;
  },
  },
  {name: 'bread', amount: 1, purchased: true, price: 20, 
  total() {
    return `${this.amount * this.price}`;
  },
  },
  {name: 'tomatos', amount: 7, purchased: true, price: 30,
  total() {
    return `${this.amount * this.price}`;
  },
  },
  {name: 'ice cream', amount: 0, purchased: false, price: 35, 
  total() {
    return `${this.amount * this.price}`;
  },
  },  
];

let newArray = [];
  
function deleteItem (name) {
  purchaseList.forEach(element => {
    if (element.name !== name) {
       newArray.push(element);
    }
  });  
  return newArray;
}

console.log(deleteItem('bread'));

// 2. Додавання покупки в список. Враховуй, що при додаванні покупки з 
// уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, 
// а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, 
// а кількості товарів стало 2, то сума буде 24.

let purchaseList_2 = [
  {name: 'milk', amount: 3, purchased: true, price: 35, total: 105},
  {name: 'cheese', amount: 0, purchased: false, price: 70, total: 0},
  {name: 'bread', amount: 1, purchased: true, price: 20, total: 20},
  {name: 'tomatos', amount: 7, purchased: true, price: 30, total: 210},
  {name: 'ice cream', amount: 0, purchased: false, price: 35, total: 0},  
];

function addItem(name) {
  let existingItem = purchaseList_2.find(item => item.name === name);
  if (existingItem) {
    existingItem.amount += 1;
    existingItem.total += existingItem.price;
  } else {
    purchaseList_2.push({name: name, amount: 1, purchased: true,});
  }
  return purchaseList_2;
}

console.log(addItem('ice'));

