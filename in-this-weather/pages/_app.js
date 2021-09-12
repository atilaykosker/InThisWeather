import '../styles/globals.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store/reducers';
 
const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <Component {...pageProps} />
      </Provider>
   );
}

export default MyApp;
