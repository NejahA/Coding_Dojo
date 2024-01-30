public class ShowRoom implements Vehicule {
    private String brand;

    //  Constructor
    public ShowRoom (String brand){
        this.brand= brand;
    }

    public void displayInfo(){
        System.out.println("Brand: "+brand);
    }

    // GETTERS && SETTERS
    public String getBrand(){
        return this.brand;
    }
    public void setBrand(String brand){
        this.brand=brand;
    }
}