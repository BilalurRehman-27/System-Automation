import { connect } from "react-redux";
import CasesList from "./CasesList";
import { getCasesListBegin } from "../../../store/actions/casesList.actions";
import { CaseList } from "../../../store/modules/casesList/types";
import {
  getCasesList,
  getCasesLoadingStatus,
} from "../../../store/selectors/caseList.selectors";

const mapStateToProps = (state: CaseList) => {
  const data = getCasesList(state);
  const isLoading = getCasesLoadingStatus(state);
  return { data, isLoading };
};

const mapDispatchToProps = {
  caseList: getCasesListBegin,
};
export default connect(mapStateToProps, mapDispatchToProps)(CasesList);
