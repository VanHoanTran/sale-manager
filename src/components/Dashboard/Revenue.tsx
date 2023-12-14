import Status from '../common/Status';

const data = {
  title: 'Revenue',
  data: 10000,
  percent: 10,
};
const Revenue = () => {
  return <Status {...data} />;
};

export default Revenue;
