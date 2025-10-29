import { ApplicationCard } from "../../../shared/components/application-card/ApplicationCard"
import { applications } from "../../../shared/data/applications"
import classes from "./manage-applications.module.scss";
import { useLocation, useNavigate } from "react-router";
const ManageApplications = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  function routeToDetailsPage(id: string) {
      const route = location.pathname;
      navigate(`${route}/${id}`);
  }

  return (
    
    <div className={classes.applicationList}>
      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          application={application}
          onClick={()=> routeToDetailsPage(application.id)}
        />
      ))}
    </div>
  )
}

export default ManageApplications