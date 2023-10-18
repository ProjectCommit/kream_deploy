package kream.service;

import java.util.List;
import java.util.Objects;

public interface ProductOptionService {
    public List<String> getProductColor(String productId);

    public List<Object> getProductSize(String productId, String productColor);
}