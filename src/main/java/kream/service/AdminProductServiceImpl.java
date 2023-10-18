package kream.service;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import kream.bean.AdminProductDTO;
import kream.bean.AdminProductIdsDTO;
import kream.bean.ProductBoardDTO;
import kream.bean.UserDTO;
import kream.dao.AdminProductDAO;
import kream.dao.UserDAO;

@Service
public class AdminProductServiceImpl implements AdminProductService {
	@Autowired
	private AdminProductDAO adminProductDAO;
	@Autowired
	private UserDAO userDAO;
	@Autowired
	private List<AdminProductDTO> productList;
	@Autowired
	private List<UserDTO> userList;
	@Autowired
	private List<ProductBoardDTO> productBoardList;
	
	@Override
	public void productUpload(AdminProductDTO adminProductDTO,
								List<MultipartFile> list,
								HttpSession session) {
		
		//실제폴더 경로 출력
		String filePath = session.getServletContext().getRealPath("/WEB-INF/storage");
		System.out.println("실제폴더 = "+filePath);
		
		String fileName;
		File file;
		
		//파일명만 모아서 DB로 보내기
				List<String> fileNameList = new ArrayList<String>();
				
				for(MultipartFile img:list) {
					if(!img.isEmpty()) {
						//fileName 앞에 '날짜_시간_'추가해서 식별하기.
						Date date = new Date();
						SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd_HHmmss_");
						fileName=formatter.format(date);
						fileName += img.getOriginalFilename();
						
						file = new File(filePath, fileName);
						
						fileNameList.add(fileName);
						
						try {
							img.transferTo(file);
						} catch (IOException e) {
							e.printStackTrace();
						}//try
					}
				}//for
				
				//DB
				adminProductDAO.upload(adminProductDTO, fileNameList);
		
	}

	@Override
	public List<AdminProductDTO> load() {
		productList = adminProductDAO.load();
		return productList;
	}

