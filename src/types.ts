export type UserRole = 'student' | 'faculty' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  studentId?: string;
  facultyId?: string;
  department?: string;
  yearLevel?: string;
  semester?: string;
  avatar?: string;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  units: number;
  schedule: string;
  room: string;
  facultyName: string;
  enrolledCount: number;
  capacity: number;
}

export interface GradeItem {
  id: string;
  courseCode: string;
  courseTitle: string;
  prelim?: number;
  midterm?: number;
  semiFinal?: number;
  finalGrade?: number;
  remarks: 'Passed' | 'Failed' | 'Incomplete' | 'Pending';
  units: number;
}

export interface AttendanceRecord {
  id: string;
  date: string;
  courseCode: string;
  status: 'Present' | 'Absent' | 'Late' | 'Excused';
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: 'General' | 'Academic' | 'Events' | 'Urgent';
}
