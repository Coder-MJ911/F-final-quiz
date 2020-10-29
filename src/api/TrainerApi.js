import axios from 'axios';
import BaseURL from './routerConfig';

const TrainerApi = {
  getNotGroupedTrainers: async () =>
    axios.get(`${BaseURL}/trainers?grouped=false`).then((res) => res.data),
  createTrainer: async (name) =>
    axios.post(`${BaseURL}/trainers`, { name }).then((res) => res.data),
  deleteById: async (id) => axios.delete(`${BaseURL}/trainers/${id}`),
};

export default TrainerApi;
