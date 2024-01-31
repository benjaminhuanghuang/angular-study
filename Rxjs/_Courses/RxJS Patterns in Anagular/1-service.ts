@Injectable({providedIn: 'root'})
export class ProductService {
    private productsUrl ='api/products';

    constructor(private http: HTTPClient){

    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.productsUrl}?cat=${catId}`).pipe(
            tap(data => console.log(JSON.stringify(data))), catchError(this.handleError)
        )
    }
}