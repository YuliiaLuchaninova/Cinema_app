DROP TABLE film;
CREATE TABLE film
  (
    id       VARCHAR(100) NOT NULL,
    title    VARCHAR(100) NOT NULL,
    duration INT NOT NULL,
    price FLOAT,
    image VARCHAR(100) NOT NULL,
    premiere DATETIME,
    genres    VARCHAR(20) NOT NULL,
    description MEDIUMTEXT NOT NULL,
    actors VARCHAR(1000) NOT NULL,
    director VARCHAR(100) NOT NULL,
    YouTube VARCHAR(200) NOT NULL,
    enddate DATETIME,
    time1 VARCHAR(10) NOT NULL,
    time2 VARCHAR(10) NOT NULL,
    time3 VARCHAR(10) NOT NULL,
    PRIMARY KEY(ID)
     );
