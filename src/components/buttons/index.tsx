import "./styles.css";

interface ButtonProps {
  label?: string;
}

interface ButtonGroupProps {
  children: React.ReactNode;
}

const Button = ({ label }: ButtonProps) => {
  return <div className="button">{label}</div>;
};

const ButtonGroup = (props: ButtonGroupProps) => {
  return <div className="button-group">{props.children}</div>;
};

export { Button, ButtonGroup };
