DROP TABLE film;
CREATE TABLE film
  (
    id       VARCHAR(100) NOT NULL,
    title    VARCHAR(35) NOT NULL,
    duration INT NOT NULL,
    price FLOAT,
    image VARCHAR(100) NOT NULL,
    premiere DATE,
    genres    VARCHAR(20) NOT NULL,
    description MEDIUMTEXT NOT NULL,
    actors VARCHAR(1000) NOT NULL,
    director VARCHAR(100) NOT NULL,
    YouTube VARCHAR(200) NOT NULL,
    PRIMARY KEY(ID)
     );
