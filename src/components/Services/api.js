import axios from "axios";

const baseURL = "http://localhost:1337/api";
const token = `ee737050bd164af2ce96c3278c7df672582dd4143c8ecdaeecb655feb4bd8c2ab567c337b41ea321eae716867e59e1218aa01606b841fa21d30421128f491979a49298dd6439fa038900faddfaa94d634b2de51ce416648c42c8e2ecd0e4bcec495a0f05fd3c0a3536a233a22552dfb6e1e7b2bee2b5434a7eda8b0bd994df67
`;

class Api {
  constructor() {
    this.api = axios.create({
      baseURL,
    });

    this.api.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }
  async getAllClients() {
    try {
      const { data } = await this.api.get("/customers");
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async getOneClient(customerId) {
    try {
      const { data } = await this.api.get(
        `/customers/${customerId}?populate=*`
      );
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async createClient({
    nameclient,
    namesocial,
    gender,
    cpf,
    namemother,
    numbercardsus,
    medicalrecordnumber,
    databirth,
    informationclient,
  }) {
    const customer = {
      data: {
        nameclient,
        namesocial,
        gender,
        cpf,
        namemother,
        numbercardsus,
        medicalrecordnumber,
        databirth,
        informationclient,
      },
    };
    try {
      const { data } = await this.api.post(`/customers`, customer);
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async editClient(customerId, customerObj) {
    // const customer = {
    //   data: customerObj
    // }
    try {
      const { data } = await this.api.put(`/customers/${customerId}`, {
        data: customerObj,
      });
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async removeCustomer(customerId) {
    try {
      await this.api.delete(`/customers/${customerId}`);
      return;
    } catch (error) {
      throw error;
    }
  }
}

const api = new Api();
export default api;
