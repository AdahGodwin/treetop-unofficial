import { EmployeeCard } from "../../../shared/components/employee-card/EmployeeCard";
import { employees } from "../../../shared/data/employee";
import classes from "./manage-seekers.module.scss";

export const ManageSeekers = () => {
  return (
    <div className={classes.employeeList}>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  )
}
