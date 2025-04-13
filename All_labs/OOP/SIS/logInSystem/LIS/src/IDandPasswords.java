import java.util.HashMap;

public class IDandPasswords {
    HashMap <String, String> logInfo = new HashMap<String, String>();

    IDandPasswords(){

        logInfo.put("admin", "admin");
        logInfo.put("chibi", "KNIGHT");
        logInfo.put("land", "fall");
        
    }

    protected HashMap getLoginInfo(){
        return logInfo;
    }
}
