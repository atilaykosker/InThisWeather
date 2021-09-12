import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { changeValue } from '../store/actions/SearchValue';

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
