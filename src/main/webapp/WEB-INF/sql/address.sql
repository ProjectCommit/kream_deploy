CREATE TABLE address (
	addressId INT PRIMARY KEY AUTO_INCREMENT,
	email	varchar(45)	NOT NULL,
	addressName	varchar(45)	NULL,
    phone varchar(45) null,
	address	 varchar(200)	NULL,
	address2 varchar(200)	NULL,
	zipcode	varchar(45)	NULL,
    isDefault boolean NOT NULL DEFAULT false
);