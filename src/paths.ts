const signIn = () => ({ pathname: '/signIn' });

const signUp = () => ({ pathname: '/signUp' });

const dashboard = () => ({ pathname: '/dashboard' });

const productList = () => ({ pathname: '/productList' });

const createProduct = () => ({ pathname: '/createProduct' });

const editProduct = ({ id = ':id' } = {}) => ({
  pathname: `/editProduct/${id}`,
});

const orderList = () => ({ pathname: '/orderList' });

const orderDetails = ({ id = ':id' } = {}) => ({
  pathname: `/orderDetails/${id}`,
});

const userSettings = ({ id = ':id' } = {}) => ({ pathname: `/account/${id}` });

const paths = {
  signIn,
  signUp,
  dashboard,
  productList,
  createProduct,
  editProduct,
  orderList,
  orderDetails,
  userSettings,
};

export default paths;
