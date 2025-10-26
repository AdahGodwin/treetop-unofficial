import UsersIcon from "@/assets/icons/users-2.svg?react";
import UserIcon from "@/assets/icons/user-filled.svg?react";
import FileIcon from "@/assets/icons/file.svg?react";
import BookMarkIcon from "@/assets/icons/bookmark-filled.svg?react";
import Logout from "@/assets/icons/logout.svg?react";
import ApplicationIcon from "@/assets/icons/applications.svg?react";
import AddIcon from "@/assets/icons/add.svg?react";
export const navConfig = {
  employee: [
    {
      name: "Profile Settings",
      icon: UserIcon,
      route: "employee/profile",
    },
    {
      name: "My Saved Jobs",
      icon: BookMarkIcon,
      route: "employee/saved-jobs",
    },
    {
      name: "My Applications",
      icon: ApplicationIcon,
      route: "employee/my-applications",
    },
    {
      name: "Logout",
      icon: Logout,
      route: "/logout",
    },
  ],
  employer: [
    {
      name: "Profile Settings",
      icon: UserIcon,
      route: "employer/profile",
    },
    {
      name: "My Posted Jobs",
      icon: AddIcon,
      route: "employer/jobs-posted",
    },
    {
      name: "Logout",
      icon: Logout,
      route: "/logout",
    },
  ],
  admin: [
    {
      name: "Manage Job Posts",
      icon: UserIcon,
      route: "admin/manage-job-posts",
    },
    {
      name: "Manage Job Seekers",
      icon: UsersIcon,
      route: "admin/manage-job-seekers",
    },
    {
      name: "Manage Application",
      icon: FileIcon,
      route: "admin/all-applications",
    },
   
    {
      name: "Logout",
      icon: Logout,
      route: "/logout",
    },
  ],
};
