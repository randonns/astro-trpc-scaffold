CREATE TABLE depts (
  id         SERIAL,
  name       VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id         SERIAL,
  name       VARCHAR(100) NOT NULL,
  age        INTEGER NOT NULL,
  dept_id    INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (dept_id) REFERENCES depts (id) ON UPDATE CASCADE ON DELETE CASCADE
);
