public class Yacht extends ShowRoom {
    private int length;

    public Yacht(String brand,int length) {
        super(brand);
        this.length=length;
    }
    public void start () {
        System.out.println("Yacht Engine started");
    }
    public void stop () {
        System.out.println("Yacht Engine started");
    }
    public void displayInfo () {
        super.displayInfo();
        System.out.println("Type : Yacht");
        System.out.println("Yacht's length : "+ length + " feet");
    }

}