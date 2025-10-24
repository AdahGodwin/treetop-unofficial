import "./App.scss";
import JobsListing from "./jobs-listing/JobsListing";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Auth from "./auth/Auth.tsx";
import MainNavigation from "./main-navigation/MainNavigation.tsx";
import SubmitCV from "./submitCV/SubmitCV.tsx";
import JobDetails from "./job-details/JobDetails.tsx";
import { jobs } from "./shared/data/jobs.ts";
import JobApplication from "./job-application/JobApplication.tsx";
import JobPosting from "./job-posting/JobPosting.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";
import ManageJobs from "./dashboard/components/manage-jobs/ManageJobs.tsx";
import LandingPage from "./landing-page/LandingPage.tsx";

// import JobApplication from './job-application/JobApplication';
const router = createBrowserRouter([
  {
    path: "/auth",
    Component: Auth,
  },
  {
    path: "/",
    Component: MainNavigation,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "jobs",
        Component: JobsListing,
      },
      {
        path: "submit-cv",
        Component: SubmitCV,
      },
      {
        path: "apply-for-job",
        Component: JobApplication,
      },
      {
        path: "post-job",
        Component: JobPosting,
      },
      {
        path: "/dashboard",
        Component: Dashboard,
        children: [
          {
            "path": "manage-jobs",
            Component: ManageJobs
          }
        ],
      },
      {
        path: "jobs/:jobId",
        Component: JobDetails,
        loader: async ({ params }) => {
          // params are available in loaders/actions
          const job = jobs.find((job) => job.id === params.jobId);
          return { job };
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
