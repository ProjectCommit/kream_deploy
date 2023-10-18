package kream.controller;

import kream.bean.*;
import kream.service.ProductBoardService;
import kream.service.ProductOptionService;
import kream.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping(value = "product")
public class ProductPageController {
    @Autowired
    private ProductService productService;
    @Autowired
    private ProductOptionService productOptionService;
    @Autowired
    private ProductBoardService productBoardService;

    @GetMapping(value = "productsForm")
    public String productsForm(HttpServletRequest request, @RequestParam int productId, @RequestParam int page) {
        HttpSession session = request.getSession();
        String userEmail = (String) session.getAttribute("userEmail");

        if(userEmail == null) {
            return "redirect:/login";
        }else {
            return "/product/productsForm";
        }
    }
    
    @PostMapping(value = "productService")
    @ResponseBody
    public AdminProductDTO productService(@RequestParam String productId) {
        return productService.getProduct(productId);
    }

    @PostMapping(value = "productHitService")
    @ResponseBody
    public void productHitService(@RequestParam String productId) {
        productService.hitUpdate(productId);
    }

    @PostMapping(value = "productColorService")
    @ResponseBody
    public List<String> productColorService(@RequestParam String productId) {
        return productOptionService.getProductColor(productId);
    }

    @PostMapping(value = "productSizeService")
    @ResponseBody
    public List<Object> productSizeService(@RequestParam String productId, @RequestParam String productColor) {
        return productOptionService.getProductSize(productId, productColor);
    }

    @PostMapping(value = "categoryRecomendService")
    @ResponseBody
    public List<Object> categoryRecomendService(@RequestParam String productId, @RequestParam String gender, @RequestParam String category2) {
        return productService.getCategoryRecomend(productId, gender, category2);
    }

    @PostMapping(value = "brandRecomendService" )
    @ResponseBody
    public List<Object> brandRecomendService(@RequestParam String productId, @RequestParam String brand) {
        return productService.getBrandRecomend(productId, brand);
    }

    @GetMapping(value = "boardWriteForm")
    public String boardWriteForm(@RequestParam int productId, @RequestParam String nickname) {
        return "/product/boardWriteForm";
    }

    @PostMapping(value = "getBoardList")
    @ResponseBody
    public List<Object> productBoard(@RequestParam String productId, @RequestParam String page) {
        return productBoardService.getBoardList(productId, page);
    }

    @PostMapping(value = "setProductBoard")
    @ResponseBody
    public void setProductBoard(@ModelAttribute ProductBoardDTO productBoardDTO) {
        productBoardService.setProductBoard(productBoardDTO);
    }

    @PostMapping(value = "getBoardPaging")
    @ResponseBody
    public BoardPaging getBoardPaging(@RequestParam String productId, @RequestParam String page) {
        return productBoardService.getBoardPaging(productId, page);
    }

    @PostMapping(value = "getReplyList")
    @ResponseBody
    public List<Object> getReplyList(@RequestParam String productId, @RequestParam String boardId) {
        return productBoardService.getReplyList(productId, boardId);
    }

    @PostMapping(value = "setProductReply")
    @ResponseBody
    public void setProductReply(@RequestParam String productId,
                                @RequestParam String boardId,
                                @RequestParam String boardContent,
                                @RequestParam String nickname) {
        productBoardService.setProductReply(productId, boardId, boardContent, nickname);
    }
    
    @PostMapping(value = "countWishList")
    @ResponseBody
    public int countWishList(String productId) {
        return productService.countWishList(productId);
    }

    @PostMapping(value = "setWishList")
    @ResponseBody
    public void setWishList(HttpServletRequest request, String productId) {
        HttpSession session = request.getSession();
        String userEmail = (String) session.getAttribute("userEmail");
        productService.setWishList(userEmail, productId);
    }

    @PostMapping(value = "deleteWishList")
    @ResponseBody
    public void deleteWishList(HttpServletRequest request, String productId){
        HttpSession session = request.getSession();
        String userEmail = (String) session.getAttribute("userEmail");

        productService.deleteWishList(userEmail, productId);
    }

    @PostMapping(value = "isWishList")
    @ResponseBody
    public int isWishList(HttpServletRequest request, String productId) {
        HttpSession session = request.getSession();
        String userEmail = (String) session.getAttribute("userEmail");
        return productService.isWishList(userEmail, productId);
    }
}
