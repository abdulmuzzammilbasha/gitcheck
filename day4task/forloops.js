const productList = [
    {
    "product": "Laptop",
    "brand": "HP",
    "price": 43000,
    "specs": {
      "processor": "Intel Core i7",
      "memory": "16GB RAM",
      "storage": "512GB SSD"
    }
},
{
    "product": "phone",
    "brand": "OPPO",
    "price": 18000,
    "specs": {
      "processor": "android",
      "memory": "8GB RAM",
      "storage": "64GB memory"
}

  },
  {
    "product": "smart Watch",
    "brand": "apple",
    "price": 25000,
    "specs": {
      "processor": "i",
      "memory": "8GB RAM",
      "storage": "64GB memory"
}

  }
]

//Iteration over JSON using forEach loop

productList.forEach((item)=>{
console.log(item.product);
console.log(item.price);
console.log(item.specs)
})

//Iteration over JSON using for..in loop

for(var i in productList){
  console.log(productList[i].product);
}

//Iteration over JSON using for loop


for(var x =0 ;x<productList.length; x++){
  console.log(productList[x].product);
}

// we cannot use for..of loop with objects
