public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripPrice = 4;
        double lattePrice = 5;
        double cappuccinoPrice = 2;
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";

        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;

    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        if ( isReadyOrder1 ) {
        System.out.println(readyMessage + customer1); 
        }
        else {
            System.out.println(pendingMessage + customer1);
        }
        if ( isReadyOrder2 ) {
        System.out.println(readyMessage + customer2); 
        }
        else {
            System.out.println(pendingMessage + customer2);
        }
    	// ** Your customer interaction print statements will go here ** //
            System.out.println(displayTotalMessage +  (lattePrice-mochaPrice));
    }
}
