package kream.bean;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AdminProductDTO {
	//ERD1.0과 다른부분
	//option=>필요없다고 판단하여 삭제함. slack - 일반에 기록공유되어있음.
	//product=>productName
	
	//JSP에서 입력받지 않는 DTO 변수:hit, createdDate,productId
	
	private int productId; // 자동 생성되는 값
    private String category;
    private String category2;
    private String gender;
    private String brand;
    private String productName; //product=>productName으로 변경.
    private String productExplain;
    private String productDetail;
    @NumberFormat(pattern = "#,###")
    private int price;
    private String stock;
    private String productColor;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate releaseDate;
    private String size;
    private int hit; // 자동 생성되는 값
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdDate; //자동 생성되는 값
    //이미지를 최대 10장까지 저장할 수 있고, 첫 번째 이미지는 썸네일이미지로 사용하겠다는 의도로 테이블 구조를 아래와 같이 변경.
    private String productImg1;
    private String productImg2;
    private String productImg3;
    private String productImg4;
    private String productImg5;
    private String productImg6;
    private String productImg7;
    private String productImg8;
    private String productImg9;
    private String productImg10;
}
