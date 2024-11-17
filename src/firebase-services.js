// firebase-services.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, push, update, remove } from "firebase/database";
import { ref, update, remove, onValue } from 'firebase/database';
import { database } from '../firebase.js'; // your existing firebase config

const firebaseConfig = {
  apiKey: "AIzaSyAJ-cbXb-aiVmon3Dhfk_qvI3bahm6kVbU",
  authDomain: "portfolio-website-elshera.firebaseapp.com",
  databaseURL: "https://portfolio-website-elshera-default-rtdb.firebaseio.com",
  projectId: "portfolio-website-elshera",
  storageBucket: "portfolio-website-elshera.firebasestorage.app",
  messagingSenderId: "224021338420",
  appId: "1:224021338420:web:4fd78512dfdb3ad03fad61",
  measurementId: "G-FVFE5B8BNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Projects
export const addProject = async (project) => {
  try {
    const projectsRef = ref(database, 'projects');
    const newProjectRef = push(projectsRef);
    await set(newProjectRef, project);
    return newProjectRef.key;
  } catch (error) {
    console.error("Error adding project: ", error);
    throw error;
  }
};

export const getProjects = async () => {
  try {
    const projectsRef = ref(database, 'projects');
    const snapshot = await get(projectsRef);
    const projects = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        projects.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
    }
    return projects;
  } catch (error) {
    console.error("Error getting projects: ", error);
    throw error;
  }
};

// Experiences
export const addExperience = async (experience) => {
  try {
    const experiencesRef = ref(database, 'experiences');
    const newExperienceRef = push(experiencesRef);
    await set(newExperienceRef, experience);
    return newExperienceRef.key;
  } catch (error) {
    console.error("Error adding experience: ", error);
    throw error;
  }
};

export const getExperiences = async () => {
  try {
    const experiencesRef = ref(database, 'experiences');
    const snapshot = await get(experiencesRef);
    const experiences = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        experiences.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
    }
    return experiences;
  } catch (error) {
    console.error("Error getting experiences: ", error);
    throw error;
  }
};

// Education
export const addEducation = async (education) => {
  try {
    const educationRef = ref(database, 'education');
    const newEducationRef = push(educationRef);
    await set(newEducationRef, education);
    return newEducationRef.key;
  } catch (error) {
    console.error("Error adding education: ", error);
    throw error;
  }
};

export const getEducation = async () => {
  try {
    const educationRef = ref(database, 'education');
    const snapshot = await get(educationRef);
    const education = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        education.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
    }
    return education;
  } catch (error) {
    console.error("Error getting education: ", error);
    throw error;
  }
};

// Certifications
export const addCertification = async (certification) => {
  try {
    const certificationsRef = ref(database, 'certifications');
    const newCertificationRef = push(certificationsRef);
    await set(newCertificationRef, certification);
    return newCertificationRef.key;
  } catch (error) {
    console.error("Error adding certification: ", error);
    throw error;
  }
};

export const getCertifications = async () => {
  try {
    const certificationsRef = ref(database, 'certifications');
    const snapshot = await get(certificationsRef);
    const certifications = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        certifications.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
    }
    return certifications;
  } catch (error) {
    console.error("Error getting certifications: ", error);
    throw error;
  }
};

export const updateProject = async (projectId, updatedData) => {
    try {
      const projectRef = ref(database, `projects/${projectId}`);
      await update(projectRef, updatedData);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };
  
  // Delete function
  export const deleteProject = async (projectId) => {
    try {
      const projectRef = ref(database, `projects/${projectId}`);
      await remove(projectRef);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };