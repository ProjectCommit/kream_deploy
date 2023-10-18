package kream.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kream.bean.AdminProductDTO;
import kream.bean.WishListsDTO;
import kream.service.cyk.CykService;
import kream.service.cyk.CykServiceUpload;

@Controller
public class CykController {
	@Autowired
	private CykService cykService; 
	
	@Autowired
	private CykServiceUpload cykServiceUpload;
	// ================================김찬영START================================
	
	//메인화면
	@GetMapping(value="/ranking/homeTest")
	public String homeTest() {
		return "/ranking/homeTest";
	}
	//단건조회 들어가기
	@GetMapping(value="/ranking/cykproductOneForm")
	public String productOneForm() {
		return "/ranking/productOneForm";
	}
	//단건조회 화면
	@PostMapping(value="/ranking/cykgetProductOne")
	@ResponseBody
	public AdminProductDTO getProductOne(@RequestParam String productId) {
		
		return cykService.getProductOne(productId);
	}
	
	//입력화면 들어가기
	@GetMapping(value="/ranking/cykproductwriteForm")
	public String productwriteForm() {
		
		return "/ranking/productwriteForm";
	}
	
	//상품 입력
	@PostMapping(value="/ranking/cykproductWrite")
	@ResponseBody
	public void productWrite(@ModelAttribute AdminProductDTO adminProductDTO) {
		cykService.productWrite(adminProductDTO);
	}
	
	//상품리스트 출력 페이지로 이동
	@GetMapping(value="/ranking/cykproductListForm")
	public String productList(@RequestParam(required = false, defaultValue= "1") String pg , Model model) {	
		model.addAttribute("pg" , pg);
		
		return "/ranking/productListForm";
	}
	
	//상품리스트 출력 기능.
	@PostMapping(value="/ranking/cykgetProductList")
	@ResponseBody
	public Map<String,Object> productList(@RequestParam String pg) {
		
		return cykService.getProductList(pg);
		
	}
	//파일업로드폼으로 가기
	@GetMapping(value="/ranking/cykuploadForm")
	public String uploadForm() {
		return "/ranking/uploadForm";
	}

	//----------- 한 번에 여러개의 파일을 선택 -----------------------
//	@PostMapping(value="/ranking/cykupload", produces = "text/html; charset=UTF-8")
//	@ResponseBody
//	public String upload(@ModelAttribute UserImageDTO userImageDTO,
//			             @RequestParam("img[]") List<MultipartFile> list,
//			             HttpSession session) {
//		
//		//실제폴더
//		String filePath = session.getServletContext().getRealPath("/WEB-INF/storage");
//		System.out.println("실제폴더 = " + filePath);
//		
//		String fileName;
//		File file;
//		String result = "";
//		
//		//파일명만 모아서 DB로 보내기
//		List<String> fileNameList = new ArrayList<String>();
//		
//		for(MultipartFile img : list) {
//			fileName = img.getOriginalFilename();
//			file = new File(filePath, fileName);
//			
//			fileNameList.add(fileName);
//			
//			try {
//				img.transferTo(file);
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//			
//			result += "<span><img src='/kream/storage/" + fileName + "' width='300' height='300' alt=""/></span>";
//			
//		}//for
//		
//		//DB
//		cykServiceUpload.upload(userImageDTO, fileNameList);
//		
//		return result;
//	}
	// 아작스 폼 들어가기
	@GetMapping(value ="/ranking/cykuploadForm_AJax")
	public String uploadForm_AJax() {
		return "/ranking/uploadForm_AJax";
	}
	
	
	// 한번에여러개의 파일을 선택
//	@PostMapping(value="/ranking/cykupload_AJax" , produces="text/html; charset=UTF-8")
//	@ResponseBody     
//	public String uploadAJax(@ModelAttribute UserImageDTO userImageDTO,
//				            @RequestParam("img[]") List<MultipartFile> list,
//				            HttpSession session) {
//		//실제폴더
//		String filePath = session.getServletContext().getRealPath("/WEB-INF/storage");
//		System.out.println("실제폴더 = " + filePath);
//		
//		String fileName;
//		File file;
//		String result = "";
//		
//		//파일명만 모아서 DB로 보내기
//		List<String> fileNameList = new ArrayList<String>();
//		
//		for(MultipartFile img : list) {
//			fileName = img.getOriginalFilename();
//			file = new File(filePath, fileName);
//			
//			fileNameList.add(fileName);
//			
//			try {
//				img.transferTo(file);
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//			
//			result += "<span><img src='/kream/storage/" + fileName + "' width='300' height='300' alt="" /></span>";
//			
//		}//for
//		
//		//DB
//		cykServiceUpload.upload(userImageDTO, fileNameList);
//		
//		return result;
//	}
	//업로드 리스트 화면으로가기 [ 김찬영  2023-10-12 오후 02:33:23 ]
	
	@GetMapping(value="/ranking/cykupload_list_AJax")
	public String upload_list_AJax() {
		return "/ranking/upload_list_AJax";
	}
	//[ 김찬영  2023-10-15 오전 03:13:46 ]======================================
	//상품 입력
	@PostMapping(value="/ranking/addWishLists")
	@ResponseBody
	public void addWishLists(@ModelAttribute WishListsDTO wishListsDTO) {
		cykServiceUpload.addWishLists(wishListsDTO);
	}
	
	//업로드리스트 신발 보여주는화면.
	@GetMapping(value="/ranking/rankingMain")
	public String rankingMain() {
		return "/ranking/rankingMain";
	}
	

	//업로드리스트 화면상에뿌리기
	@PostMapping(value="/ranking/rankingListMaleshoes")
	@ResponseBody 
	public List<AdminProductDTO> getUpload_list_AJax(){
		return cykServiceUpload.getUpload_list_AJax();	
	}
	
	//업로드리스트 화면상에뿌리기
	@PostMapping(value="/ranking/rankingListFemaleshoes")
	@ResponseBody 
	public List<AdminProductDTO> getUpload_list_AJax2(){
		return cykServiceUpload.getUpload_list_AJax2();	
	}
	
	//업로드리스트 화면상에뿌리기
	@PostMapping(value="/ranking/rankingListFemaleclothes")
	@ResponseBody 
	public List<AdminProductDTO> getUpload_list_AJax3(){
		return cykServiceUpload.getUpload_list_AJax3();	
	}
	// ================================김찬영END================================
	
}
