package kream.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.web.multipart.MultipartFile;

import kream.bean.AdminProductDTO;
import kream.bean.AdminProductIdsDTO;
import kream.bean.ProductBoardDTO;

public interface AdminProductService {

	public void productUpload(AdminProductDTO adminProductDTO,
						List<MultipartFile> list,
						HttpSession session);
	public List<AdminProductDTO> load();
	public void productEdit(AdminProductDTO adminProductDTO, MultipartFile productImg1, MultipartFile productImg2, MultipartFile productImg3, MultipartFile productImg4, MultipartFile productImg5, MultipartFile productImg6, MultipartFile productImg7, MultipartFile productImg8, MultipartFile productImg9, MultipartFile productImg10, String hiddenProductImg1,
			String hiddenProductImg2,
			String hiddenProductImg3,
			String hiddenProductImg4,
			String hiddenProductImg5,
			String hiddenProductImg6,
			String hiddenProductImg7,
			String hiddenProductImg8,
			String hiddenProductImg9,
			String hiddenProductImg10,
			HttpSession session);

	public void delete(AdminProductDTO adminProductDTO);
	public void selectDelete(AdminProductIdsDTO adminProductIdsDTO);
	public List<ProductBoardDTO> boardLoad();
	public void boardDelete(ProductBoardDTO productBoardDTO);
	public List<ProductBoardDTO> boardLoadYetReply();
	public List<ProductBoardDTO> boardLoadAllReply();
	public List<ProductBoardDTO> boardLoadCompleteReply();
	public String checkComment();
	public List<ProductBoardDTO> replyCheck(String boardId);
	public void replyEdit(String boardId, String boardContent);
	

}
