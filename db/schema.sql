CREATE DATABASE IF NOT EXISTS property_agentsDB;

USE property_agentsDB;

CREATE TABLE agents (
    id INT (10) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (40) NOT NULL,
    last_name VARCHAR (40) NOT NULL,
    email VARCHAR (100) NOT NULL,
    user_name VARCHAR (100) NOT NULL,
    password VARCHAR (100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE clients (
    id INT (10) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (40) NOT NULL,
    last_name VARCHAR (40) NOT NULL,
    gender VARCHAR (20) NOT NULL,
    email VARCHAR (100),
    phone INT (20),
    wants_follow_up BOOLEAN NOT NULL DEFAULT true,
    last_follow_up VARCHAR (20),
    comments VARCHAR (255),
    agent_id INT (10),
    PRIMARY KEY (id),
    FOREIGN KEY (agent_id) REFERENCES agents (id)
);

CREATE TABLE sources (
    id (10) AUTO_INCREMENT NOT NULL,
    source_name VARCHAR (100) NOT NULL
    client_id INT (10) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY client_id REFERENCES clients (id)
)