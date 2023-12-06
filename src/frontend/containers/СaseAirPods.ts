
import СaseAirPods from '../components/СaseAirPods';
import { connect } from 'react-redux';


const mapStateToProps = (state:any) => {
    return {
        selected: state.selected || null
    }
}


const mapDispatchToProps = (dispatch:any) => ({
   

})

export default connect(mapStateToProps, mapDispatchToProps)(СaseAirPods);
