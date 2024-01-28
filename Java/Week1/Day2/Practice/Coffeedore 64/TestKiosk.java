import java.util.ArrayList;
public class TestKiosk {
    public static void main(String[] args) {

    CoffeeKiosk kiosk = new CoffeeKiosk();
    kiosk.addMenuItem("latte",4.0);
    kiosk.addMenuItem("cappuccino",3.5);
    kiosk.displayMenu();
    // Order order1 = new Order();
    Order order2 = new Order();
    kiosk.addMenuItemByInput();
    kiosk.newOrder();
    // Order order3 = new Order("Achref");
    // Order order4 = new Order("Najla");
    // Order order5 = new Order("Melek");

    // Item item1 = new Item("mocha",3.0);
    // Item item2 = new Item("latte" , 4.0);
    // Item item3 = new Item("drip coffee" ,1.5 );
    // Item item4 = new Item("cappuccino",3.5);
    
    // order3.addItem(item1);
    // order3.addItem(item2);
    // order3.addItem(item3);
    // order3.addItem(item4);

    // order4.addItem(item1);
    // order4.addItem(item2);

    // order5.addItem(item3);
    // order5.addItem(item4);

    // System.out.println(order4.getStatusMessage());
    // order4.setReady(true);
    // System.out.println(order4.getStatusMessage());

    // System.out.println (order3.display());
    // System.out.println (order3.getOrderTotal());

    }
}
