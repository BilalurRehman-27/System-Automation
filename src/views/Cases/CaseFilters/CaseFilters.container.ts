import { connect } from 'react-redux';
import CaseFilters from './CaseFilters';
import { getCasesListBegin } from '../../../store/actions/casesList.actions';
const mapStateToProps = (state: any) => {
    return { state };
};
const mapDispatchToProps = {
    caseList: getCasesListBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(CaseFilters);
