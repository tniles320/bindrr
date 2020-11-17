USE property_agentsDB;

INSERT INTO companies (name, createdAt, updatedAt)
VALUES 	("Company1", "1970-01-01 00:00:01", "1970-01-01 00:00:01"),
		("Company2", "1970-01-01 00:00:02", "1970-01-01 00:00:02"),
		("Company3", "1970-01-01 00:00:03", "1970-01-01 00:00:03");

-- INSERT INTO agents (first_name, last_name, email, password, createdAt, updatedAt, CompanyId)
-- VALUES 	("Jim", "Miller", "1sample@email.com", "password", "1970-01-01 00:00:01", "1970-01-01 00:00:01", 1),
-- 		("Jim", "Halpert", "2sample@email.com", "password", "1970-01-01 00:00:02", "1970-01-01 00:00:02", 2),
-- 		("Pam", "Beesly", "3sample@email.com", "password", "1970-01-01 00:00:03", "1970-01-01 00:00:03", 3);