const arg = process.argv
const { Pool, Query } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'

});

pool.query(`
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM assistance_requests
  JOIN teachers ON teachers.id = teacher_id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE '%${arg[2] || 'JUL02'}%'
  ORDER BY cohort;
  `)
  .then(res => {
    console.log('connected')
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`);
    })
  })
  .catch(err => console.error('query error', err.stack));