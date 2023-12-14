import { connect } from 'react-redux';
import AboutPhone from '../components/AboutPhone';
import {  setPhoneToBasket } from '../store/actions';


const mapStateToProps = (state:any) => {
    return {
       descriptionPhone: state.descriptionPhone || []
    }
}


const mapDispatchToProps = (dispatch:any) => ({
    setPhoneToBasket : (phone,isInpuntCount) => dispatch(setPhoneToBasket(phone,isInpuntCount)),

})

export default connect(mapStateToProps, mapDispatchToProps)(AboutPhone);
