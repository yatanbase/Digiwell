import React, { memo } from "react";

const PrimaryBtn = memo(({ children, onClick, styles, className }) => {
  return (
    <button
      className={`p-3 bg-[#1ABC9C] text-white ${className} transition-all duration-200`}
      style={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default PrimaryBtn;
