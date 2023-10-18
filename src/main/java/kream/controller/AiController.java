package kream.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kream.bean.ChatGPTDTO;
import kream.service.ChatGptService;

@RestController
public class AiController {

    @Autowired
    private ChatGptService chatGptService;
    
    private static final Logger logger = LoggerFactory.getLogger(AiController.class);

    @PostMapping(value="/chatGPT", produces="text/html; charset=UTF-8")
    public ResponseEntity<?> chatWithGpt(@RequestBody ChatGPTDTO chatGPTDTO) {
        if(chatGPTDTO == null || chatGPTDTO.getInputText() == null || chatGPTDTO.getInputText().isEmpty()) {
            logger.warn("잘못된 요청 데이터를 받았습니다.");
            return new ResponseEntity<>("잘못된 요청 데이터입니다.", HttpStatus.BAD_REQUEST);
        }
        
        String response;
        try {
            response = chatGptService.getResponseFromGpt(chatGPTDTO.getInputText());
            
            if(response == null || response.isEmpty()) {
                logger.error("ChatGptService로부터 응답을 받지 못했습니다.");
                return new ResponseEntity<>("서비스 오류 발생", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            logger.error("ChatGptService와 통신 중 오류 발생: ", e);
            return new ResponseEntity<>("서비스 오류 발생", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return ResponseEntity.ok(response);
    }
}
