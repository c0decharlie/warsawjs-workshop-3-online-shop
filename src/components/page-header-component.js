const TEMPLATE = `
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" href="#">
                    WarsawJS Online Shop
                  </a>
                </div>
                <cart-component></cart-component>
            </div>      
        </div>      
    </nav>
`;

export default class PageHeaderComponent {
     template() {
        return TEMPLATE;
    }
}
