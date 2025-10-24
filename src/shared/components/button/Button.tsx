import classes from "./button.module.scss";

interface ButtonProps {
    children: React.ReactNode;
    bordered?: boolean;
    secondary?: boolean;
    onClick?: ()=> void;
}
const Button: React.FC<ButtonProps> = ({children, bordered, onClick, secondary}) => {
  return (
    <>
      <button onClick={onClick} className={classes.button} data-bordered={bordered} data-secondary={secondary}>{children}</button>
    </>
  )
}

export default Button;
