export function TriggerError() {
  const h = () => {
    throw new Error('error!');
  }
  return <button onClick={h}>Trigger error</button>
}