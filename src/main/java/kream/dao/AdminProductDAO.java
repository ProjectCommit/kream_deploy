package kream.dao;

import java.util.List;
import java.util.Map;

import kream.bean.AdminProductDTO;
import kream.bean.AdminProductIdsDTO;
import kream.bean.ProductBoardDTO;

public interface AdminProductDAO {
	public void upload(AdminProductDTO adminProductDTO, List<String> fileNameList);

	public List<AdminProductDTO> load();

	public void edit(AdminProductDTO adminProductDTO);

	public void delete(AdminProductDTO adminProductDTO);

	public void selectDelete(AdminProductIdsDTO adminProductIdsDTO);

	public List<ProductBoardDTO> boardLoad();

	public void boardDelete(ProductBoardDTO productBoardDTO);

	public List<ProductBoardDTO> boardLoadYetReply();

	public List<ProductBoardDTO> boardLoadAllReply();

	public List<ProductBoardDTO> boardLoadCompleteReply();

	public String checkComment();

	public List<ProductBoardDTO> replyCheck(String boardId);

	public void replyEdit(Map<String, Object> productMap);

}
