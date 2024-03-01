INSERT INTO depts (id, name, created_at) VALUES
  (1, '기획팀', now()),
  (2, '개발팀', now()),
  (3, '디자인팀', now()),
  (4, '운영팀', now()),
  (5, '영업팀', now());

INSERT INTO users (name, age, dept_id, created_at) VALUES
  ('홍길동', 22, 1, now()),
  ('홍인형', 28, 2, now()),
  ('홍상직', 46, 4, now()),
  ('홍징', 71, 5, now());
