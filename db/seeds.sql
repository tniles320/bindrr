USE property_agentsDB;

INSERT INTO companies (name, createdAt, updatedAt)
VALUES ("Company", "1970-01-01 00:00:01", "1970-01-01 00:00:01");

INSERT INTO agents (first_name, last_name, email, password, createdAt, updatedAt, CompanyId)
VALUES ("Jim", "Miller", "sample@email.com", "password", "1970-01-01 00:00:01", "1970-01-01 00:00:01", 1);

INSERT INTO clients (first_name, last_name, email, phone, gender, wants_follow_up, last_follow_up, createdAt, updatedAt, AgentId, CompanyId)
VALUES ("John", "Smith", "sample2@email.com", "909-500-1234", "male", true, "11/10/2020", "1970-01-01 00:00:01", "1970-01-01 00:00:01", 1, 1);

INSERT INTO comments (title, comment, author, createdAt, updatedAt, ClientId)
VALUES ("sample title", "sample comment", "Jim Miller", "1970-01-01 00:00:01", "1970-01-01 00:00:01", 1);