import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import classes from './skills.module.css';

const Skills = () => {
    return (
        <form className={classes.container}>
            <div className={classes.formRow}>
                <Input placeholder='Skill name' />
            </div>
            <div className={classes.formRow}>
                <Input placeholder='Years of experience' />
            </div>
            <Button bordered={true}>Add more Skills</Button>
        </form>
    )
}

export default Skills
