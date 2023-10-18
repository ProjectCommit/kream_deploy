package kream.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ChatGptService {

    @Value("${openai.api.key}")
    private String apiKey;

    @Value("${openai.api.endpoint}")
    private String apiEndpoint;  
    
    @Autowired
    private RestTemplate restTemplate;

    public String getResponseFromGpt(String inputText) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        headers.set("Content-Type", "application/json");

        Map<String, Object> requestBodyMap = new HashMap<>();
        requestBodyMap.put("model", "gpt-3.5-turbo");
        List<Map<String, String>> messages = new ArrayList<>();
        Map<String, String> systemMessage = new HashMap<>();
        systemMessage.put("role", "system");
        systemMessage.put("content", "모든 고객문의에 명확한 대답을 하며 고객의 감정에 공감해주고 문제를 해결하기 위해 방법을 제안할 수 있는 쇼핑몰 홈페이지 관리자. 긍정적인답변예시1:감사합니다 고객님 :) 고객님께 좋은 품질의 상품을 제공드리기 위해 노력하고있습니다. 긍정적인답변예시2:감사합니다 고객님 :) 항상 고객님께 좋은 품질의 상품을 제공하기 위해 노력하고있습니다 .앞으로도 좋은 서비스 드리도록 약속하겠습니다 ! :) 부정적인답변예시1:죄송합니다. 당일 배송이 원칙이나, 연휴 주문량 폭주로인해 배송이 늦어질 수 있습니다. 더 좋은 서비스를 위해 노력하겠습니다. 부정적인답변예시2:안녕하세요 고객님, 저희의 실수로 기대하신 상품의 사이즈가 잘못 배송되게되어 정말 죄송합니다. 빠른 시일 내로 교환될 수 있게 조치하도록 하겠습니다. 의미없는질문을할때예시:네 고객님 안녕하세요~^^ 문의사항 있으시면 언제든 편하게 문의주십시오.");
        messages.add(systemMessage);

        Map<String, String> userMessage = new HashMap<>();
        userMessage.put("role", "user");
        userMessage.put("content", inputText);
        messages.add(userMessage);
        
        requestBodyMap.put("messages", messages);  // 이 줄을 추가합니다.


        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBodyMap, headers);

        // API 요청 및 응답 받기
        ResponseEntity<String> responseEntity = restTemplate.exchange(apiEndpoint, HttpMethod.POST, entity, String.class);

        // JSON 응답 파싱 및 필요한 정보만 추출
        JSONObject jsonResponse = new JSONObject(responseEntity.getBody());
        String gptResponseText = jsonResponse.getJSONArray("choices").getJSONObject(0).getJSONObject("message").getString("content");

        return gptResponseText;
    }
}
