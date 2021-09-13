import Layout from '../components/Layout';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

export default function Home(props) {
   return (
      <Layout>
         <Sidebar />
         <Main />
      </Layout>
   );
}
