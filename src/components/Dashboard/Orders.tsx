import Status from '../common/Status';

const data = {
  title: 'Orders',
  data: 20000,
  percent: -13,
};

const Orders = () => {
  return <Status {...data} />;
};

export default Orders;
