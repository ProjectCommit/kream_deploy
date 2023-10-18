package kream.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.collections4.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import kream.bean.AddressDTO;
import kream.bean.UserDTO;
import kream.bean.WishListsDTO;
import kream.service.MypageService;
import kream.service.UserService;

@Controller
public class MypageController {
	@Autowired
	private MypageService mypageService;
	private UserService userService;
	
	// 내 정보
    @RequestMapping("/my")
    public String my(@SessionAttribute(name = "userEmail", required = false) String userEmail, 
    				 Model model, HttpServletRequest request) {
    	HttpSession session = request.getSession();
    	
		if (userEmail == null) {
			return "redirect:/"; // 세션에 userEmail 속성이 없으면 메인 페이지로 리다이렉션
		}
    	 
    	// 이메일을 세션에 등록
        //String email = "user@example.com"; // 여기에 실제 이메일 값을 가져와야 합니다.
        model.addAttribute("userEmail", userEmail);
        
        
        // 세션에서 이메일 정보 가져오기
        userEmail = (String) session.getAttribute("userEmail");

        // 이메일 정보를 사용하여 사용자 정보 조회
        UserDTO userDTO = mypageService.getUserInfo(userEmail);
      
        // 모델에 사용자 정보를 추가하여 뷰로 전달
        model.addAttribute("user", userDTO);
        
        // 이메일 주소 마스킹 처리
        String email = userDTO.getEmail();
        if (email != null && email.contains("@")) {
            String[] parts = email.split("@");
            String username = parts[0];
            String domain = parts[1];

            int usernameLength = username.length();
            String maskedUsername;
            if (usernameLength <= 2) {
                // If the username has 2 or fewer characters, mask all characters except the first one
                maskedUsername = username.substring(0, 1) + "*".repeat(usernameLength - 1);
            } else {
                // Mask all characters except the first and the last one
                maskedUsername = username.substring(0, 1) + "*".repeat(usernameLength - 2) + username.substring(usernameLength - 1);
            }

            String maskedEmail = maskedUsername + "@" + domain;
            model.addAttribute("maskedEmail", maskedEmail);
        } else {
            model.addAttribute("maskedEmail", email);
        }
        
        // 관심상품 조회
        List<Map<String, Object>> wishList = mypageService.getWishList(email);
        System.out.println("Controller = " + wishList);
        
        model.addAttribute("wishList", wishList);
        return "/mypage/my";
    }
    
    // 사이드 메뉴
    @GetMapping("/my/leftSideMenu")
    public String getLeftSideMenu() {
        return "/mypage/leftSideMenu";
    }
    
    // 기본 페이지
    @GetMapping("/defaultMain")
    public String defaultMain(Model model, HttpServletRequest request) {
    	HttpSession session = request.getSession();
    	// 세션에서 이메일 정보 가져오기
        String userEmail = (String) session.getAttribute("userEmail");
        
        // 이메일 정보를 사용하여 사용자 정보 조회
        UserDTO userDTO = mypageService.getUserInfo(userEmail);
        
        // 이메일 주소 마스킹 처리
        String email = userDTO.getEmail();
        if (email != null && email.contains("@")) {
            String[] parts = email.split("@");
            String username = parts[0];
            String domain = parts[1];

            int usernameLength = username.length();
            String maskedUsername;
            if (usernameLength <= 2) {
                // If the username has 2 or fewer characters, mask all characters except the first one
                maskedUsername = username.substring(0, 1) + "*".repeat(usernameLength - 1);
            } else {
                // Mask all characters except the first and the last one
                maskedUsername = username.substring(0, 1) + "*".repeat(usernameLength - 2) + username.substring(usernameLength - 1);
            }

            String maskedEmail = maskedUsername + "@" + domain;
            model.addAttribute("maskedEmail", maskedEmail);
        } else {
            model.addAttribute("maskedEmail", email);
        }

        // 모델에 사용자 정보를 추가하여 뷰로 전달
        model.addAttribute("user", userDTO);
        
        // 관심상품 조회
        List<Map<String, Object>> wishList = mypageService.getWishList(email);
        System.out.println("Controller = " + wishList);
        
        model.addAttribute("wishList", wishList);
    	return "/mypage/defaultMain";
    }
    
