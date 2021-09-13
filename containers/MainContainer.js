import {connect} from 'redux'
import Main from '../components/Main'
import {changeValue} from '../store/actions/SearchValue'

const mapStateToProps = state => ({
    searchValue: state.searchInputValue
})

const mapDispatchToProps = dispatch => ({
    changeInputValue: () => dispatch(changeValue(value))
})

export const MainContainer = connect(mapStateToProps,mapDispatchToProps)(Main)