	@Override
	public void productEdit(AdminProductDTO adminProductDTO, MultipartFile productImg1, MultipartFile productImg2,
			MultipartFile productImg3, MultipartFile productImg4, MultipartFile productImg5, MultipartFile productImg6,
			MultipartFile productImg7, MultipartFile productImg8, MultipartFile productImg9, MultipartFile productImg10,
			String hiddenProductImg1,
			String hiddenProductImg2,
			String hiddenProductImg3,
			String hiddenProductImg4,
			String hiddenProductImg5,
			String hiddenProductImg6,
			String hiddenProductImg7,
			String hiddenProductImg8,
			String hiddenProductImg9,
			String hiddenProductImg10,
			HttpSession session) {
		
		//실제폴더 경로 출력
		String filePath = session.getServletContext().getRealPath("/WEB-INF/storage");
		System.out.println("실제폴더 = "+filePath);
		
		String fileName1 = null;
		String fileName2 = null;
		String fileName3 = null;
		String fileName4 = null;
		String fileName5 = null;
		String fileName6 = null;
		String fileName7 = null;
		String fileName8 = null;
		String fileName9 = null;
		String fileName10 = null;
		File file = null;
		
		
		List<MultipartFile> MultipartFileList = new ArrayList<>();
		
		MultipartFileList.add(productImg1);
		MultipartFileList.add(productImg2);
		MultipartFileList.add(productImg3);
		MultipartFileList.add(productImg4);
		MultipartFileList.add(productImg5);
		MultipartFileList.add(productImg6);
		MultipartFileList.add(productImg7);
		MultipartFileList.add(productImg8);
		MultipartFileList.add(productImg9);
		MultipartFileList.add(productImg10);
		
		//파일명만 모아서 DB로 보내기
		List<String> fileNameList = new ArrayList<String>();
		
	//	상품이미지 1~10에 고유식별변호(날짜)를 추가할지 말지 정하는 로직 ######################################### 
		    Date date = new Date();
			SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd_HHmmss_");
			
			//새로 등록된 상품이라면 파일이름 앞에 날짜를붙인다.
			if(!MultipartFileList.get(0).isEmpty()) fileName1 = formatter.format(date) + MultipartFileList.get(0).getOriginalFilename();
			if(!MultipartFileList.get(1).isEmpty()) fileName2 = formatter.format(date) + MultipartFileList.get(1).getOriginalFilename();
			if(!MultipartFileList.get(2).isEmpty()) fileName3 = formatter.format(date) + MultipartFileList.get(2).getOriginalFilename();
			if(!MultipartFileList.get(3).isEmpty()) fileName4 = formatter.format(date) + MultipartFileList.get(3).getOriginalFilename();
			if(!MultipartFileList.get(4).isEmpty()) fileName5 = formatter.format(date) + MultipartFileList.get(4).getOriginalFilename();
			if(!MultipartFileList.get(5).isEmpty()) fileName6 = formatter.format(date) + MultipartFileList.get(5).getOriginalFilename();
			if(!MultipartFileList.get(6).isEmpty()) fileName7 = formatter.format(date) + MultipartFileList.get(6).getOriginalFilename();
			if(!MultipartFileList.get(7).isEmpty()) fileName8 = formatter.format(date) + MultipartFileList.get(7).getOriginalFilename();
			if(!MultipartFileList.get(8).isEmpty()) fileName9 = formatter.format(date) + MultipartFileList.get(8).getOriginalFilename();
			if(!MultipartFileList.get(9).isEmpty()) fileName10 = formatter.format(date) + MultipartFileList.get(9).getOriginalFilename();
			
			//기존에 있던 상품을 변경하지 않았다면, 파일이름은 그대로.
			
			if(!(hiddenProductImg1.equals(""))) fileName1 = hiddenProductImg1;
			if(!(hiddenProductImg2.equals(""))) fileName2 = hiddenProductImg2;
			if(!(hiddenProductImg3.equals(""))) fileName3 = hiddenProductImg3;
			if(!(hiddenProductImg4.equals(""))) fileName4 = hiddenProductImg4;
			if(!(hiddenProductImg5.equals(""))) fileName5 = hiddenProductImg5;
			if(!(hiddenProductImg6.equals(""))) fileName6 = hiddenProductImg6;
			if(!(hiddenProductImg7.equals(""))) fileName7 = hiddenProductImg7;
			if(!(hiddenProductImg8.equals(""))) fileName8 = hiddenProductImg8;
			if(!(hiddenProductImg9.equals(""))) fileName9 = hiddenProductImg9;
			if(!(hiddenProductImg10.equals(""))) fileName10 = hiddenProductImg10;
			
			if(fileName1!=null)file = new File(filePath, fileName1);//파일이름이 null이 아니고(즉 이미지 파일이 있기만 하다면 아래조건문 발동~!)
			if(!MultipartFileList.get(0).isEmpty()) {//실제 등록된 파일이라면
				try {
					MultipartFileList.get(0).transferTo(file); //(파일이름 초기화 뿐만아니라)파일도 생성하자.
				} catch (IOException e) {
					e.printStackTrace();
				}					
			}
			
			if(fileName2!=null)file = new File(filePath, fileName2);
			if(!MultipartFileList.get(1).isEmpty()) {	
				try {
		            MultipartFileList.get(1).transferTo(file);
		        } catch (IOException e) {
		            e.printStackTrace();
		        }
			}
			
			if(fileName3!=null)file = new File(filePath, fileName3);
			if(!MultipartFileList.get(2).isEmpty()) {
				try {
		            MultipartFileList.get(2).transferTo(file);
		        } catch (IOException e) {
		            e.printStackTrace();
		        }
			}
			
			if(fileName4!=null)file = new File(filePath, fileName4);
			if(!MultipartFileList.get(3).isEmpty()) {
				try {
		            MultipartFileList.get(3).transferTo(file);
		        } catch (IOException e) {
		            e.printStackTrace();
		        }
			}
			
			if(fileName5!=null)file = new File(filePath, fileName5);
			if(!MultipartFileList.get(4).isEmpty()) {
				try {
		            MultipartFileList.get(4).transferTo(file);
		        } catch (IOException e) {
		            e.printStackTrace();
		        }
			}
			
			if(fileName6!=null)file = new File(filePath, fileName6);
			if(!MultipartFileList.get(5).isEmpty()) {
				try {
		            MultipartFileList.get(5).transferTo(file);
		        } catch (IOException e) {
		            e.printStackTrace();
		        }
			}
			
			if(fileName7!=null)file = new File(filePath, fileName7);
			if(!MultipartFileList.get(6).isEmpty()) {
				try {
		            MultipartFileList.get(6).transferTo(file);
		        } catch (IOException e) {
		            e.printStackTrace();
		        }
			}
			
			if(fileName8!=null)file = new File(filePath, fileName8);
			if(!MultipartFileList.get(7).isEmpty()) {
				try {
		            MultipartFileList.get(7).transferTo(file);
		        } catch (IOException e) {
		            e.printStackTrace();
		        }
			}
			
			if(fileName9!=null)file = new File(filePath, fileName9);
			if(!MultipartFileList.get(8).isEmpty()) {
				try {
		            MultipartFileList.get(8).transferTo(file);
		        } catch (IOException e) {
		            e.printStackTrace();
		        }
			}
			
			if(fileName10!=null)file = new File(filePath, fileName10);
			if(!MultipartFileList.get(9).isEmpty()) {
				try {
		            MultipartFileList.get(9).transferTo(file);
		        } catch (IOException e) {
		            e.printStackTrace();
		        }
			}
			
			adminProductDTO.setProductImg1(fileName1);
			adminProductDTO.setProductImg2(fileName2);
			adminProductDTO.setProductImg3(fileName3);
			adminProductDTO.setProductImg4(fileName4);
			adminProductDTO.setProductImg5(fileName5);
			adminProductDTO.setProductImg6(fileName6);
			adminProductDTO.setProductImg7(fileName7);
			adminProductDTO.setProductImg8(fileName8);
			adminProductDTO.setProductImg9(fileName9);
			adminProductDTO.setProductImg10(fileName10);
			
		
		//DB
		adminProductDAO.edit(adminProductDTO);
		
	}


