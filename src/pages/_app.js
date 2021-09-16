import '../styles/globals.css';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import rootReducer from '../store/reducers';
import rootSaga from '../store/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function MyApp({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <Component {...pageProps} />
      </Provider>
   );
}
if (module.hot) { module.hot.accept(MyApp);}

export default MyApp;
