import "./styles.css";
import { ButtonGroupProps, ButtonProps } from "./types";

const Button = ({ label, isActive, onClick }: ButtonProps) => {
  return (
    <div onClick={onClick} className={`button ${isActive ? "active" : ""}`}>
      {label}
    </div>
  );
};

const ButtonGroup = (props: ButtonGroupProps) => {
  return <div className="button-group">{props.children}</div>;
};

export { Button, ButtonGroup };
