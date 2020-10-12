import React, { FunctionComponent, Fragment } from 'react';
type TitleProps = {
    titleText: string;
    respondent?: { name: string };
    registrant?: { name: string };
};

const Title: FunctionComponent<TitleProps> = (props) => {
    const { titleText, respondent } = props;
    return (
        <div className="header-title">
            {titleText}
            {respondent && (
                <Fragment>
                    <br />
                    <div className="header-sub-title">
                        <b>Respondent</b>: {respondent.name}
                    </div>
                </Fragment>
            )}
        </div>
    );
};

export default Title;
