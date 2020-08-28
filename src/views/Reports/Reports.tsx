import React, { FunctionComponent } from "react";
import Header from "../../components/PageHeader/Header";
import Title from "../../components/PageHeader/Title";
type ReportsProps = {};

const Reports: FunctionComponent<ReportsProps> = (props) => {
  return (
    <Header>
      <Title titleText="Reports" />
    </Header>
  );
};

export default Reports;
