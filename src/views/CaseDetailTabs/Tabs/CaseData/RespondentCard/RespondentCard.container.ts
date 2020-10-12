import { connect } from 'react-redux';
import RespondentCard from './RespondentCard';
import { CaseData } from '../../../../../store/modules/casesList/types';
import { editCaseDataRespondentBegin } from '../../../../../store/actions/caseData.actions';

const mapStateToProps = (state: CaseData) => {
    return state;
};

const mapDispatchToProps = {
    editCaseDataRespondentBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(RespondentCard);
