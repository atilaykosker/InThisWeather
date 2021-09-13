import Layout from '../components/Layout';
import Main from '../components/Main';
import SidebarContainer from '../containers/SidebarContainer';
import MainContainer from '../containers/MainContainer';

export default function Home(props) {
   return (
      <Layout>
         <SidebarContainer />
         <MainContainer />
      </Layout>
   );
}
