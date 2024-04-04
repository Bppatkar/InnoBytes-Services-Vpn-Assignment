import React from "react";

const TitleDesc = ({ title, desc }) => {
  const key = "LaslesVPN";
  const parts = desc.split(key);

  function Desc() {
    return <>{desc}</>;
  }
  function Parts() {
    return (
      <>
        {parts[0]} <strong>{key}</strong> {parts[1]}
      </>
    );
  }
  return (
    <div className="x-network">
      <div className="x-ch-18 x-centerText x-boldText x-2xlText x-space-title">
        {title}
      </div>
      <div className="x-ch-60 x-centerText x-space-desc">
        {parts.length === 1 ? <Desc /> : <Parts />}
      </div>
    </div>
  );
};

export default TitleDesc;
