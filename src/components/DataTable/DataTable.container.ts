import {connect} from "react-redux";
import DataTable from "./DataTable";
const mapStateToProps = (state: any,props:any) => {
    return {
        props
    };
};
export default connect(mapStateToProps, {})(DataTable);
