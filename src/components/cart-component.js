const TEMPLATE = `
   <div class="dropdown cart" style="float:right">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        Koszyk: {{$ctrl.cartService.getCartLength()}}
        <span class="caret"></span>
    </button>   
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li ng-repeat="product in $ctrl.cartService.getCart() track by $index">
            <a href="#">{{product}}</a>
        </li>
    </ul>
   </div>
`;

export default class CartComponent {
    constructor() {
        this.controller = CartController;
    }

    template() {
        return TEMPLATE;
    }
}

class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
}
