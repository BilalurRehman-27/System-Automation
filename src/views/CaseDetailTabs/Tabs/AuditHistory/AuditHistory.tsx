import React, { FunctionComponent } from "react";
import AuditHistoryNode from "./AuditHistoryNode";
import { Box } from "@material-ui/core";

type AuditHistoryProps = {};

const AuditHistory: FunctionComponent<AuditHistoryProps> = (props) => {
  let count = 0;
  return (
    <Box>
      <AuditHistoryNode key={count++} date={new Date()} description="Sarah Williams changed status to closed" />
      <AuditHistoryNode key={count++} date={new Date()} description="John Smith changed status to Under Review" />
      <AuditHistoryNode key={count++} date={new Date()} description="John Smith added note in entry" />
      {/* <AuditHistoryNode key={count++} date={new Date()} description="Description……Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit." /> */}
      <AuditHistoryNode key={count++} date={new Date()} description="John Smith changed type to Tampering" />
      <AuditHistoryNode key={count++} date={new Date()} description="Sarah Williams  assigned case to John Smith" />
    </Box>
  );
};

export default AuditHistory;
