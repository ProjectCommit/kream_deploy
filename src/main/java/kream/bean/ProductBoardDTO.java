package kream.bean;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Setter
@Getter
public class ProductBoardDTO {
    private int productId;
    private int boardId;
    private int parentBoardId;
    private int response;
    private String boardTitle;
    private String boardContent;
    private String nickname;
    private String security;
    private Date boardCreatedAt;
}