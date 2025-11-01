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
import Blog from "./blog/Blog.tsx";
import { blogs } from "./shared/data/blog.ts";
import BlogDetails from "./blog-details/BlogDetails.tsx";
import Contact from "./contact/Contact.tsx";
import { ManageSeekers } from "./dashboard/components/manage-seekers/ManageSeekers.tsx";
import EmployerProfile from "./dashboard/components/employer-profile/EmployerProfile.tsx";
import EmployeeProfile from "./dashboard/components/employee-profile/EmployeeProfile.tsx";
import SavedJobs from "./dashboard/components/saved-jobs/SavedJobs.tsx";
import ManageApplications from "./dashboard/components/manage-applications/ManageApplications.tsx";
import ApplicationPreview from "./dashboard/components/application-preview/ApplicationPreview.tsx";
import { applications } from "./shared/data/applications.ts";
import { employees } from "./shared/data/employee.ts";

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
        path: "blogs",
        Component: Blog,
      },
      {
        path: "blogs/:blogId",
        Component: BlogDetails,
        loader: async ({ params }) => {
          // params are available in loaders/actions
          const blog = blogs.find((blog) => blog.id === params.blogId);
          return { blog };
        },
      },
      {
        path: "jobs",
        Component: JobsListing,
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
        path: "contact",
        Component: Contact,
      },
      {
        path: "dashboard",
        Component: Dashboard,
        children: [
          {
            path: "admin",
            children: [
              {
                path: "manage-job-posts",
                Component: ManageJobs,
              },
              {
                path: "manage-job-posts/:jobId",
                Component: JobDetails,
                loader: async ({ params }) => {
                  // params are available in loaders/actions
                  const job = jobs.find((job) => job.id === params.jobId);
                  return { job };
                },
              },
              {
                path: "manage-job-seekers",
                Component: ManageSeekers,
              },
              {
                path: "manage-job-seekers/:seekerId",
                Component: EmployeeProfile,
                loader: async ({ params }) => {
                  // params are available in loaders/actions
                  const seeker = employees.find((seeker) => seeker.id === params.seekerId);
                  return { seeker };
                },
              },
              {
                path: "all-applications",
                Component: ManageApplications,
              },
              {
                path: "all-applications/:applicationId",
                Component: ApplicationPreview,
                loader: async ({ params }) => {
                  // params are available in loaders/actions
                  const application = applications.find((application) => application.id === params.applicationId);
                  return { application };
                },
              },
            ],
          },
          {
            path: "employer",
            children: [
              {
                path: "profile",
                Component: EmployerProfile,
              },
              {
                path: "jobs-posted",
                Component: ManageJobs,
              },
              {
                path: "jobs-posted/:jobId",
                Component: JobDetails,
                loader: async ({ params }) => {
                  // params are available in loaders/actions
                  const job = jobs.find((job) => job.id === params.jobId);
                  return { job };
                },
              },
            ],
          },
          {
            path: "employee",
            children: [
              {
                path: "profile",
                Component: EmployeeProfile,
              },
              {
                path: "saved-jobs",
                Component: SavedJobs,
              },
              {
                path: "saved-jobs/:jobId",
                Component: JobDetails,
                loader: async ({ params }) => {
                  // params are available in loaders/actions
                  const job = jobs.find((job) => job.id === params.jobId);
                  return { job };
                },
              },
              {
                path: "my-applications",
                Component: ManageApplications,
              },
              {
                path: "my-applications/:applicationId",
                Component: ApplicationPreview,
                loader: async ({ params }) => {
                  // params are available in loaders/actions
                  const application = applications.find((application) => application.id === params.applicationId);
                  return { application };
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
