package kream.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import kream.bean.AdminProductDTO;
import kream.bean.AdminProductIdsDTO;
import kream.bean.OrderDTO;
import kream.bean.ProductBoardDTO;
import kream.bean.UserDTO;
import kream.service.AdminOrderService;
import kream.service.AdminProductService;
import kream.service.UserService;

@Controller
public class AdminController {
	
	
	
private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired	
	private AdminProductService adminProductService;
	@Autowired
	private List<Integer> productIdList;
	@Autowired
	private UserService userService;
	@Autowired
	private AdminOrderService adminOrderService;
	
	@InitBinder
    public void initBinder(WebDataBinder binder) {
        binder.setAllowedFields("productId", "category", "category2","gender", "brand", "productName", "productExplain", "productDetail", "price", "stock", "productColor", "releaseDate", "size", "hit", "createdDate");
    }
	
	@GetMapping(value="/admin/adminMain")
	public String adminMain(HttpServletRequest request, Model model){
	    HttpSession session = request.getSession();
	    String userEmail = (String) session.getAttribute("userEmail");
	    
	    if(userEmail == null) {
	        return "redirect:/login";
	    }

	    UserDTO userDTO = userService.getUserInfo(userEmail);
	    if(userDTO.getAdmin() != 1) {
	        // 관리자가 아닐 경우 접근 불가
	    	return "redirect:/";
	        
	    }else {
	    	// 관리자 닉네임 설정
	    	model.addAttribute("adminNickname", userDTO.getNickname());
	    	
	    	return "/admin/adminMain";	
	    }

	}
	@GetMapping(value="/admin/adminPopup")
	public String adminMain(){
		return "/admin/adminPopup";
	}
	
	
	@PostMapping(value="/admin/adminProductUpload", produces="text/html; charset=UTF-8")
	public String adminProductUpload(@ModelAttribute AdminProductDTO adminProductDTO,
	                                @RequestParam("productImg[]") List<MultipartFile> list, 
	                                @RequestParam("productColor[]") String[] productColors, 
	                                @RequestParam("size[]") String[] sizes, 
	                                @RequestParam("stock[]") Integer[] stocks, 
	                                HttpSession session){

		// 배열의 모든 요소를 쉼표로 구분하여 문자열로 합침.
	    String productColorString = String.join(",", productColors);
	    String sizeString = String.join(",", sizes);
	    
	    StringBuilder stockBuilder = new StringBuilder();
	    for(int i=0; i<stocks.length; i++){
	        stockBuilder.append(stocks[i]);
	        if(i < stocks.length - 1) {
	            stockBuilder.append(",");
	        }
	    }
	    String stock = stockBuilder.toString();

	    // 합쳐진 문자열을 DTO에 셋팅
	    adminProductDTO.setProductColor(productColorString);
	    adminProductDTO.setSize(sizeString);
	    adminProductDTO.setStock(stock);
	    
	    adminProductService.productUpload(adminProductDTO, list, session);
	    
	    return "/admin/adminMain";
	}

	
	@PostMapping(value="/admin/adminProductList_Ajax", produces="application/json; charset=UTF-8")
	@ResponseBody
	public List<AdminProductDTO> adminProductList_Ajax(){
		
		return adminProductService.load();
	}
	
	
	@PostMapping(value="/admin/adminProductEdit_Ajax", produces="application/json; charset=UTF-8")
	public String adminProductEdit_Ajax(@ModelAttribute AdminProductDTO adminProductDTO,
										@RequestParam("productImg1") MultipartFile productImg1,
										@RequestParam("productImg2") MultipartFile productImg2,
										@RequestParam("productImg3") MultipartFile productImg3,
										@RequestParam("productImg4") MultipartFile productImg4,
										@RequestParam("productImg5") MultipartFile productImg5,
										@RequestParam("productImg6") MultipartFile productImg6,
										@RequestParam("productImg7") MultipartFile productImg7,
										@RequestParam("productImg8") MultipartFile productImg8,
										@RequestParam("productImg9") MultipartFile productImg9,
										@RequestParam("productImg10") MultipartFile productImg10,
										/*이게 로직이 골때림.
										전체상품 -> 수정 버튼을 눌렀을 때,
										전체상품에서 보여지는 이미지경로의 text파일을 가져오기때문에 String타입임.
										하지만 수정Form에서 새로 이미지를 등록할 땐 MultipartFile타입으로 등록될거임.
										그래서, 일단 두가지 타입을 모두 불러와서 null인 녀석들을 분리시키고 알맞은 값을 DAO에 넘겨야함.
										*/
										@RequestParam("hiddenProductImg1") String hiddenProductImg1,
										@RequestParam("hiddenProductImg2") String hiddenProductImg2,
										@RequestParam("hiddenProductImg3") String hiddenProductImg3,
										@RequestParam("hiddenProductImg4") String hiddenProductImg4,
										@RequestParam("hiddenProductImg5") String hiddenProductImg5,
										@RequestParam("hiddenProductImg6") String hiddenProductImg6,
										@RequestParam("hiddenProductImg7") String hiddenProductImg7,
										@RequestParam("hiddenProductImg8") String hiddenProductImg8,
										@RequestParam("hiddenProductImg9") String hiddenProductImg9,
										@RequestParam("hiddenProductImg10") String hiddenProductImg10,
										@RequestParam("productColor[]") String[] productColors, 
		                                @RequestParam("size[]") String[] sizes, 
		                                @RequestParam("stock[]") Integer[] stocks, 
										HttpSession session){
		System.out.println(hiddenProductImg1+"여기는 컨트롤러");

		//-----------------------------------
		// 배열의 모든 요소를 쉼표로 구분하여 문자열로 합침. 
	    String productColorString = String.join(",", productColors);
	    String sizeString = String.join(",", sizes);
	    
	    StringBuilder stockBuilder = new StringBuilder();
	    for(int i=0; i<stocks.length; i++){
	        stockBuilder.append(stocks[i]);
	        if(i < stocks.length - 1) {
	            stockBuilder.append(",");
	        }
	    }
	    String stock = stockBuilder.toString();

	    // 합쳐진 문자열을 DTO에 셋팅
	    adminProductDTO.setProductColor(productColorString);
	    adminProductDTO.setSize(sizeString);
	    adminProductDTO.setStock(stock);
	    //-----------------------------------
	    
			adminProductService.productEdit(adminProductDTO,
											productImg1,
											productImg2,
											productImg3,
											productImg4,
											productImg5,
											productImg6,
											productImg7,
											productImg8,
											productImg9,
											productImg10,
											hiddenProductImg1,
											hiddenProductImg2,
											hiddenProductImg3,
											hiddenProductImg4,
											hiddenProductImg5,
											hiddenProductImg6,
											hiddenProductImg7,
											hiddenProductImg8,
											hiddenProductImg9,
											hiddenProductImg10,
											session);
		return "/admin/adminMain";
	}
	
