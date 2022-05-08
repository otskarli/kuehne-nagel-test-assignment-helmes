import {SearchRequestDtoInterface} from "../dto/search-request.dto";
import {API_URL} from "../configuration";

export class ProductService {
    async listCategories() {
        const response = await fetch(`${API_URL}/api/products.json`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Failed fetching products.json file');
        }

        let categories: Array<string> = [];
        const products = await response.json();

        products.forEach((product: any) => {
            if (categories.indexOf(product.category) === -1) {
                categories.push(product.category)
            }
        });

        return categories;
    }

    async list(searchRequest: SearchRequestDtoInterface) {
        const response = await fetch(`${API_URL}/api/products.json`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Failed fetching products.json file');
        }

        let filtered = [];
        const products = await response.json();

        if (!searchRequest.name && searchRequest.categories.length === 0) {
            return [];
        }

        filtered = products;
        if (searchRequest.name) {
            filtered = products.filter((product: any) => {
                return product.productName.toLowerCase().indexOf(searchRequest.name?.toLowerCase()) !== -1;
            });
        }

        if (searchRequest.categories.length > 0) {
            filtered = filtered.filter((product: any) => {
                return searchRequest.categories.indexOf(product.category) !== -1;
            });
        }

        return filtered;
    }
}