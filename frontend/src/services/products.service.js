import apiClient from "../helper/apiClient";

class ProductsService {
    getWalletsList = () => apiClient().get('smart-contract');
}

export default new ProductsService();