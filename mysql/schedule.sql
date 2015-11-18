DROP TABLE schedule;
CREATE TABLE schedule
  (
    ID       INT NOT NULL AUTO_INCREMENT,
    MovieID  INT NOT NULL ,
    ShowDate DATE NOT NULL,
    PRIMARY KEY(ID),
    FOREIGN KEY(MovieID) REFERENCES movies(ID)
  );