import axios from 'axios';

const getFlights = async () => {
  try {
    const response = await axios.get('https://api.npoint.io/4829d4ab0e96bfab50e7');
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export default getFlights;