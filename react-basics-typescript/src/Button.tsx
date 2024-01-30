import styled from "styled-components";

const CustomerButton = styled.button`
  border-radius: 5px;
  padding: 10px;
  width: 150px;
  background-color: blue;
  color: white;
`;

interface Props {
  btnType?: "primary" | "danger" | "secondary";
  children: string;
  onClick: () => void;
}

const Button = ({ btnType = "primary", children, onClick }: Props) => {
  return (
    <CustomerButton
      type="button"
      onClick={onClick}
      className={"btn btn-" + btnType}
    >
      {children}
    </CustomerButton>
  );
};

export default Button;
