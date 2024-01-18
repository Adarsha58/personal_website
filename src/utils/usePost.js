import { useState } from 'react';
import axios from 'axios';

const usePost = (url, options={}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const postData = async (body) => {
    setIsLoading(true);

    try {
      const response = await axios.post(url, body);
      


      const result = await response.data;
      
      if (response.status === 200) {
        setData(result);
      } else {
        setError(result);
      }
    } catch (error) {
      setError({ message: 'sending failed'});
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, postData };
};

export default usePost;
