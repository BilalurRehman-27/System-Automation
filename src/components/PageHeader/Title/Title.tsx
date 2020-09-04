import React, { FunctionComponent, Fragment } from "react";
import { Grid } from "@material-ui/core";
type TitleProps = {
  titleText: string,
  respondent?: { name: string },
  registrant?: { name: string }
};

const Title: FunctionComponent<TitleProps> = (props) => {
  return (
    <Grid item sm={12} md={4} lg={4} className="header-title">
      <div className="header-title">
        {props.titleText}
        {props.respondent && props.registrant &&
          <Fragment>
            <br />
            <div className="header-sub-title">
              <b>Respondent</b>: {props.respondent.name}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <b>Registrant</b>: {props.registrant.name}
            </div>
          </Fragment>
        }
      </div>
    </Grid>
  );
};

export default Title;
