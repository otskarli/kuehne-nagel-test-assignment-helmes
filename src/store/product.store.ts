import {makeAutoObservable} from "mobx";
import {ProductService} from "../service/product.service";
import {SearchRequestDtoInterface} from "../dto/search-request.dto";

export class ProductStore {
    private _products: Array<any> = [];
    private _categories: Array<string> = [];

    set products(value: Array<any>) {
        this._products = value;
    }
    get products(): Array<any> {
        return this._products;
    }
    set categories(value: Array<string>) {
        this._categories = value;
    }
    get categories(): Array<string> {
        return this._categories;
    }

    constructor(private readonly productService: ProductService) {
        makeAutoObservable(this);
    }

    async filterProducts (searchRequest: SearchRequestDtoInterface) {
        this.products = await this.productService.list(searchRequest);
    }

    async listCategories () {
        this.categories = await this.productService.listCategories();
    }
}