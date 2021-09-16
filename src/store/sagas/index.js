import { call, put, takeEvery,all } from 'redux-saga/effects';
import Api from '../../scripts/fetchData';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchWeather(action) {

   try {
      console.log(`action.payload.city`, action.payload)
      const cityObj = yield call(Api, action.payload);
      yield put({ type: 'WEATHER_FETCH_SUCCEEDED', city: cityObj });

   } catch (e) {
      yield put({ type: 'WEATHER_FETCH_FAILED', message: e.message });

   }
}


function* actionWatcher() {
   yield takeEvery('GET_WEATHER_REQUEST', fetchWeather);
}

export default function* rootSaga() {
   yield all([actionWatcher()]);
}
