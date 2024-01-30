import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  dismissAlert: () => void;
}

const Alert = ({ children, dismissAlert }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={dismissAlert}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
