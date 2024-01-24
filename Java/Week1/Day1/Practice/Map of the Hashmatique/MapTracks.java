import java.util.Set;
import java.util.HashMap;

public class MapTracks {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("ghost of perdition", "GHOOOST OOOF PERDIITIIIOOON !!!");
        trackList.put("All stars", "so much to do so much to see so much to do so much to see so much to do so much to see ");
        trackList.put("Crawling", "CRAAAAWLING IIIN MY SKIIIIIN");
        trackList.put("Let it go !!", "...");


        System.out.println(trackList.get("Crawling"));
        Set<String> keys = trackList.keySet();
        for(String key : keys) {
            System.out.println(key + " : " +trackList.get(key));
            
        }
    }
}