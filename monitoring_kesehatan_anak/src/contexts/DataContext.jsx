import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// Helper functions untuk localStorage
const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

const loadFromLocalStorage = (key, defaultValue = []) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return defaultValue;
  }
};

export const DataProvider = ({ children }) => {
  // Load data dari localStorage saat pertama kali
  const [students, setStudents] = useState(() => 
    loadFromLocalStorage('omka_students', [])
  );
  const [parents, setParents] = useState(() => 
    loadFromLocalStorage('omka_parents', [])
  );
  const [healthRecords, setHealthRecords] = useState(() => 
    loadFromLocalStorage('omka_healthRecords', [])
  );
  const [doctors, setDoctors] = useState(() => 
    loadFromLocalStorage('omka_doctors', [])
  );

  // Save ke localStorage setiap kali data berubah
  useEffect(() => {
    saveToLocalStorage('omka_students', students);
  }, [students]);

  useEffect(() => {
    saveToLocalStorage('omka_parents', parents);
  }, [parents]);

  useEffect(() => {
    saveToLocalStorage('omka_healthRecords', healthRecords);
  }, [healthRecords]);

  useEffect(() => {
    saveToLocalStorage('omka_doctors', doctors);
  }, [doctors]);

  const addStudent = (student) => {
    setStudents(prev => [...prev, student]);
  };

  const addParent = (parent) => {
    setParents(prev => [...prev, parent]);
  };

  const addHealthRecord = (record) => {
    setHealthRecords(prev => [...prev, record]);
  };

  const addDoctor = (doctor) => {
    setDoctors(prev => [...prev, doctor]);
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents(prev => prev.map(student => 
      student.id === id ? updatedStudent : student
    ));
  };

  const updateParent = (id, updatedParent) => {
    setParents(prev => prev.map(parent => 
      parent.id === id ? updatedParent : parent
    ));
  };

  const updateHealthRecord = (id, updatedRecord) => {
    setHealthRecords(prev => prev.map(record => 
      record.id === id ? updatedRecord : record
    ));
  };

  const updateDoctor = (id, updatedDoctor) => {
    setDoctors(prev => prev.map(doctor => 
      doctor.id === id ? updatedDoctor : doctor
    ));
  };

  const deleteStudent = (id) => {
    setStudents(prev => prev.filter(student => student.id !== id));
  };

  const deleteParent = (id) => {
    setParents(prev => prev.filter(parent => parent.id !== id));
  };

  const deleteHealthRecord = (id) => {
    setHealthRecords(prev => prev.filter(record => record.id !== id));
  };

  const deleteDoctor = (id) => {
    setDoctors(prev => prev.filter(doctor => doctor.id !== id));
  };

  const value = {
    students,
    parents,
    healthRecords,
    doctors,
    addStudent,
    addParent,
    addHealthRecord,
    addDoctor,
    updateStudent,
    updateParent,
    updateHealthRecord,
    updateDoctor,
    deleteStudent,
    deleteParent,
    deleteHealthRecord,
    deleteDoctor,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
