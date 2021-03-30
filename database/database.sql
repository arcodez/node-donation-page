CREATE DATABASE donationpage;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
    ('abel', 'abel@gmail.com'),
    ('jesus', 'jesus@gmail.com');