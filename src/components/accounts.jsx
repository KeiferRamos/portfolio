import React from "react";

function Accounts({ logo, name }) {
  return (
    <div>
      <div className="account-logo">{logo}</div>
      <p className="account-name">{name}</p>
    </div>
  );
}

export default Accounts;
