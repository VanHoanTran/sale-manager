import Status from '../common/Status';

const data = {
  title: 'Purchases',
  data: 20000,
  percent: 15,
};

const Purchases = () => {
  return <Status {...data} />;
};

export default Purchases;
