CREATE TABLE productBoard (
    productId INT NOT NULL,
    boardId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    boardTitle VARCHAR(45) default NULL,
    nickname VARCHAR(40) NOT NULL,
    parentBoardId INT,
    boardContent VARCHAR(255),
    security INT NOT NULL,
    response INT DEFAULT 0,
    boardCreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parentBoardId) REFERENCES productBoard(boardId)
);