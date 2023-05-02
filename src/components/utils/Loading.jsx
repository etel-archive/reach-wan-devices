import { MoonLoader } from 'react-spinners';

// eslint-disable-next-line react/prop-types
const Loading = ({ text = 'Loading...', iconSize }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <MoonLoader size={iconSize} />
      <h3>{text}</h3>
    </div>
  );
};

export default Loading;
