import { connect } from 'react-redux';
import CaseIncident from './CaseIncident';
import { CaseData } from '../../../../../store/modules/casesList/types';
import { editCaseDataIncidentBegin } from '../../../../../store/actions/caseData.actions';
const mapStateToProps = (state: CaseData) => {
    return state;
};

const mapDispatchToProps = {
    editCaseDataIncidentBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(CaseIncident);
