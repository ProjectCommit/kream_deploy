package kream.bean;

import java.time.LocalDateTime;

import org.springframework.stereotype.Repository;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CommentBoardDTO {
	private int commentId;
    private int productId;
    private String nickname;
    private String comment;
    private LocalDateTime writedate;
    private int subComment;
}
