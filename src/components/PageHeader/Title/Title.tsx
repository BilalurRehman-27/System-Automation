import React, { FunctionComponent, Fragment } from "react";
type TitleProps = {
  titleText: string,
  respondent?: { name: string },
  registrant?: { name: string }
};

const Title: FunctionComponent<TitleProps> = (props) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Title;
