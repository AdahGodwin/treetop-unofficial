import { useState } from 'react';
import classes from './Input.module.css';

interface InputProps {
    icon?: string;
    placeholder: string;
    isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ icon, placeholder, isPassword }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={classes.input}>
            <i className={`${classes.icon} ${icon}`}></i>
            <input type={
                isPassword ?
                    showPassword ? "text" : "password" :
                    "text"}
                placeholder={placeholder} />
            {
                isPassword &&
                <i
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    className={`${classes.passwordIcon} ${showPassword ? "fas fa-eye-slash" : "fas fa-eye"}`}>

                </i>
            }
        </div>

    )
};

export default Input