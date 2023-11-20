import createApiClient from "./api_service";

class OrderService {
  constructor(baseUrl = "/api/order") {
    this.api = createApiClient(baseUrl);
  }
  async getAll() {
    return (await this.api.get("/get-all-order")).data;
  }
  async createOrder(data) {
    return (await this.api.post(`/create`, data)).data;
  }
  async getOrderByUserId(id) {
    return (await this.api.get(`/get-all-order/${id}`)).data;
  }
  async updateOrder(id) {
    return (await this.api.put(`/update/${id}`)).data;
  }
  async cancelOrder(id, orderItems, userId) {
    const data = { orderItems, orderId: id };
    console.log(data);
    return (await this.api.delete(`/cancel-order/${userId}`, data)).data;
  }
}
export default new OrderService();
