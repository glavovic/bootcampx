SELECT day, count(day) as total_assignments
from assignments
GROUP BY day
HAVING count(day) > 10
ORDER by day

