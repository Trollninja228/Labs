import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SearchReplace {

    private String fileName = "All_labs\\OOP\\lab3\\StringsPractice02\\gettys.html";
    
    public static void main(String[] args) {
        SearchReplace sr = new SearchReplace();
        sr.run();
    }

    public void run() {
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String targetTag = "p";
            String replaceTag = "span";
            String attribute = "class";
            String value = "sentence";
            String line = "";
            int c = 1;
            // Create a Pattern object to match the entire line.
            Pattern pattern = Pattern.compile("(<" + targetTag + "[^>]*?>)(.*?)(</" + targetTag + ">)");

            while ((line = reader.readLine()) != null) {
                // Create a matcher
                Matcher match = pattern.matcher(line);
                // Find a match
                if(match.find()){
                    String newStart = replaceTag(match.group(1), targetTag, replaceTag);
                    newStart = replaceAttribute(newStart, attribute, value);
                    String newEnd = replaceTag (match.group(3), targetTag, replaceTag);
                    String newLine = newStart + match.group(2) + newEnd;
                    System.out.printf("%3d %s\n", c, newLine);
                }   
                else {
                    System.out.printf("%3d %s\n", c, line); // Печатает оригинальную строку
                }
                c++;
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }   
    }


        // Your code here
    public String replaceTag (String tag, String targetTag, String replaceTag) {
        Pattern p = Pattern.compile(targetTag); // target Tag is
       
        Matcher m = p.matcher(tag);
        
        return m.find() ? m.replaceFirst(replaceTag) : tag; // swap target with
        
        
        
    }

    
        // Your code here
    public String replaceAttribute (String tag, String attribute, String value) {

        Pattern p =  Pattern.compile(attribute + "=" + "\".*?\"");
        Matcher m = p.matcher(tag); // tag is text to replace
        
        if (m.find()) {
            return m.replaceFirst (attribute + "=" + "\"" + value +"\"");
        }
        else {
            return tag.replaceFirst(">", " " + attribute + "=\"" + value + "\">");
        }
    }
        
    
}
