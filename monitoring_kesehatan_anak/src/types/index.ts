export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'teacher' | 'doctor';
}

export interface Student {
  id: string;
  name: string;
  nis: string;
  class: string;
  age: number;
  parentName: string;
  parentPhone: string;
  birthDate?: string;
  gender?: string;
  nik?: string;
  noKK?: string;
  fatherName?: string;
  motherName?: string;
  address?: string;
}

export interface Parent {
  id: string;
  name: string;
  studentName: string;
  phone: string;
  email?: string;
  nik?: string;
  noKK?: string;
  address?: string;
}

export interface HealthRecord {
  id: string;
  studentId: string;
  studentName: string;
  date: string;
  parentName: string;
  complaint: string;
  weight?: string;
  height?: string;
  armSpan?: string;
  headCircumference?: string;
  dentalHealth?: string;
  eyeHealth?: string;
  doctor?: string;
  patientHistory?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  phone: string;
  schedule: string;
  doctorId?: string;
  clinicOrigin?: string;
}

export interface DashboardStats {
  studentsCount: number;
  symptomsDetected: number;
  doctorsRecommended: number;
  feedbackCount: number;
}