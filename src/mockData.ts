import { Course, GradeItem, AttendanceRecord, Announcement, User } from './types';

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Juan Dela Cruz',
    email: 'juan.delacruz@tcc.edu.ph',
    role: 'student',
    studentId: 'TCC-2026-00124',
    department: 'College of Computer Studies',
    yearLevel: '3rd Year',
    semester: '1st Semester, AY 2025-2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
  },
  {
    id: 'u2',
    name: 'Prof. Maria Santos',
    email: 'maria.santos@tcc.edu.ph',
    role: 'faculty',
    facultyId: 'FAC-2018-042',
    department: 'College of Computer Studies',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150'
  },
  {
    id: 'u3',
    name: 'Admin Director',
    email: 'admin@tcc.edu.ph',
    role: 'admin',
    department: 'Registrar & Administration',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  }
];

export const MOCK_COURSES: Course[] = [
  { id: 'c1', code: 'IT 311', title: 'Advanced Web Development & Mobile Apps', units: 3, schedule: 'Mon/Wed 09:00 AM - 12:00 PM', room: 'Lab 304', facultyName: 'Prof. Maria Santos', enrolledCount: 35, capacity: 40 },
  { id: 'c2', code: 'IT 312', title: 'Information Assurance & Security', units: 3, schedule: 'Tue/Thu 01:00 PM - 03:00 PM', room: 'Room 202', facultyName: 'Dr. Roberto Gomez', enrolledCount: 38, capacity: 40 },
  { id: 'c3', code: 'GE 9', title: 'The Life and Works of Rizal', units: 3, schedule: 'Fri 08:00 AM - 11:00 AM', room: 'Auditorium A', facultyName: 'Prof. Elena Reyes', enrolledCount: 45, capacity: 50 },
  { id: 'c4', code: 'IT 313', title: 'Systems Integration and Architecture', units: 3, schedule: 'Mon/Wed 01:30 PM - 03:30 PM', room: 'Lab 305', facultyName: 'Engr. Carlos Mendoza', enrolledCount: 32, capacity: 40 },
  { id: 'c5', code: 'IT 314', title: 'CapStone Project and Research 1', units: 3, schedule: 'Sat 09:00 AM - 12:00 PM', room: 'Lab 301', facultyName: 'Prof. Maria Santos', enrolledCount: 30, capacity: 35 }
];

export const MOCK_GRADES: GradeItem[] = [
  { id: 'g1', courseCode: 'IT 311', courseTitle: 'Advanced Web Development & Mobile Apps', prelim: 1.5, midterm: 1.75, semiFinal: 1.5, finalGrade: 1.6, remarks: 'Passed', units: 3 },
  { id: 'g2', courseCode: 'IT 312', courseTitle: 'Information Assurance & Security', prelim: 1.75, midterm: 1.5, semiFinal: 1.75, finalGrade: 1.65, remarks: 'Passed', units: 3 },
  { id: 'g3', courseCode: 'GE 9', courseTitle: 'The Life and Works of Rizal', prelim: 1.25, midterm: 1.5, semiFinal: 1.25, finalGrade: 1.3, remarks: 'Passed', units: 3 },
  { id: 'g4', courseCode: 'IT 313', courseTitle: 'Systems Integration and Architecture', prelim: 2.0, midterm: 1.75, semiFinal: 1.75, finalGrade: 1.8, remarks: 'Passed', units: 3 },
  { id: 'g5', courseCode: 'IT 314', courseTitle: 'CapStone Project and Research 1', prelim: 1.25, midterm: 1.25, semiFinal: 1.0, finalGrade: 1.1, remarks: 'Passed', units: 3 }
];

export const MOCK_ATTENDANCE: AttendanceRecord[] = [
  { id: 'a1', date: '2026-10-10', courseCode: 'IT 311', status: 'Present' },
  { id: 'a2', date: '2026-10-08', courseCode: 'IT 311', status: 'Present' },
  { id: 'a3', date: '2026-10-07', courseCode: 'IT 312', status: 'Late' },
  { id: 'a4', date: '2026-10-05', courseCode: 'GE 9', status: 'Present' },
  { id: 'a5', date: '2026-10-03', courseCode: 'IT 313', status: 'Present' }
];

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
  { id: 'an1', title: 'Enrollment for 2nd Semester AY 2025-2026 Open', content: 'Online pre-registration and course enlisting is now accessible through the student portal. Please check your curriculum checklist before finalizing.', author: 'Registrar Office', date: '2026-10-12', category: 'Academic' },
  { id: 'an2', title: 'Midterm Examination Schedule Notice', content: 'Midterm examinations will take place from October 26 to October 30, 2026. Ensure all tuition balances are settled to secure examination permits.', author: 'Office of Student Affairs', date: '2026-10-10', category: 'Urgent' },
  { id: 'an3', title: 'TCC Intramurals 2026 Kickoff & Parade', content: 'Join us this coming Friday for the annual Torres Capitol College Intramurals opening ceremony at the TCC Sports Complex.', author: 'Supreme Student Council', date: '2026-10-05', category: 'Events' }
];
