import "./Button.scss";
import classnames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type: "primary" | "secondary";
}

const Button = ({ children, onClick, type }: ButtonProps) => (
  <button
    className={classnames("button", `button--${type}`)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;