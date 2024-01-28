import java.util.ArrayList;
public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item> items = new ArrayList<Item> ();
    public Order( ){
        this.name="Guest";
        // this.items=  = new ArrayList<Item> ();
        // ArrayList<Item> this.items=  =new ArrayList<Item> ();
            this.items=items;
    }
    
    public Order(  String name ){
        this.name=name;
        // this.items=  = new ArrayList<Item> ();
        // ArrayList<Item> this.items=  =new ArrayList<Item> ();

    }


    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public boolean getReady() {
        return this.ready;
    }
    public void setReady(boolean ready) {
        this.ready = ready;
    }
    public ArrayList<Item> getItems() {
        return this.items;
    }
    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }


    public void addItem(Item newitem){
        this.items.add(newitem);
        
    }
    public String getStatusMessage(){
        if (getReady()==true){
            return "Your order is ready.";
        }
        else {
            return "Thank you for waiting. Your order will be ready soon.";
        }
    }
    
    public double getOrderTotal(){
        double total =0;
        
        for (int i=0;i<getItems().size();i++){
            total += getItems().get(i).getPrice();
        }
        return total;
    }

    public String display(){
        String message = "";
        message +="Customer name: "+getName()+ " \n";
        for (int i=0;i<getItems().size();i++){
            message +=""+getItems().get(i).getName()+" - "+getItems().get(i).getPrice()+"\n";
            }
        message+= "total : "+getOrderTotal();
        return message;
    }
}