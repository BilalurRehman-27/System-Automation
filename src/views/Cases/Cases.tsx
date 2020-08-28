import React, { FunctionComponent } from "react";
import CaseFilters from "./CaseFilters";
import Header from "../../components/PageHeader/Header";
import Title from "../../components/PageHeader/Title";
import CasesList from "./CasesList";

type CasesProps = {};

const Cases: FunctionComponent<CasesProps> = (props) => {
  return (
    <aside>
      <Header>
        <Title titleText="Cases" />
        <CaseFilters />
      </Header>
      <CasesList />
    </aside>
  );
};

export default Cases;
