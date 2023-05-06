import { createSignal } from 'solid-js';
import DataLayer from './DataLayer';
import InputLayer from './InputLayer';
import PresentationLayer from './PresentationLayer';

function App() {
  const [data, setData] = createSignal(null);
  const [error, setError] = createSignal(null);
  const [loadData, setLoadData] = createSignal(false);
  const [payload, setPayload] = createSignal('');

  return (
    <>
      <InputLayer onLoadData={setLoadData} onPayload={setPayload} />
      <DataLayer data={data} loadData={loadData} payload={payload} onDataLoad={setData} onError={setError} onLoadData={setLoadData} />
      <PresentationLayer data={data} error={error} />
    </>
  );
}

export default App;
