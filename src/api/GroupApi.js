import axios from 'axios';
import BaseURL from './routerConfig';

const GroupApi = {
  getGroups: () => axios.get(`${BaseURL}/groups`).then((res) => res.data),
};

export default GroupApi;
