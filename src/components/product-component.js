const TEMPLATE = `
    <div class="col-md-4">
        <div class="product-container">
            <h3>{{$ctrl.productsData.name}}</h3>     
            <div class="row">
                <div class="col-md-6 img">
                    <img ng-src="{{$ctrl.productsData.image}}" class="col-md-12 thumbnail" alt="default-img">
                </div>
                <div class="col-md-6 description">{{$ctrl.productsData.description}}</div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <input type="button" ng-click="$ctrl.addProductToCart()" class="btn btn-info" value="Do koszyka">
                </div>
            </div>
        </div>          
    </div>
`

export default class ProductComponent {
    constructor() {
        this.bindings = {
            productsData: '='
        }
        this.controller = ProductController;
    }

    template() {
        return TEMPLATE;
    }
}

class ProductController {
    constructor(cartService) {
        this.cartService = cartService;
    }

    addProductToCart() {
        this.cartService.addToCart(this.productsData.name);
    }
}
