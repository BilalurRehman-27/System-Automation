import { connect } from "react-redux";
import Reminders from "./Reminders";

const mapStateToProps = (state: any) => {
  //return your store data here 
  return {};
};

export default connect(mapStateToProps, {})(Reminders);
