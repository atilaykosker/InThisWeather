import {connect} from 'react-redux'
import Main from '../components/Main'


const mapStateToProps = state => {
    console.log(`state`, state)
    return{
        ...state.getCity,

    }
}


export default connect(mapStateToProps, null)(Main);
