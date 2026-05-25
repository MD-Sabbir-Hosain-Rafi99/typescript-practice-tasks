type CartItemType = {
    name : string;
    price : number;
    quantity ?: number;
}


const CartItem: CartItemType = {
    name :  "Iphone 18",
    price : 189000,
    quantity : 1
}


function calculateTotal(CartItem: CartItemType){
    const {name, price, quantity = 1} = CartItem;
    const total: number = price * quantity;
    return `${name} price is : ${total}`;
}

const result = calculateTotal(CartItem);
console.log(result)
