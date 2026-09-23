class MenuItem {
    constructor(private _name: string, private _price: number, private _category: string) {}
    get name(): string {
        return this._name;
    }
    get price(): number {
        return this._price;
    }
    getMenuInfo(): string {
        return `${this._name} - ${this._price} - ${this._category}`;
    }
}
class Order {
    private items: { item: MenuItem; quantity: number }[] = [];
    addItem(item: MenuItem, quantity: number): void {
        this.items.push({ item, quantity });
    }
    getItems() {
        return this.items;
    }
    calculateTotal(): number {
        return this.items.reduce((sum, i) => sum + i.item.price * i.quantity, 0);
    }
}
class Restaurant {
    private customers: Customer[] = [];
    constructor(private name: string, private menu: MenuItem[]) {}
    addCustomer(customer: Customer): void {
        this.customers.push(customer);
    }
    showMenu(): void {
        console.log("เมนูของร้าน:");
        this.menu.forEach(item => console.log(item.getMenuInfo()));
        console.log("----------------------------------");
    }
    processOrder(order: Order): void {
        const total = order.calculateTotal();
        const discount = total > 500 ? total * 0.01 : 0;
        
        console.log("Order Details:");
        order.getItems().forEach(i => {
            const subtotal = i.item.price * i.quantity;
            console.log(`${i.quantity} x ${i.item.getMenuInfo()} = $${subtotal.toFixed(2)}`);
        });
        console.log("----------------------------------");
        console.log(`Total: $${total.toFixed(2)}`);
        console.log(`Net Price (1% Disc): $${(total - discount).toFixed(2)}`);
    }
}
class Customer {
    constructor(private name: string) {}
    placeOrder(restaurant: Restaurant, order: Order): void {
        restaurant.addCustomer(this);
        console.log(`${this.name} placed an order for:`);
        restaurant.processOrder(order);
    }
}
const menu1 = new MenuItem("Pizza", 199, "Italian");
const menu2 = new MenuItem("Pasta", 159, "Italian");
const menu3 = new MenuItem("Steak", 259, "Europe");
const menu4 = new MenuItem("Salad", 150, "Appetizer");
const restaurant = new Restaurant("My Restaurant", [menu1, menu2, menu3, menu4]);
restaurant.showMenu();
const order = new Order();
order.addItem(menu1, 2);
order.addItem(menu2, 1);
order.addItem(menu4, 1);
const customer1 = new Customer("Alice");
customer1.placeOrder(restaurant, order);