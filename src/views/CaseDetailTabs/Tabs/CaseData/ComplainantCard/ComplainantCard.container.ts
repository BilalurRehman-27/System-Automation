import { connect } from 'react-redux';
import ComplainantCard from './ComplainantCard';
import { CaseData } from '../../../../../store/modules/casesList/types';
import { editCaseDataComplainantBegin } from '../../../../../store/actions/caseData.actions';
const mapStateToProps = (state: CaseData) => {
    return state;
};

const mapDispatchToProps = {
    editCaseDataComplainantBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(ComplainantCard);
