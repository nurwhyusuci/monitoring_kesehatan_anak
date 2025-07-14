import { Student, Parent, HealthRecord, Doctor, DashboardStats } from '../types';

// Data kosong - semua data akan ditambahkan melalui form
export const dashboardStats: DashboardStats = {
  studentsCount: 0,
  symptomsDetected: 0,
  doctorsRecommended: 0,
  feedbackCount: 0,
};

export const students: Student[] = [];

export const parents: Parent[] = [];

export const healthRecords: HealthRecord[] = [];

export const doctors: Doctor[] = [];

export const parentFeedback: any[] = [];