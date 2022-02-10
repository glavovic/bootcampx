
const { Pool, Query } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'

});

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON student_id = students.id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
ORDER BY cohort;
`;
const cohortName = process.argv[2]
const values = [`%${cohortName}%`]

pool.query(queryString, values)
  .then(res => {
    console.log('connected')
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`);
    })
  })
  .catch(err => console.error('query error', err.stack));