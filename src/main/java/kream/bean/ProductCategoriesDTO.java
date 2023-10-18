package kream.bean;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ProductCategoriesDTO {
	private List<String> cate1Values;
	private List<String> cate2Values;
	private List<String> cate3Values;
	private List<String> cate4Values;
	private List<String> cate5Values;
}
