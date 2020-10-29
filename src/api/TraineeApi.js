import axios from 'axios';
import BaseURL from './routerConfig';

const TraineeApi = {
  getNotGroupedTrainees: () =>
    axios.get(`${BaseURL}/trainees?grouped=false`).then((res) => res.data),

  createTrainee: (name) => axios.post(`${BaseURL}/trainees`, { name }).then((res) => res.data),
};

export default TraineeApi;
