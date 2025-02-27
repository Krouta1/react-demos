const Greeting = (props) => {
  return props.timeOfDay === 'morning' ? (
    <div>Good morning!</div>
  ) : (
    <div>Good afternoon!</div>
  );
};
export default Greeting;