    // 구매 내역
    @GetMapping("/my/buying")
    public String showBuying(Model model, HttpServletRequest request) {
    	HttpSession session = request.getSession();
    	
        model.addAttribute("myContent", "This is the board page content.");
        return "/mypage/buying";
    }
    
    // 관심 상품
    /*
    @GetMapping("/saved")
    public String showSaved(Model model, HttpServletRequest request) {
    	HttpSession session = request.getSession();
    	
        model.addAttribute("myContent", "This is the board page content.");
        return "/user/saved";
    }*/
    // 관심상품 불러오기
    @GetMapping("/saved")
    public String showWishList(Model model, HttpServletRequest request) {
    	HttpSession session = request.getSession();
    	
    	// 세션에서 이메일 정보 가져오기
        String userEmail = (String) session.getAttribute("userEmail");
        
        // 이메일 정보를 사용하여 사용자 정보 조회
        UserDTO userDTO = mypageService.getUserInfo(userEmail);
        
        // 이메일 주소 마스킹 처리
        String email = userDTO.getEmail();
        
        List<Map<String, Object>> wishList = mypageService.getWishList(email);
        System.out.println("Controller = " + wishList);
        
        model.addAttribute("wishList", wishList);
        return "/user/saved";
    }
    
    // 관심상품 삭제하기
    @PostMapping("/saved")
    @ResponseBody
    public void deleteWishList(WishListsDTO wishListsDTO) {
    	mypageService.deleteWishList(wishListsDTO);
    }
    
    // 로그인 정보
    @GetMapping("/my/profile")
    public String showProfile(Model model, HttpServletRequest request) {
        HttpSession session = request.getSession();
        // 세션에서 이메일 정보 가져오기
        String userEmail = (String) session.getAttribute("userEmail");
        
        // 이메일 정보를 사용하여 사용자 정보 조회
        UserDTO userDTO = mypageService.getUserInfo(userEmail);
        
        // 이메일 주소 마스킹 처리
        String email = userDTO.getEmail();
        if (email != null && email.contains("@")) {
            String[] parts = email.split("@");
            String username = parts[0];
            String domain = parts[1];

            int usernameLength = username.length();
            String maskedUsername;
            if (usernameLength <= 2) {
                // If the username has 2 or fewer characters, mask all characters except the first one
                maskedUsername = username.substring(0, 1) + "*".repeat(usernameLength - 1);
            } else {
                // Mask all characters except the first and the last one
                maskedUsername = username.substring(0, 1) + "*".repeat(usernameLength - 2) + username.substring(usernameLength - 1);
            }

            String maskedEmail = maskedUsername + "@" + domain;
            model.addAttribute("maskedEmail", maskedEmail);
        } else {
            model.addAttribute("maskedEmail", email);
        }
        
        /*
        // 비밀번호 마스킹 처리 (모든 글자를 *로 대체)
        String password = userDTO.getPwd();
        int passwordLength = password.length();
        String maskedPassword = "*".repeat(passwordLength);
        model.addAttribute("maskedPassword", maskedPassword);
         */
        
        // 휴대폰 번호 마스킹 처리
        int phoneNumber = userDTO.getPhone();
        String phoneNumberString = String.valueOf(phoneNumber);

        if (phoneNumberString.length() >= 8) {
            String maskedPhoneNumber = phoneNumberString.substring(0, 3) + "-"
                    + phoneNumberString.substring(3, 4) + "***-*"
                    + phoneNumberString.substring(phoneNumberString.length() - 3);
            model.addAttribute("maskedPhoneNumber", maskedPhoneNumber);
        } else {
            model.addAttribute("maskedPhoneNumber", phoneNumberString);
        }
        
        // 이름 마스킹 처리 (성은 그대로, 이름은 첫 글자만 표시)
        String name = userDTO.getUserName();
        if (name != null && name.length() > 1) {
            String maskedName = name.substring(0, 1) + "**";
            model.addAttribute("maskedName", maskedName);
        } else {
            model.addAttribute("maskedName", name);
        }

        // 모델에 사용자 정보를 추가하여 뷰로 전달
        model.addAttribute("user", userDTO);
        return "/mypage/profile";
    }
    
