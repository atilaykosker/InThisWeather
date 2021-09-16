import Layout from '../components/Layout';
import Main from '../components/Main';
import HeaderContainer from '../containers/HeaderContainer';
import MainContainer from '../containers/MainContainer';

export default function Home(props) {
   return (
      <Layout>
         <HeaderContainer />
         <MainContainer />
      </Layout>
   );
}
