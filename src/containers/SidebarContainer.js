import { connect } from 'react-redux';
import { getWeather } from '../store/actions/SearchValue';
import Sidebar from '../components/Sidebar';

// const mapStateToProps = (state) => {
//    return {
//       searchInputValue: state.searchValue.searchInputValue,
//    };
// };

const mapDispatchToProps = (dispatch) => {
    return{
        //changeInputValue: (searchInputValue) => dispatch(changeValue(searchInputValue)),
        getWeather:  (city) => dispatch(getWeather(city))
    }
 };

export default connect(null, mapDispatchToProps)(Sidebar);
