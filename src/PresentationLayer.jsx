function PresentationLayer(props) {
  return (
    <div>
      {props.error() && <p>Error: {props.error()}</p>}
      {props.data() && (
        <pre>
          <code>{JSON.stringify(props.data(), null, 2)}</code>
        </pre>
      )}
    </div>
  );
}

export default PresentationLayer;
