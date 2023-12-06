
import CategoriesColors from '../components/CategoriesColors';
import { connect } from 'react-redux';
import { addNewColor, setSelectedItem } from '../store/actions';


const mapStateToProps = (state:any) => {
    return {
        products: state.products || []
    }
}


const mapDispatchToProps = (dispatch:any) => ({
    addNewColor : (resultFilter) => dispatch(addNewColor(resultFilter)),
   

})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesColors);
