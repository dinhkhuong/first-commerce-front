import axios from 'axios'

class ProductDataService {

    retrieveAllProducts() {
        return axios.get(`http://localhost:8080/AllProducts`);
    }

    addToCart(productId) {
        return axios.post(`http://localhost:8080/addToCart/${productId}`)
    }

    retrieveMyProducts() {
        return axios.get(`http://localhost:8080/myCart`);
    }
}
export default new ProductDataService()