    // 이메일 중복체크
    @PostMapping(value="/my/profile/isExistId")
	@ResponseBody // exist를 jsp가 아닌 실제 문자열이 넘어가게 함
	public String isExistId(@RequestParam String email) {
		System.out.println(email);
		//DB연결을 여기서 하는게 아니라 일을 하는 집합체인 UserServiceImpl에서 한다.
		//return "exist" or "non_exist"; -> 이런식으로 리턴하는 값을 UserServiceImpl에서 하도록 해야한다는 말
		return mypageService.isExistId(email);
	}
    
    // 이메일 업데이트
    @PostMapping("/my/profile/updateEmail")
    @ResponseBody
    public String updateEmail(@RequestParam String newEmail, 
    						  @RequestParam String oldEmail,
    						  HttpServletRequest request) {
    	HttpSession session = request.getSession();
    	
    	System.out.println("Received new email: " + newEmail);
        System.out.println("Received old email: " + oldEmail);
    	
        // email을 기반으로 데이터베이스 업데이트 로직 수행
        boolean isUpdated = mypageService.updateEmail(newEmail, oldEmail);
        if (isUpdated) {
        	// 업데이트 성공 시 세션을 무효화하고 로그인 페이지로 리다이렉션
            session.invalidate();
            //return "redirect:/login"; // 로그인 페이지로 리다이렉션
            
            return "success"; // 업데이트 성공 시 "success" 반환
        } else {
            return "failure"; // 업데이트 실패 시 "failure" 반환
        }
    }
    
    
    // 비밀번호 업데이트
    @PostMapping("/my/profile/updatePassword")
    @ResponseBody
    public String updatePassword(@RequestBody Map<String, String> requestMap, HttpServletRequest request) {
        HttpSession session = request.getSession();
    	String userEmail = (String) session.getAttribute("userEmail");
        String oldPassword = requestMap.get("oldPassword");
        String newPassword = requestMap.get("newPassword");
        
        System.out.println(oldPassword);
        System.out.println(newPassword);
        System.out.println(userEmail);
        // 기존 비밀번호가 맞는지 확인
        boolean isPasswordCorrect = mypageService.verifyPassword(userEmail, oldPassword);

        if (isPasswordCorrect) {
            // 기존 비밀번호가 맞으면 새 비밀번호로 업데이트
            boolean isUpdated = mypageService.updatePassword(userEmail, newPassword);
            if (isUpdated) {
            	session.invalidate();
                return "success"; // 업데이트 성공 시 "success" 반환
            } else {
                return "failure"; // 업데이트 실패 시 "failure" 반환
            }
        } else {
            return "incorrect_password"; // 기존 비밀번호가 틀렸을 경우 "incorrect_password" 반환
        }
    }
    
    
    // 프로필 관리
    @GetMapping("/my/profile-edit")
    public String showProfile_Edit(Model model, HttpServletRequest request) {
    	HttpSession session = request.getSession();
    	// 세션에서 이메일 정보 가져오기
        String userEmail = (String) session.getAttribute("userEmail");

        // 이메일 정보를 사용하여 사용자 정보 조회
        UserDTO user = mypageService.getUserInfo(userEmail);
        // 모델에 사용자 정보를 추가하여 뷰로 전달
        model.addAttribute("user", user);
        return "/mypage/profile-edit";
    }
    
