import { connect } from 'react-redux';
import Basket from '../components/Basket';


const mapStateToProps = (state:any) => {
    return {
        basketProducts: state.basketProducts || [],
        countPhone: state.countPhone || []

    }
}


const mapDispatchToProps = (dispatch:any) => ({
   

})

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
