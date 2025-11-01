import classes from "./employee-profile.module.scss";

import LocationIcon from "@/assets/icons/location.svg?react";
import PhoneIcon from "@/assets/icons/phone.svg?react";
import BriefCaseIcon from "@/assets/icons/briefCase.svg?react";
import { WorkExperienceSection } from "./sections/work-experience/WorkExperienceSection";
import { EducationExperienceSection } from "./sections/education/EducationExperienceSection";
import { SkillsSection } from "./sections/skills/skillsSection";
import { CertificateSection } from "./sections/certificate/CertificationSection";
import { BasicInfoSection } from "./sections/basic-info/BasicInfoSection";
import { PersonalInfoSection } from "./sections/personal-info/PersonalInfoSection";
import { demoProfile as profile, resumes } from "../../../shared/data/employeeProfile";
import { ResumeSection } from "./sections/resume/ResumeSection";
import AdminControls from "../../../shared/components/admin-controls/AdminControls";

const EmployeeProfile = () => {
  return (
    <>
    <div className={classes.profileCard}>
        <div className={classes.titleBlock}>
          <h2 className={classes.name}>{profile.fullName}</h2>
          <div className={classes.meta}>
            {profile.jobRole && <span className={classes.metaItem}><BriefCaseIcon />{profile.jobRole}</span>}
            {profile.location && <span className={classes.metaItem}><LocationIcon />{profile.location}</span>}
            {profile.phone && <span className={classes.metaItem}><PhoneIcon />{profile.phone}</span>}
          </div>
        </div>
      <AdminControls />
      <BasicInfoSection summary={profile.summary} />

      <PersonalInfoSection
        employmentStatus={profile.employmentStatus}
        dob={profile.dob}
        educationLevel={profile.educationLevel}
        nyscStatus={profile.nyscStatus}
      />

      <WorkExperienceSection experiences={profile.experiences || []} />

      <EducationExperienceSection educationList={profile.education || []} />

      <SkillsSection skills={profile.skills || []} />

      <CertificateSection certificates={profile.certificates || []} />
    </div>
    <ResumeSection resumes={resumes} />
    </>
  )
}

export default EmployeeProfile