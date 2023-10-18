package spring.conf;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AppConfig {
    private String appName;
    private String appVersion;

    public void printAppInfo() {
        System.out.println("Application Name: " + appName);
        System.out.println("Application Version: " + appVersion);
    }
}