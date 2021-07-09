import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTO: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  IMAGE: {
    S: `${CONFIG.BASE_URL}/images/small/`,
    M: `${CONFIG.BASE_URL}/images/medium/`,
    L: `${CONFIG.BASE_URL}/images/large/`,
  },
};

export default API_ENDPOINT;
