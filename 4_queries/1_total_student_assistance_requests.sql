SELECT students.name , count(assistance_requests.*) as total_assistances
FROM assistance_requests 
JOIN students ON student_id = students.id
WHERE name = 'Elliot Dickinson'
GROUP BY students.name
