package kream.bean;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Component
@Setter
@Getter
public class ProductOptionDTO {
    private int productId;
    private String productColor;
    private String size;
    private int stock;
    private int quickShip;
}
