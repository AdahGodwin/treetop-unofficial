import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from 'motion/react';;
import Input from "../shared/components/input/Input";
import classes from "./auth.module.scss";
import logo from "../assets/treetop-logo.png";
import { useMediaQuery } from "react-responsive";
import ArrowBack from "@/assets/icons/arrowBack.svg?react";
import { Link, useLocation } from "react-router";

const Auth: React.FC = () => {
     const location = useLocation();
       
    const containerRef = useRef<HTMLDivElement>(null);
    const authFormRef = useRef<HTMLDivElement>(null);
    const authContentRef = useRef<HTMLDivElement>(null);

    const [initialMode, setInitialMode] = useState("");
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>("employee");
    const [containerWidth, setContainerWidth] = useState<number>(0);

    const rowDirection: "row" | "row-reverse" = initialMode === "login" ? "row-reverse" : "row";

    const options = ["employee", "employer"];

    const isMobile = useMediaQuery({ maxWidth: 850 });

    useEffect(() => {
        const { mode, isLogin } = location.state;
        setInitialMode(mode);
        setIsLogin(isLogin);

        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContainerWidth(entry.contentRect.width);
            }
        });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [initialMode]);

    function toggleAuthMode() {
        setIsLogin((prevState) => !prevState);
    }

    function calculateDistance(refWidth: number | undefined): number {

        if (!refWidth) return 0;
        if (rowDirection === "row-reverse") {
            if (isLogin) {
                return 0
            }
            else {
                return -(containerWidth - refWidth);

            }
        }
        else {
            if (isLogin) {
                return (containerWidth - refWidth);
            }
            else {
                return 0;
            }
        }

    }

    // Animation variants
    const fadeSlide = {
        hidden: { opacity: 0, },
        visible: { opacity: 1, transition: { duration: 0.4 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
    };

    return (

        <div className={classes.container}>
            <div className={classes.auth} ref={containerRef} style={{
                flexDirection: rowDirection,
                borderRadius: isLogin ? "0 16px 16px 0" : "16px 0 0 16px",
            }}>
                <Link to="/">
                    <ArrowBack className={classes.arrowBack} />
                </Link>
                {
                    !isMobile && <motion.div
                        ref={authContentRef}
                        className={classes.authContent}
                        animate={{
                            x: calculateDistance(authContentRef.current?.clientWidth),

                        }}
                        transition={{
                            duration: 0.4,
                            type: "spring",
                            stiffness: 70,
                            damping: 15,
                        }}>


                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isLogin ? "login-header" : "signup-header"}
                                variants={fadeSlide}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className={classes.logo}>
                                    <img src={logo} alt="treetop logo" />
                                </div>
                                <h1>{isLogin ? "Let's Get Started" : "Welcome back"}</h1>
                                <p>
                                    {isLogin
                                        ? "Enter your personal details, and journey with us."
                                        : "Let's keep you connected, please login with your details."}
                                </p>
                                <button onClick={toggleAuthMode}>
                                    {isLogin ? "Sign Up" : "Sign In"}
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                }
                <motion.div
                    ref={authFormRef}
                    className={classes.authForm}

                    animate={{
                        x: -calculateDistance(authFormRef.current?.clientWidth),
                    }}
                    transition={{
                        duration: 0.4,
                        type: "spring",
                        stiffness: 70,
                        damping: 15,
                    }}>
                    <div className={classes.formContent}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isLogin ? "login-form" : "signup-form"}
                                variants={fadeSlide}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <h2>{isLogin ? "Sign in to Treetop" : "Create An Account"}</h2>
                                <form>
                                    {!isLogin && (
                                        <Input icon="fa fa-circle-user"
                                         placeholder={selectedOption=="employee" ? "Full Name": "Company Name"} />
                                    )}
                                    <Input icon="fa fa-envelope" placeholder="Email" />
                                    <Input icon="fa fa-lock" placeholder="Password" isPassword={true} />
                                    {!isLogin && (
                                        <Input icon="fa fa-lock" placeholder="Confirm Password" isPassword={true} />
                                    )}

                                    {!isLogin && (
                                        <div className={classes.userType}>
                                            {options.map((option) => (
                                                <label key={option}>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedOption === option}
                                                        onChange={() => setSelectedOption(option)}
                                                        name="user"
                                                    />
                                                    {option}
                                                </label>
                                            ))}
                                        </div>
                                    )}

                                    {isLogin && (
                                        <div className={classes.forgotPassword}>
                                            Forgot Your Password?
                                        </div>
                                    )}

                                    <button type="submit" className={classes.submitButton}>
                                        {isLogin ? "Sign In" : "Sign Up"}
                                    </button>
                                </form>
                            </motion.div>
                            {
                                isMobile && <p className={classes.toggle} onClick={toggleAuthMode}>{isLogin ? "Create an account" : "login instead"}</p>
                            }

                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Auth;
