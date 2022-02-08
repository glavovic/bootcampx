SELECT teachers.name as teacher, students.name AS student, assignments.name as assignment, assistance_requests.completed_at - assistance_requests.started_at AS duration
FROM assistance_requests
JOIN students on students.id = student_id
JOIN assignments on assignments.id = assignment_id
JOIN teachers ON teachers.id = teacher_id
ORDER BY duration