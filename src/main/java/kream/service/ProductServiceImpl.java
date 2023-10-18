package kream.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kream.bean.AdminProductDTO;
import kream.dao.ProductDAO;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductDAO productDAO;

    @Override
    public AdminProductDTO getProduct(String productId) {
        return productDAO.getProduct(productId);
    }

    @Override
    public void hitUpdate(String productId) {
        productDAO.hitUpdate(productId);
    }

    @Override
    public List<Object> getCategoryRecomend(String productId, String gender, String category2) {
        Map<String, String> productMap = new HashMap<>();
        productMap.put("productId", productId);
        productMap.put("gender", gender);
        productMap.put("category2", category2);
        return productDAO.getCategoryRecomend(productMap);
    }

    @Override
    public List<Object> getBrandRecomend(String productId, String brand) {
        Map<String, String> productMap = new HashMap<>();
        productMap.put("productId", productId);
        productMap.put("brand", brand);
        return productDAO.getBrandRecomend(productMap);
    }
    
    @Override
    public void setWishList(String userEmail, String productId) {
        Map<String, String> productMap = new HashMap<>();
        productMap.put("productId", productId);
        productMap.put("userEmail", userEmail);
        productDAO.setWishList(productMap);
    }

    @Override
    public void deleteWishList(String userEmail, String productId) {
        Map<String, String> productMap = new HashMap<>();
        productMap.put("productId", productId);
        productMap.put("userEmail", userEmail);
        productDAO.deleteWishList(productMap);
    }

    @Override
    public int countWishList(String productId) {
        return productDAO.countWishList(productId);
    }

    @Override
    public int isWishList(String userEmail, String productId) {
        Map<String, String> productMap = new HashMap<>();
        productMap.put("productId", productId);
        productMap.put("userEmail", userEmail);
        return productDAO.isWishList(productMap);
    }

}
