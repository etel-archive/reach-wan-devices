// eslint-disable-next-line react/prop-types
const Success = ({ msg = { msg: 'Success...' } }) => {
  return (
    <div>
      {JSON.stringify(msg)} <br /> <br />
    </div>
  );
};

export default Success;
