import java.util.Date;
import java.text.Format;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;

public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        LocalDateTime time = LocalDateTime.now();
        return "Hello, "+name+". Lovely to see you. it's "+time;
    }
    
    public String dateAnnouncement() {
        // YOUR CODE HERE
        LocalDateTime time = LocalDateTime.now();
        return "It is currently "+ time;
    }
    
    public String respondBeforeAlexis(String conversation) {
        // YOUR CODE HERE
        String msg ="";
        if (conversation.contains("Alexis"))
        {msg =  "Right away, sir. She certainly isn't sophisticated enough for that.";}
        if (conversation.contains("Alfred"))
        { msg =  "At your service. As you wish, naturally.";}
        if (!conversation.contains("Alfred") && !conversation.contains("Alexis"))
        { msg = "Right. And with that I shall retire.";}
        return msg;
    }
    
	// NINJA BONUS
	// See the specs to overload the guestGreeting method
        // SENSEI BONUS
        // Write your own AlfredQuote method using any of the String methods you have learned!
}

