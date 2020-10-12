import { connect } from 'react-redux';
import Entries from './Entries';
import { getCasesEntriesList, getCasesEntriesLoadingStatus } from '../../../../store/selectors/caseEntries.selectors';

const mapStateToProps = (state: any) => {
    const data = getCasesEntriesList(state);
    const isLoading = getCasesEntriesLoadingStatus(state);
    return { data, isLoading };
};

export default connect(mapStateToProps, {})(Entries);
