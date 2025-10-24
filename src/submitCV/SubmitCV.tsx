import { useState } from 'react';
import classes from './submitcv.module.scss';
import Button from '../shared/components/button/Button';
import Certification from './forms/certification/Certification';
import BasicInfo from './forms/basic-info/BasicInfo';
import PersonalInfo from './forms/personal-info/PersonalInfo';
import WorkExperience from './forms/work-experience/WorkExperience';
import Education from './forms/education/Education';
import Skills from './forms/skills/Skills';
import { AnimatePresence, motion } from 'motion/react';

const SubmitCV = () => {

    const steps: string[] = ["Basic Info", "Personal Info", "Work Experience", "Education", "Skills", "Certification/License"];
    const [selectedStep, setSelectedStep] = useState<string>("Basic Info");

    const forms: Record<string, React.ReactNode> = {
        "Basic Info": <BasicInfo />,
        "Personal Info": <PersonalInfo />,
        "Work Experience": <WorkExperience />,
        "Education": <Education />,
        "Skills": <Skills />,
        "Certification/License": <Certification />
    }

    function handleNext() {
        const currentIndex: number = steps.findIndex((step) => selectedStep === step);
        if (currentIndex != steps.length - 1)
            setSelectedStep(steps[currentIndex + 1]);
    }

    const fade = {
        hidden: { opacity: 0, },
        visible: { opacity: 1, transition: { duration: 0.4 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
    };

    return (
        <div className={classes.container}>
            <div className={classes.heading}>
                <h1>Submit CV</h1>
                <p>Fill in your information as required</p>
            </div>
            <div className={classes.steps} >
                {steps.map((step, index) => (
                    <div className={classes.step} key={index} data-active={selectedStep === step}>
                        {step}
                    </div>
                ))}
            </div>
            <div className={classes.formSection}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={"form-section"}
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {forms[selectedStep]}
                    </motion.div>
                </AnimatePresence>
                <Button onClick={handleNext}>Save and Continue</Button>
            </div>
        </div>
    )

}

export default SubmitCV;
