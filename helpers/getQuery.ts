import axios from 'axios';
import { useQuery } from 'react-query';

export function useGetData() {
  return useQuery(
    'data',
    async () => {
      const { data } = await axios.get(
        `https://assessment-edvora.herokuapp.com`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}
