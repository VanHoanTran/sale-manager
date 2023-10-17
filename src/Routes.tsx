import { Routes as RrRoutes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import paths from './paths';
import DashboardPage from './pages/DashboardPage';
import ProductListPage from './pages/ProductListPage';
import CreateProductPage from './pages/CreateProductPage';
import EditProductPage from './pages/EditProductPage';
import OrderListPage from './pages/OrderListPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import AccountPage from './pages/AccountPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const Routes = () => {
  //const token = 'useSelector(getToken)';

  return (
    <RrRoutes>
      <Route element={<Layout />}>
        <Route path={paths.dashboard().pathname} element={<DashboardPage />} />

        <Route
          path={paths.productList().pathname}
          element={<ProductListPage />}
        />

        <Route
          path={paths.createProduct().pathname}
          element={<CreateProductPage />}
        />

        <Route
          path={paths.editProduct().pathname}
          element={<EditProductPage />}
        />

        <Route path={paths.orderList().pathname} element={<OrderListPage />} />

        <Route
          path={paths.orderDetails().pathname}
          element={<OrderDetailsPage />}
        />

        <Route path={paths.userSettings().pathname} element={<AccountPage />} />
      </Route>
      <Route path={paths.signIn().pathname} element={<SignInPage />} />
      <Route path={paths.signUp().pathname} element={<SignUpPage />} />
      <Route
        path="*"
        element={<Navigate to={paths.dashboard().pathname} replace />}
      />
    </RrRoutes>
  );
};

export default Routes;
