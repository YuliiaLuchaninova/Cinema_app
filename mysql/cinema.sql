DROP TABLE schedule;
DROP TABLE movies;
DROP TABLE genres;
DROP TABLE users;
DROP TABLE roles;

CREATE TABLE genres
  (
    ID        INT NOT NULL AUTO_INCREMENT,
    GenreName VARCHAR(35) NOT NULL,
    PRIMARY KEY (ID)
  );

CREATE TABLE Movies
  (
    ID       INT NOT NULL AUTO_INCREMENT,
    Title    VARCHAR(35) NOT NULL,
    Duration TIMESTAMP,
    TicletPrice FLOAT,
    GenreID     INT NOT NULL,
    YoutubeLink VARCHAR(200) NOT NULL,
    Description VARCHAR(1000)NOT NULL,
    PRIMARY KEY(ID),
    FOREIGN KEY(GenreID) REFERENCES genres(ID)
  );
CREATE TABLE schedule
  (
    ID       INT NOT NULL AUTO_INCREMENT,
    MovieID  INT NOT NULL ,
    ShowDate DATE NOT NULL,
    PRIMARY KEY(ID),
    FOREIGN KEY(MovieID) REFERENCES movies(ID)
  );
CREATE TABLE roles
  (
    ID       INT NOT NULL AUTO_INCREMENT,
    RoleName VARCHAR(25) NOT NULL,
    PRIMARY KEY(ID)
  );
CREATE TABLE users
  (
    ID        INT NOT NULL AUTO_INCREMENT,
    Password  VARCHAR(16) NOT NULL,
    RoleID    INT  NOT NULL ,
    FirstName VARCHAR(20) NOT NULL ,
    LastName  VARCHAR(20) NOT NULL,
    Gmail     VARCHAR(40) NOT NULL,
    PRIMARY KEY(ID),
    FOREIGN KEY(RoleID) REFERENCES roles(ID)
  );
