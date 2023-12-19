
import { getProducts } from '../api/getProducts';
import { userLogin } from '../api/userLogin';
import { userRegistration } from '../api/userRegistration';
import RegisterUser from '../components/RegisterUser';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
    return {
        userProfile: state.user,
    }
}


const mapDispatchToProps = (dispatch: any) => ({
    userRegistration: (loginValue, passwordValue) => dispatch(userRegistration(loginValue, passwordValue)),
    userLogin: (loginValue, passwordValue) => dispatch(userLogin(loginValue, passwordValue)),


})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