    // 주소록
    @GetMapping("/my/address")
    public String showAddress(Model model, HttpServletRequest request) {
    	HttpSession session = request.getSession();
    	// 세션에서 이메일 정보 가져오기
        String userEmail = (String) session.getAttribute("userEmail");

        // 이메일 정보를 사용하여 사용자 정보 조회
        UserDTO user = mypageService.getUserInfo(userEmail);
        // 모델에 사용자 정보를 추가하여 뷰로 전달
        model.addAttribute("user", user);
        
        // 사용자의 주소 목록 조회
        List<AddressDTO> addressList = mypageService.getAddressList(userEmail);
        
        // isDefault 컬럼을 기준으로 기본 배송지와 다른 배송지로 분리
        AddressDTO defaultAddress = null;
        List<AddressDTO> otherAddresses = new ArrayList<>();
        for (AddressDTO address : addressList) {
            if (address.isDefault()) {
                defaultAddress = address;
            } else {
                otherAddresses.add(address);
            }
        }
        model.addAttribute("defaultAddress", defaultAddress);
        model.addAttribute("otherAddresses", otherAddresses);
        
        
        model.addAttribute("addressList", addressList);
        return "/mypage/address";
    }
    
    // 주소지 추가
    @PostMapping("/my/address/insert")
    public String addAddress(AddressDTO addressDTO, Model model, HttpServletRequest request, HttpServletResponse response) throws IOException {
    	HttpSession session = request.getSession();
    	// 세션에서 사용자 이메일 가져오기
        String email = (String) session.getAttribute("userEmail");
        String userExists = mypageService.isExistId(email);
        
    	// isDefault의 데이터 타입 확인
        //Boolean variable = addressDTO.isDefault();
        //Class<?> variableType = variable.getClass();
        //System.out.println("Variable Type: " + variableType.getName());
        
        // isDefault의 데이터 타입을 변환
        String isDefaultStr = request.getParameter("isDefault"); // 클라이언트에서 전송한 "true" 또는 "false" 문자열 받기
        System.out.println("isDefaultStr : " + isDefaultStr);
        boolean isDefault = Boolean.parseBoolean(isDefaultStr); // 문자열을 boolean 값으로 변환
        System.out.println("isDefault : " + isDefault);
        
        /*
        // 기본 주소지로 설정되어 있는 주소지가 있는지 확인
        Address defaultAddress = mypageService.getAddressList(email);
        addressDTO.isDefault()
        
        // 기본 주소지로 설정된 주소지가 이미 존재하는 경우, isDefault 값을 false로 업데이트
        if (defaultAddress != null) {
            defaultAddress.setDefault(false);
            mypageService.updateAddress(defaultAddress);
        }*/

        
        // DTO에 set
        addressDTO.setEmail(email);
        addressDTO.setDefault(isDefault);
        System.out.println("controller : " + email + " & " + addressDTO.isDefault());
       

        // 사용자가 존재하면 주소 정보를 저장
        if (userExists == "exist") {
        	AddressDTO resultAddress = mypageService.insertAddress(email, addressDTO);
        	 System.out.println(resultAddress);
             // 요청 처리 로직 수행
             // JSON 형태로 응답을 보내기 위해 Content-Type을 설정
             response.setContentType("application/json");
             response.setCharacterEncoding("UTF-8");

             // Jackson ObjectMapper를 사용하여 JSON으로 변환하여 응답 전송
             ObjectMapper objectMapper = new ObjectMapper();
             String jsonResponse = objectMapper.writeValueAsString(resultAddress);
             response.getWriter().write(jsonResponse);
        } else {
        	return "redirect:/login";
        }
        
        // 새 배송지를 추가하고 주소록 페이지로 리다이렉트 또는 응답 처리
        return "/mypage/address";
    }
    
    // 결제 정보
    @GetMapping("/my/payment")
    public String showPayment(Model model, HttpServletRequest request) {
    	HttpSession session = request.getSession();
    	
        model.addAttribute("myContent", "This is the board page content.");
        return "/mypage/payment";
    }
    
    // 문의 내역글 조회
    @GetMapping("/my/board")
    public String showBoard(Model model, HttpServletRequest request) {
    	HttpSession session = request.getSession();
    	
        model.addAttribute("myContent", "This is the board page content.");
        return "/mypage/board";
    }
    
    // 후기 댓글 조회
    @GetMapping("/my/comment")
    public String showComment(Model model, HttpServletRequest request) {
    	HttpSession session = request.getSession();
    	
        model.addAttribute("myContent", "This is the comment page content.");
        return "/mypage/comment";
    }
}
