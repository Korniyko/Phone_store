import { getProducts } from '../api/getProducts';
import PhoneCategories from '../components/PhoneCategories';
import { connect } from 'react-redux';
import { addToAboutPhone } from '../store/actions';

const mapStateToProps = (state:any) => {
    return {
        productsPhone: state.phoneProducts || []
    }
}


const mapDispatchToProps = (dispatch:any) => ({
    addToAboutPhone : (resultFilter) => dispatch(addToAboutPhone(resultFilter)),

})

export default connect(mapStateToProps, mapDispatchToProps)(PhoneCategories);
