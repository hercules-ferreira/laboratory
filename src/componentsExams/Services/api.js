import axios from "axios";

const baseURL = "https://laboratory-api.onrender.com/api";
const token = `61ef97fd174f100668fa7366f56d9ac58f8da9eaf384320dec69317a500c6ece1091a3f188dfa2e2e2c821e4f5a19bb0715fb3533c0f61137f6453eb8ddaa9a5ece83c05c4e62a8aa8ccf4215845c227f86020f1b405f2aaf6ced327c766040023db165be2e5f724c6dd605a2d4599ecd254270ba8a7814f8fa64fcac44907ec
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
  async getAllElements() {
    try {
      const { data } = await this.api.get("/exams");
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async getOneElement(examId) {
    try {
      const { data } = await this.api.get(`/exams/${examId}`);
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async createElement({
    examname,
    examcode,
    examvalue,
    deliverytime,
    informationexam,
  }) {
    const exam = {
      data: {
        examname,
        examcode,
        examvalue,
        deliverytime,
        informationexam,
      },
    };
    try {
      const { data } = await this.api.post(`/exams`, exam);
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async createExam({
    collectiondate,
    examcode,
    examname,
    numbercardsus,
    passwordexam,
    receivedexam,
    informationexam,
  }) {
    const exam = {
      data: {
        collectiondate,
        examcode,
        examname,
        numbercardsus,
        passwordexam,
        receivedexam,
        informationexam,
      },
    };
    try {
      const { data } = await this.api.post(`/exams`, exam);
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async editElement(examId, examObj) {
    try {
      const { data } = await this.api.put(`/exams/${examId}`, {
        data: examObj,
      });
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async removeElement(examId) {
    try {
      await this.api.delete(`/exams/${examId}`);
      return;
    } catch (error) {
      throw error;
    }
  }
}

const api = new Api();
export default api;
