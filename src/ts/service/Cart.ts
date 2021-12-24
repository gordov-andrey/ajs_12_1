import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getTotal(): number {
        return this._items.reduce((acc, el) => el.price + acc, 0);
    }

    getTotalWithDiscount(discount: number): number {
        return ((100 - discount) / 100) * this.getTotal();
    }

    deleteItem(id: number): void {
        this._items.splice(this._items.findIndex((item) => item.id === id) , 1);
    }
}