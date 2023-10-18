CREATE TABLE orders (
    orderId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    productId INT NOT NULL,
    parentId INT,
    email VARCHAR(255) NOT NULL,
    productColor VARCHAR(45) NOT NULL,
    size VARCHAR(45) NOT NULL,
    stock INT NOT NULL,
    price INT NOT NULL,  -- 여기를 INT로 변경
    phone VARCHAR(255) NOT NULL,
    quickOrder TINYINT NOT NULL,
    address VARCHAR(255) NOT NULL,
    address2 VARCHAR(255) NOT NULL,
    zipcode VARCHAR(255),
    orderState TINYINT DEFAULT 1,
    receiverName VARCHAR(45) NOT NULL,
    receiverPhone VARCHAR(45) NOT NULL,
    orderDate DATETIME DEFAULT CURRENT_TIMESTAMP
);



테이블 ERD 주요변경사항
*option => color, stock, size 로 분화
*orderId 를 Auto Increment로 변경
*productId 를 not null로 변경
*reciverName, reciverPhone =>recieverName, recieverPhone으로 오타수정

특이사항:
amount가 뭐였는지 모르겠음.