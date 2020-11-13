USE property_agentsDB;

INSERT INTO companies (name, createdAt, updatedAt)
VALUES ("Company1", "1970-01-01 00:00:01", "1970-01-01 00:00:01");
VALUES ("Company2", "1970-01-01 00:00:02", "1970-01-01 00:00:02");
VALUES ("Company3", "1970-01-01 00:00:03", "1970-01-01 00:00:03");

INSERT INTO agents (first_name, last_name, email, password, createdAt, updatedAt, CompanyId)
VALUES ("Jim", "Miller", "1sample@email.com", "password", "1970-01-01 00:00:01", "1970-01-01 00:00:01", 1);
VALUES ("Jim", "Halpert", "2sample@email.com", "password", "1970-01-01 00:00:02", "1970-01-01 00:00:02", 2);
VALUES ("Pam", "Beesly", "3sample@email.com", "password", "1970-01-01 00:00:03", "1970-01-01 00:00:03", 3);

INSERT INTO clients (first_name, last_name, email, phone, gender, wants_follow_up, last_follow_up, createdAt, updatedAt, AgentId, CompanyId)
VALUES ("John", "Smith", "sample2@email.com", "909-500-1234", "male", true, "11/10/2020", "1970-01-01 00:00:01", "1970-01-01 00:00:01", 1, 1);
VALUES ("John", "Doe", "sample3@email.com", "909-500-1235", "male", true, "11/10/2020", "1970-01-01 00:00:01", "1970-01-01 00:00:01", 1, 1 );
VALUES ("Jane", "Smith", "sample4@email.com", "909-500-1236", "female", true, "11/10/2020", "1970-01-01 00:00:01", "1970-01-01 00:00:01", 1, 1);
VALUES ("Jane", "Doe", "sample5@email.com", "909-500-1237", "female", true, "11/10/2020", "1970-01-01 00:00:01", "1970-01-01 00:00:01", 1, 1);
VALUES ("Dwight", "Schrute", "sample6@email.com", "909-500-1238", "male", false, "11/10/2020", "1970-01-01 00:00:01", "1970-01-01 00:00:01", 1, 1);
VALUES ("Amgela", "Martin", "sample7@email.com", "909-500-1239", "female", false, "11/10/2020", "1970-01-01 00:00:01", "1970-01-01 00:00:01", 1, 1);

INSERT INTO comments (title, comment, author, createdAt, updatedAt, ClientId)
VALUES ("sample title", "sample comment", "Jim Miller", "1970-01-01 00:00:01", "1970-01-01 00:00:01", 1);
VALUES ("sample title2", "sample comment2", "Jim Halpert", "1970-01-01 00:00:02", "1970-01-01 00:00:02", 2);
VALUES ("sample title3", "sample comment3", "Pam Beesly", "1970-01-01 00:00:03", "1970-01-01 00:00:03", 3);