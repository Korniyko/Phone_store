import { getProducts } from '../api/getProducts';

import { connect } from 'react-redux';
import MainScreen from '../components/MainScreen';

const mapStateToProps = (state: any) => {
    return {
        selected: state.selected || null
    }
}


const mapDispatchToProps = (dispatch: any) => ({


})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
