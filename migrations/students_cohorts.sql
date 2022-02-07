CREATE TABLE students (
  id serial primary key NOT NULL,
  name VARCHAR(255) NOT NULL,
  age  INT,
  email VARCHAR(255),
  phone VARCHAR(32),
  github VARCHAR(255),
  start_date DATE,
  end_date DATE,
  cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE
);

CREATE TABLE cohorts (
  id serial primary key,
  name VARCHAR(255) NOT NULL,
  start_date DATE,
  end_date DATE
);



