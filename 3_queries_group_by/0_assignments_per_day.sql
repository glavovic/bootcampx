SELECT day, count(day) as total_assignments
from assignments
GROUP BY DAY 
order by day