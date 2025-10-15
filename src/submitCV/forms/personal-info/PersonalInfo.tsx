import Input from '../../../components/input/Input';
import classes from './personal-info.module.css';
const PersonalInfo = () => {
  return (
    <form className={classes.container}>
            <div className={classes.formRow}>
                <Input placeholder='Employment Status' />
            </div>
            <div className={classes.formRow}>
                <Input placeholder='Date of birth' />
                <Input placeholder='NYSC Status' />
            </div>
             <div className={classes.formRow}>
                <Input placeholder='Highest level of education' />
            </div>
             <div className={classes.formRow}>
                <Input placeholder='Industry' />
            </div>
        </form>
  )
}

export default PersonalInfo
