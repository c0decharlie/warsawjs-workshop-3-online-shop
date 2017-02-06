const KEY = 'cart';

export default class CartService {
    constructor(storageService) {
        this.storage = storageService;
        this.cart = storageService.read(KEY) || [];
    }

    addToCart(product) {
        this.cart.push(product);
        this.storage.save(KEY, this.cart);
    }

    getCart() {
        return this.cart;
    }

    getCartLength() {
        return this.cart.length;
    }
}
