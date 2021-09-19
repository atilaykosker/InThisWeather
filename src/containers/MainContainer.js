import {connect} from 'react-redux'
import Main from '../components/Main'


const mapStateToProps = state => {
    return{
        ...state.getCity,

    }
}


export default connect(mapStateToProps, null)(Main);
