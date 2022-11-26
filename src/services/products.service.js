import apiClient from "../helper/apiClient";

class ProductsService {
    getScList = () => apiClient().get('kms/wallet');
}

export default new ProductsService();