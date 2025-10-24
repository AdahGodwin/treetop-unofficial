import classes from './basic-info.module.scss';
import Input from '../../../shared/components/input/Input'

const BasicInfo = () => {
    return (
        <form className={classes.container}>
            <div className={classes.formRow}>
                <Input placeholder='Full Name' />
            </div>
            <div className={classes.formRow}>
                <Input placeholder='Location' />
                <Input placeholder='Contact' />

            </div>
            <textarea name="description" id="descriptions" placeholder='Enter Description'/>
        </form>
    )
}

export default BasicInfo
