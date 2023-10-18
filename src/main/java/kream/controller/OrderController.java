package kream.controller;

import kream.bean.AdminProductDTO;
import kream.bean.OrderDTO;
import kream.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping(value = "order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping(value = "purchaseForm")
    public String purchase(HttpServletRequest request, @ModelAttribute OrderDTO orderDTO) {
        HttpSession session = request.getSession();
        String email = (String) session.getAttribute("userEmail");
        System.out.println(orderDTO.getSize());

        if(email == null) {
            return "redirect:/login";
        }else {
            orderDTO.setEmail(email);
            orderService.reserve(orderDTO);
            return "/kream/";
        }
    }

}
