DROP TABLE users;
CREATE TABLE users
  (
    ID        INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(ID),
    RoleID    INT ,
    FOREIGN KEY(RoleID) REFERENCES roles(ID),
    Password  VARCHAR(16) NOT NULL,
    FirstName VARCHAR(20) NOT NULL ,
    LastName  VARCHAR(20),
    mail     VARCHAR(40) NOT NULL
      )
      ENGINE=INNODB;