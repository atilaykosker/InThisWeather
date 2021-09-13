import { connect } from 'react-redux';
import { changeValue } from '../store/actions/SearchValue';
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state) => {
   return {
      searchInputValue: state.searchValue.searchInputValue,
   };
};

const mapDispatchToProps = (dispatch) => {
    return{
        changeInputValue: (searchInputValue) => dispatch(changeValue(searchInputValue)),

    }
 };

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
