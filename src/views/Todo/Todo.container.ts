import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodoListItems } from "../../store/selectors/todoList.selectors";

const mapStateToProps = (state: any) => {
  const data = getTodoListItems(state);
  return { data };
};

export default connect(mapStateToProps, {})(Todo);
