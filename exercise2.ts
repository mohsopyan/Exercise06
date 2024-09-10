
interface IProduct {
    name: string;
    price: number;
  }
  
  interface ITransaction {
    products: { product: IProduct; qty: number }[];
  }
  
  class Product implements IProduct {
    name;
    price;
  
    constructor(paramName: string, paramPrice: number) {
      this.name = paramName;
      this.price = paramPrice;
    }
  }
  
  class Transaction implements ITransaction {
    #total;
    products: {
      product: IProduct;
      qty: number;
    }[];
  
    constructor() {
      this.#total = 0;
      this.products = [];
    }
  
    addToCart(product: IProduct, qty: number) {
      this.#total += product.price * qty;
      this.products.push({
        product,
        qty,
      });
    }
  
    showTotal() {
      return {
        cart: this.products,
        total: this.#total,
      };
    }
  
    checkOut() {
      const currProduct: {
        product: IProduct;
        qty: number;
      }[] = [...this.products];
      this.#total = 0;
      this.products = [];
  
      return currProduct;
    }
  }
  
  const newTransaction = new Transaction();
  newTransaction.addToCart(new Product("Kulkas", 50000), 5);
  console.log(newTransaction.showTotal());
  newTransaction.addToCart(new Product("Lemari", 100000), 2);
  console.log(newTransaction.showTotal());
  console.log(newTransaction.checkOut());
  
  newTransaction.addToCart(new Product("Lemari", 100000), 2);
  console.log(newTransaction.showTotal());