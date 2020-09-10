import {connect} from "react-redux";
import Files from "./Files";
import {getFileListBegin} from "../../../../store/actions/fileList.actions";
import {FileList} from "../../../../store/modules/fileList/types";
import {getFilesList, getFileListLoadingStatus} from "../../../../store/selectors/fileList.selectors";

const mapStateToProps = (state: FileList) => {
    console.log('state', state);
    const data = getFilesList(state);
    const isLoading = getFileListLoadingStatus(state);
    return {data, isLoading};
};
const mapDispatchToProps = {
    getFileList: getFileListBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Files);
