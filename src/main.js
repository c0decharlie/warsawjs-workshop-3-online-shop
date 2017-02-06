import loadAppModule from './modules/app-module';
import ProductComponent from './components/product-component.js';
import PageHeaderComponent from './components/page-header-component.js';
import FooterComponent from './components/footer-component.js';
import CartComponent from './components/cart-component.js';
import ProductListComponent from './components/product-list-component.js';
import HttpService from './services/http-service.js';
import ProductService from './services/product-service.js';
import StorageService from './services/storage-service.js';
import CartService from './services/cart-service.js';

import css from './styles/main.css';

let shop = loadAppModule();

shop.component('pageHeaderComponent', new PageHeaderComponent());
shop.component('cartComponent', new CartComponent());
shop.component('productListComponent', new ProductListComponent());
shop.component('productComponent', new ProductComponent());
shop.component('footerComponent', new FooterComponent());

shop.factory('httpService', HttpService);
shop.service('productService', ProductService);
shop.factory('storageService', StorageService);
shop.service('cartService', CartService);

angular.bootstrap(window.document, ['shop']);
