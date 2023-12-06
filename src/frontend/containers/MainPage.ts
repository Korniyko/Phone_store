import { getProducts } from '../api/getProducts';
import { getProductsPhone } from '../api/getProductsPhone';
import MainPage from '../components/MainPage';
import { connect } from 'react-redux';

const mapStateToProps = (state:any) => {
    return {}
}


const mapDispatchToProps = (dispatch:any) => ({
  getProducts : () => dispatch(getProducts()),
  getProductsPhone : () => dispatch(getProductsPhone()),

})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
