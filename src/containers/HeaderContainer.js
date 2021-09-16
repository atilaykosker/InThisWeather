import { connect } from 'react-redux';
import { getWeather } from '../store/actions/SearchValue';
import Header from '../components/Header';

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

export default connect(null, mapDispatchToProps)(Header);
