import { connect } from 'react-redux';
import Basket from '../components/Basket';
import { updateBasket } from '../store/actions';
import { BasketItem } from '../../types';


const mapStateToProps = (state:any) => {
    return {
        basketProducts: state.basketProducts || [],
        countPhone: state.countPhone || []

    }
}


const mapDispatchToProps = (dispatch:any) => ({
    updateBasket : (products:BasketItem[]) => dispatch(updateBasket(products)),


})

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
