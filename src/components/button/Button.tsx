import classes from "./button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    bordered?: boolean;
    onClick?: ()=> void;
}
const Button: React.FC<ButtonProps> = ({children, bordered, onClick}) => {
  return (
    <>
      <button onClick={onClick} className={classes.button} data-bordered={bordered}>{children}</button>
    </>
  )
}

export default Button;
