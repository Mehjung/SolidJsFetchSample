import { createSignal } from 'solid-js';

function InputLayer(props) {
  const [payload, setPayload] = createSignal('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add validation and error setting logic here.

    props.onLoadData(true);
    props.onPayload(payload());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="payload">ID:</label>
      <input type="text" id="payload" value={payload()} onInput={(e) => setPayload(e.target.value)} />
      <button type="submit">Load Data</button>
    </form>
  );
}

export default InputLayer;
