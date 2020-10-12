import { connect } from 'react-redux';
import Files from './Files';
import { FileList } from '../../../../store/modules/fileList/types';
import { getFilesList, getFileListLoadingStatus } from '../../../../store/selectors/caseFileList.selectors';
import { getFileListBegin } from '../../../../store/actions/caseFileList.actions';
import { getSelectedCaseID } from '../../../../store/selectors/caseList.selectors';
const mapStateToProps = (state: FileList) => {
    const data = getFilesList(state);
    const isLoading = getFileListLoadingStatus(state);
    const caseID = getSelectedCaseID(state);
    return { data, isLoading, caseID };
};
const mapDispatchToProps = {
    getFileList: getFileListBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Files);
