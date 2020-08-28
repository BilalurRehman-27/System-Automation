import React, { FunctionComponent } from "react";
import { Box } from "@material-ui/core";
import CaseDetailNode from "./CaseDetailNode";
type CaseDataProps = {};

const CaseData: FunctionComponent<CaseDataProps> = (props) => {
  return (
    <Box>
      <CaseDetailNode key="1" label="Case ID Number" value="Case #2021-1010" />
      <CaseDetailNode key="2" label="Statuc" value="Closed" />
      <CaseDetailNode key="3" label="Investigator" value="Jon Carlos" />
      <br/><br/>
      <CaseDetailNode key="4" label="Date of Report" value="04/10/2020" />
      <CaseDetailNode key="5" label="Report Prepared By" value="Sam Brooks" />
      <CaseDetailNode key="6" label="Title" value="Director" />
      <CaseDetailNode key="7" label="Contact's Phone" value="123456789" />
      <CaseDetailNode key="8" label="Contact's Email" value="abc@mail.com" />
      <br/><br/>
      <CaseDetailNode key="9"  label="Facility Name" value="Abc" />
      <CaseDetailNode key="10" label="Address" value="123 st main" />
      <CaseDetailNode key="11" label="City" value="LA" />
      <CaseDetailNode key="12" label="Country" value="USA" />
      <CaseDetailNode key="13" label="Zip Code" value="5400" />
      <CaseDetailNode key="14" label="Facility Type" value="Pharmacy" />
      <br/><br/>
      <CaseDetailNode key="15" label="Date of loss" value="05/10/2020" />
      <CaseDetailNode key="16" label="Specific Location of loss" value="2nd floor unit 1" />
      <CaseDetailNode key="17" label="Incident Type" value="Tampering" />
      <CaseDetailNode key="18" label="County" value="Howard County" />
      <CaseDetailNode key="19" label="Zip Code" value="12345-123" />
      <CaseDetailNode key="20" label="Facility Type" value="Tampering" />
      <br/><br/>
      <CaseDetailNode key="21" label="Drug" value="Loran ispam" />
      <CaseDetailNode key="22" label="Quantity" value="30 pils" />
      <CaseDetailNode key="23" label="Strength" value="10" />
      <CaseDetailNode key="24" label="Dosage From" value="n/a" />

    </Box>
  );
};

export default CaseData;
