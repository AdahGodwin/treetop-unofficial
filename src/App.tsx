import './App.css'
import JobsListing from './jobs-listing/JobsListing';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Auth from './auth/Auth.tsx';
import MainNavigation from './main-navigation/MainNavigation.tsx';
import SubmitCV from './submitCV/SubmitCV.tsx';
import ApplicationPreview from './application-preview/ApplicationPreview.tsx';
import JobDetails from './components/job-details/JobDetails.tsx';
import { jobs } from './data/jobs.ts';

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
        path: "jobs",
        Component: JobsListing
      },
      {
        path: "submit-cv",
        Component: SubmitCV,
      },
      {
        path: "preview",
        Component: ApplicationPreview,
      },
      {
        path: "jobs/:jobId",
        Component: JobDetails,
        loader: async ({ params }) => {
    // params are available in loaders/actions
    const job =  jobs.find((job)=> job.id === params.jobId);
    return { job };
  },
      },
    ]
  }
]);

function App() {

  return <RouterProvider router={router} />
}

export default App;
