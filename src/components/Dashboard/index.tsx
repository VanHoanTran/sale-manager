import ListContainer from '../common/Containers/ListContainer';
import Title from '../common/Title';
import SubTitle from '../common/SubTitle';
import Categories from './Categories';
import Layout from './Layout';
import LatestOrders from './LatestOrders';
import Orders from './Orders';
import Purchases from './Purchases';
import Revenue from './Revenue';
import SaleReport from './SaleReport';
import TopSelling from './TopSelling';

const Dashboard = () => {
  return (
    <ListContainer>
      <Title>Sales Overview</Title>
      <SubTitle>View your current sales & summary</SubTitle>
      <Layout>
        <Revenue />
        <Orders />
        <Purchases />
        <SaleReport />
        <Categories />
        <LatestOrders />
        <TopSelling />
      </Layout>
    </ListContainer>
  );
};

export default Dashboard;
