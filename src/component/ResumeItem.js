import React from "react";

const ResumeItem = ({ title, children }) => {
  return (
    <div className="resume-item">
      <h2 className="resume-item__title"><i className="fas fa-laptop-code"></i>{title}</h2>
      <div className="resume-item-list">{children}</div>
    </div>
  );
};

export default ResumeItem;