	@PostMapping(value="/admin/adminProductDelete_Ajax")
	public String adminProductDelete_Ajax(@RequestBody AdminProductDTO adminProductDTO){
		adminProductService.delete(adminProductDTO);
		
		return "/admin/adminMain";
	}
	
	
	
	@PostMapping(value="/admin/adminProductSelectDelete_Ajax")
	public String adminProductSelectDelete_Ajax(@RequestBody AdminProductIdsDTO adminProductIdsDTO){
		
		adminProductService.selectDelete(adminProductIdsDTO);
		return "/admin/adminMain";
	}
	
	
	@PostMapping(value="/admin/adminProductBoardList_Ajax", produces="application/json; charset=UTF-8")
	@ResponseBody
	public List<ProductBoardDTO> adminProductBoardList_Ajax(){
		
		return adminProductService.boardLoad();
	}
	

	@PostMapping(value="/admin/adminProductBoardDelete_Ajax")
	@ResponseBody
	public void adminProductBoardDelete_Ajax(@RequestBody ProductBoardDTO productBoardDTO){
		adminProductService.boardDelete(productBoardDTO);
	}
	
	@PostMapping(value="/admin/adminProductBoardList_yetReply", produces="application/json; charset=UTF-8")
	@ResponseBody
	public List<ProductBoardDTO> adminProductBoardList_yetReply(){
		
		return adminProductService.boardLoadYetReply();
	}
	@PostMapping(value="/admin/adminProductBoardList_allReply", produces="application/json; charset=UTF-8")
	@ResponseBody
	public List<ProductBoardDTO> adminProductBoardList_allReply(){
		
		return adminProductService.boardLoadAllReply();
	}
	@PostMapping(value="/admin/adminProductBoardList_CompleteReply", produces="application/json; charset=UTF-8")
	@ResponseBody
	public List<ProductBoardDTO> adminProductBoardList_CompleteReply(){
		
		return adminProductService.boardLoadCompleteReply();
	}
	@PostMapping(value="/checkComment")
	@ResponseBody
	public String checkComment(){
		
		return adminProductService.checkComment();
	}
	@PostMapping(value="/admin/adminProductBoardList_replyCheck", produces="application/json; charset=UTF-8")
	@ResponseBody
	public List<ProductBoardDTO> replyCheck(@RequestParam String boardId){
		
		return adminProductService.replyCheck(boardId);
	}
	
	
	@PostMapping(value = "/admin/replyEdit")
    @ResponseBody
    public void replyEdit(@RequestParam String boardId,
                                @RequestParam String boardContent) {
		adminProductService.replyEdit(boardId, boardContent);
    }

	@PostMapping(value = "/admin/adminOrderListForm_ajax")
	@ResponseBody
	public List<OrderDTO> loadOrder() {
		return adminOrderService.loadOrder();
	}
	@PostMapping(value = "/admin/adminOrderCheck_ajax")
	@ResponseBody
	public void checkOrder(@RequestParam String orderId) {
		adminOrderService.checkOrder(orderId);
	}
	@PostMapping(value = "/admin/adminOrderCancle_ajax")
	@ResponseBody
	public void cancleOrder(@RequestParam String orderId) {
		adminOrderService.cancleOrder(orderId);
	}
	
	@PostMapping(value = "/admin/adminOrderCheckListForm_ajax")
	@ResponseBody
	public List<OrderDTO> loadOrderCheck() {
		return adminOrderService.loadOrderCheck();
	}
	
	@PostMapping(value = "/admin/adminOrderShipping_ajax")
	@ResponseBody
	public void shippingOrder(@RequestParam String orderId) {
		adminOrderService.shippingOrder(orderId);
	}
	@PostMapping(value = "/admin/adminShippingListForm_ajax")
	@ResponseBody
	public List<OrderDTO> loadShipping() {
		return adminOrderService.loadShipping();
	}
}
