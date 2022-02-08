SELECT assignments.day as day, count(assignments.day) as number_of_assignments, sum(assignments.duration) as duration
FROM assignments
GROUP BY DAY
ORDER BY DAY