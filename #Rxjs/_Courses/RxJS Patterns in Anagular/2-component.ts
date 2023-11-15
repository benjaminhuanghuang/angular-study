export class ProductListComponent implements OnInit, OnDestroy{
    product: Product[];
    sub: Subscription;

    constructor(private productService: ProductService){

    }


    ngOnInit(): void {
        this.sub = this.productService.getProducts().subscript(
            products => this.products = products;
        )
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();    
    }
}