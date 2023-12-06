import { connect } from 'react-redux';
import AboutPhone from '../components/AboutPhone';
import { countPhone, setPhoneToBasket } from '../store/actions';


const mapStateToProps = (state:any) => {
    return {
       descriptionPhone: state.descriptionPhone || []
    }
}


const mapDispatchToProps = (dispatch:any) => ({
    setPhoneToBasket : (phone) => dispatch(setPhoneToBasket(phone)),
    countPhone : (count) => dispatch(countPhone(count)),

})

export default connect(mapStateToProps, mapDispatchToProps)(AboutPhone);
