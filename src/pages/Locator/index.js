import { connect } from "react-redux";
import Locator from "./locator";
import LocationActions from "../../reducers/locationReducer";

const mapStateToProps = (state) => {
    return{
        region: state.home.region,
        coordinate: state.home.coordinate,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        setCurrentLocation: (latitude, longitude) => dispatch(LocationActions.setCurrentLocation(latitude, longitude)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Locator);
