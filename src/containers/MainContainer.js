import {connect} from 'react-redux'
import Main from '../components/Main'
import {changeValue} from '../store/actions/SearchValue'

const mapStateToProps = state => ({
    searchInputValue: state.searchValue.searchInputValue,
})


export default connect(mapStateToProps, null)(Main);
