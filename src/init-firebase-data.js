// init-firebase-data.js
import { 
    addProject, 
    addExperience, 
    addEducation, 
    addCertification 
  } from './firebase-services';
  import { PROJECTS, EXPERIENCES, EDUCATION, CERTIFICATIONS } from './constants/content';
  
  export const initializeFirebaseData = async () => {
    try {
      // Initialize Projects
      for (const project of PROJECTS) {
        await addProject(project);
      }
  
      // Initialize Experiences
      for (const experience of EXPERIENCES) {
        await addExperience(experience);
      }
  
      // Initialize Education
      for (const edu of EDUCATION) {
        await addEducation(edu);
      }
  
      // Initialize Certifications
      for (const cert of CERTIFICATIONS) {
        await addCertification(cert);
      }
  
      console.log('Data initialization complete');
    } catch (error) {
      console.error('Error initializing data: ', error);
    }
  };