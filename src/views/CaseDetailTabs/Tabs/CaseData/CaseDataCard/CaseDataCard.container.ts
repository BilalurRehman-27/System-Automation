import { connect } from 'react-redux';
import CaseDataCard from './CaseDataCard';
import { CaseData } from '../../../../../store/modules/casesList/types';
import { editCaseEntryDataBegin } from '../../../../../store/actions/caseData.actions';
import { getCaseDetailsLoadingStatus, getCaseCurrentStatus } from '../../../../../store/selectors/caseList.selectors';

const mapStateToProps = (state: CaseData) => {
    const isLoading = getCaseDetailsLoadingStatus(state);
    const caseCurrentStatus = getCaseCurrentStatus(state);
    return { isLoading, caseCurrentStatus };
};

const mapDispatchToProps = {
    editCaseEntryDataBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(CaseDataCard);