	@Override
	public void delete(AdminProductDTO adminProductDTO) {
		adminProductDAO.delete(adminProductDTO);
	}

	@Override
	public void selectDelete(AdminProductIdsDTO adminProductIdsDTO) {
		adminProductDAO.selectDelete(adminProductIdsDTO);
		
	}

	@Override
	public List<ProductBoardDTO> boardLoad() {
		productBoardList = adminProductDAO.boardLoad();
		return productBoardList;
	}

	@Override
	public void boardDelete(ProductBoardDTO productBoardDTO) {
		adminProductDAO.boardDelete(productBoardDTO);
		
	}

	@Override
	public List<ProductBoardDTO> boardLoadYetReply() {
		productBoardList = adminProductDAO.boardLoadYetReply();
		return productBoardList;
	}

	@Override
	public List<ProductBoardDTO> boardLoadAllReply() {
		productBoardList = adminProductDAO.boardLoadAllReply();
		return productBoardList;
	}

	@Override
	public List<ProductBoardDTO> boardLoadCompleteReply() {
		productBoardList = adminProductDAO.boardLoadCompleteReply();
		return productBoardList;
	}

	@Override
	public String checkComment() {
		
		return adminProductDAO.checkComment();
	}

	@Override
	public List<ProductBoardDTO> replyCheck(String boardId) {
		productBoardList = adminProductDAO.replyCheck(boardId);
		return productBoardList;
	}

	@Override
	public void replyEdit(String boardId, String boardContent) {
		 Map<String, Object> productMap = new HashMap<>();
		    
		    try {
		        int boardIdInt = Integer.parseInt(boardId);
		        productMap.put("boardId", boardIdInt);
		        productMap.put("boardContent", boardContent);
		        
		        adminProductDAO.replyEdit(productMap);
		    } catch (NumberFormatException e) {
		        System.err.println("boardId 변환 중 오류 발생: " + e.getMessage());
		    }
		
	}


}
