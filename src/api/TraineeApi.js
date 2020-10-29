import axios from 'axios';
import BaseURL from './routerConfig';

const TraineeApi = {
  getNotGroupedTrainees: async () =>
    axios.get(`${BaseURL}/trainees?grouped=false`).then((res) => res.data),

  createTrainee: async (name) =>
    axios.post(`${BaseURL}/trainees`, { name }).then((res) => res.data),
  deleteById: async (id) => axios.delete(`${BaseURL}/trainees/${id}`),
};

export default TraineeApi;
