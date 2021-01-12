import { useState } from "react";

function DropdownButton({ title, children, buttonClasses }) {
  const [show, setShow] = useState("collapse");
  const buttonHandler = () => {
    setShow((prev) => (prev === "show" ? "collapse" : "show"));
  };

  return (
    <>
      <button className={buttonClasses} type="button" onClick={buttonHandler}>
        {title}
      </button>
      <div className={show}>{children}</div>
    </>
  );
}

export default DropdownButton;
