package kream.service;

import java.util.List;

import kream.bean.AdminProductDTO;

public interface ProductService {

    public AdminProductDTO getProduct(String productId);

    public void hitUpdate(String productId);

    public List<Object> getCategoryRecomend(String productId, String gender, String category2);

    public List<Object> getBrandRecomend(String productId, String brand);
    
    public void setWishList(String userEmail, String productId);

    public void deleteWishList(String userEmail, String productId);

    public int countWishList(String productId);

    public int isWishList(String userEmail, String productId);
}
