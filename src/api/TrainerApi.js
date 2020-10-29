import axios from 'axios';
import BaseURL from './routerConfig';

const TrainerApi = {
  getNotGroupedTrainers: () =>
    axios.get(`${BaseURL}/trainers?grouped=false`).then((res) => res.data),

  createTrainer: (name) => axios.post(`${BaseURL}/trainers`, { name }).then((res) => res.data),
};

export default TrainerApi;
