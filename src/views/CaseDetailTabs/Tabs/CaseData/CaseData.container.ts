import { connect } from 'react-redux';
import CaseData from './CaseData';
import { getCaseDetails, getCaseDetailsLoadingStatus } from '../../../../store/selectors/caseList.selectors';
import { Case } from '../../../../store/modules/casesList/types';

const mapStateToProps = (state: Case) => {
    const isLoading = getCaseDetailsLoadingStatus(state);
    const selectedCaseDetails = getCaseDetails(state);
    return { selectedCaseDetails, isLoading };
};

export default connect(mapStateToProps, {})(CaseData);
