public class Car extends ShowRoom {
    private int numdDoors;

    public  Car(String brand,int numdDoors) {
        super(brand);
        this.numdDoors=numdDoors;
    }
    public void start () {
        System.out.println("Car Engine started");
    }
    public void stop () {
        System.out.println("Car Engine started");
    }
    public void displayInfo () {
        super.displayInfo();
        System.out.println("Type : Car");
        System.out.println("Number of doors : "+numdDoors);
    };

}