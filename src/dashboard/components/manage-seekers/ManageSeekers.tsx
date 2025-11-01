import { useLocation } from "react-router";
import { EmployeeCard } from "../../../shared/components/employee-card/EmployeeCard";
import { employees } from "../../../shared/data/employee";
import classes from "./manage-seekers.module.scss";
import { useNavigate } from "react-router";

export const ManageSeekers = () => {
  const location = useLocation();
  const navigate = useNavigate();
  function setEmployeeId(id: string) {
      const route = location.pathname;
      navigate(`${route}/${id}`);
  }
  return (
    <div className={classes.employeeList}>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onClick={() => setEmployeeId(employee.id)}
        />
      ))}
    </div>
  )
}
