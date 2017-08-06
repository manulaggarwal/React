import {connect} from 'react-redux';
import Filter from '../components/Filter';
const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter
    };
}

const SelectedFilter = connect(
    mapStateToProps,
    null
)(Filter);
export default SelectedFilter;