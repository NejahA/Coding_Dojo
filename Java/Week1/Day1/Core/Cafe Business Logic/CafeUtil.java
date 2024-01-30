
import java.util.ArrayList;

public class CafeUtil {
    
    public int getStreakGoal(int weeks) {
        int sum = 0;
        for (int i =0; i<= weeks; i++){
            sum = sum+i;
        }
        return sum;
    }
    public int getStreakGoal() {
        int sum = 0;
        for (int i =0; i<= 10; i++){
            sum = sum+i;
        }
        return sum;
    }
    
    public double getOrderTotal(double[] prices) {
        double  total = 0;
        for (int i =0; i< prices.length ;i++){
            total = total + prices[i];
        }
        return total;
    }
    
    public void displayMenu(ArrayList<String> menuItems) {
        for (int i=0;i< menuItems.size();i++){
            System.out.println(""+i+" "+menuItems.get(i));
        }
    }
    
    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String username = System.console().readLine();
        System.out.println("Hello, "+username);
        System.out.println("There are "+customers.size() +" people in front of you");
        customers.add(username);
        
    }
    void printPriceChart(String product, double price, int maxQuantity){
        System.out.println(product);
        for (Integer i = 0; i< maxQuantity ;i++){
            if ( i == 0 ) {
            System.out.println(""+(i+1)+" - $"+price);
            }
            else {
            System.out.println(""+(i+1)+" - $"+(price*(i+1)-(i+1)*0.5));
            }
        }
    }
}

