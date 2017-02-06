const TEMPLATE = `
   <div class="row product-list">
        <product-component products-data="product" ng-repeat="product in $ctrl.products"></product-component>        
   </div>
`;

export default class ProductListComponent {
    constructor() {
        this.controller = ProductListController;
    }

    template() {
        return TEMPLATE;
    }
}

class ProductListController {
    constructor(productService) {
        productService.fetchProducts().then(response => {
            this.products = response.data;
        });
    }

    $onInit() {
        this.products = [];
    }
}
