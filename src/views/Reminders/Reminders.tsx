import React, { FunctionComponent } from "react";
import Header from "../../components/PageHeader/Header";
import Title from "../../components/PageHeader/Title";
type RemindersProps = {};

const Reminders: FunctionComponent<RemindersProps> = (props) => {
  return (
    <Header>
      <Title titleText="Reminders" />
    </Header>
  );
};

export default Reminders;
