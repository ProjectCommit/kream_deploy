CREATE TABLE user (
    email VARCHAR(255) PRIMARY KEY,
    pwd VARCHAR(255) NOT NULL,
    phone INT,
    shoeSize INT,
    userName VARCHAR(255),
    address VARCHAR(255),
    address2 VARCHAR(255),
    zipcode VARCHAR(255),
    createdDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    releaseDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    profileName VARCHAR(255),
    introduce TEXT,
    nickname VARCHAR(255),
    admin INT
);

ALTER TABLE user
ADD CONSTRAINT unique_nickname UNIQUE (nickname);

-- ex 예시

INSERT INTO user (email, pwd, phone, shoeSize, userName, address, address2, zipcode, profileName, introduce, nickname, admin)
VALUES ('2', '2', 1, 10, 'JohnDoe', '123 Main St', 'Apt 4B', '12345', 'John', 'Hello, I am John.', 'johndoe123', 2);
commit;