import java.util.ArrayList;
public class CoffeeKiosk  {
    private ArrayList<Item> menu = new ArrayList<Item> ();
    private ArrayList<Order> orders = new ArrayList<Order> ();
    public CoffeeKiosk (){
        this.menu = menu;
        this.orders= orders;
    }

        public ArrayList<Item> getMenu() {
        return this.menu;
    }
    public void setMenu(ArrayList<Item> menu) {
        this.menu = menu;
    }

        public ArrayList<Order> getOrders() {
        return this.orders;
    }
    public void setOrders(ArrayList<Order> orders) {
        this.orders = orders;
    }
    public void addMenuItem(String name, double price){
        Item newitem = new Item(name,price, getMenu().size());
        // System.out.println("getMenu().size()-1 = ",getMenu().size()-1 );
        ArrayList<Item> newmenu = getMenu();
        newmenu.add(newitem);
        setMenu(newmenu);
    }
    public void displayMenu(){
        for (int i=0; i<getMenu().size();i++){

        System.out.println(""+(getMenu().get(i).getIndex())+ " "+ getMenu().get(i).getName() +" -- "+getMenu().get(i).getPrice() +" DT");
        }
    }
    public void newOrder() {
        
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
        Order newOrder = new Order(name);
        displayMenu();
    	// Your code:
        // Create a new order with the given input string
        // Show the user the menu, so they can choose items to add.
        

    	// Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();


        
        // Write a while loop to collect all user's order items
                    ArrayList<Item> addeditem =newOrder.getItems();
        while(!itemNumber.equals("q")) {
            
                boolean isVaild = false; 
            for (int i=0; i<getMenu().size();i++){
                if (itemNumber.equals(""+i)){

                    addeditem.add(getMenu().get(i));
                    newOrder.setItems(addeditem);
                    isVaild = true; 
                }
                }
                    if (isVaild==false){
                    System.out.println("Please enter a VALID menu item index or q to quit:");
                    itemNumber = System.console().readLine();
                    }
                    if (isVaild==true){
                    System.out.println("Please enter a menu item index or q to quit:");
                    itemNumber = System.console().readLine();
                    }
    }
        ArrayList<Order> updatedOrders=getOrders();
        updatedOrders.add(newOrder);
        setOrders(updatedOrders);
        System.out.println(getOrders().get(getOrders().size()-1).display());

        ;


    }
    public void addMenuItemByInput(){
        System.out.println("Please enter a menu item name:");
        String itemName = System.console().readLine();
        System.out.println("Please enter a menu item price:");
        String itemPrice = System.console().readLine();
        Item newitem = new Item(itemName,Double.parseDouble(itemPrice), getMenu().size());
        // System.out.println("getMenu().size()-1 = ",getMenu().size()-1 );
        ArrayList<Item> newmenu = getMenu();
        newmenu.add(newitem);
        setMenu(newmenu);
    } 

}
