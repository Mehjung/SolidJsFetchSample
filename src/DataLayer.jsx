import { createEffect, createSignal } from 'solid-js';
import axios from 'axios';

function DataLayer(props) {
  const [isLoading, setIsLoading] = createSignal(false);

  const fetchData = async (userId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${userId}`);
      props.onDataLoad(response.data);
      props.onError(null);
    } catch (error) {
      props.onError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  createEffect(() => {
    if (props.loadData() && !isLoading()) {
      fetchData(props.payload());
      props.onLoadData(false);
    }
  });

  return null;
}

export default DataLayer;
