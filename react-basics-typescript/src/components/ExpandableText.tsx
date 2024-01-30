import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 20 }: Props) => {
  const [isExpanded, setExpanded] = useState(true);
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars + 1);
  const toggleButton = () => {
    setExpanded(!isExpanded);
  };

  return (
    <p>
      {text} ...
      <button onClick={toggleButton}>{isExpanded ? "Less" : "More"}</button>
    </p>
  );
};

export default ExpandableText;
