import { connect } from 'react-redux';
import AuditHistory from './AuditHistory';
import { AuditHistoryType } from '../../../../store/modules/auditHistory/types';
import { getSelectedCaseID } from '../../../../store/selectors/caseList.selectors';

const mapStateToProps = (state: AuditHistoryType[]) => {
    const caseID = getSelectedCaseID(state);
    return { caseID };
};

export default connect(mapStateToProps, {})(AuditHistory);
