import { connect } from "react-redux";
import CaseFilters from "./CaseFilters";
import { Case } from "../../../store/modules/casesList/types";

const mapStateToProps = (state: Case) => {
  return {};
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(CaseFilters);
