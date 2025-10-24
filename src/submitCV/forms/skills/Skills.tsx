import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/Input';
import classes from './skills.module.scss';

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
