
import Profile from '../components/Profile';
import { connect } from 'react-redux';
import { deleteUser } from '../store/actions';

const mapStateToProps = (state:any) => {
    return {
        userProfile: state.user,
    }
}


const mapDispatchToProps = (dispatch:any) => ({

    deleteUser : (usernull) => dispatch(deleteUser(usernull)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
