// eslint-disable-next-line react/prop-types
const Error = ({ msg = 'Something went wrong...' }) => {
  return <div className="error">{msg}</div>;
};
export default Error;
