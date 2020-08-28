import React, { FunctionComponent } from "react";
type HeaderProps = {};

const Header: FunctionComponent<HeaderProps> = (props) => {
  return (
    <div className="header">
      {props.children}
    </div>
  );
};

export default Header;
