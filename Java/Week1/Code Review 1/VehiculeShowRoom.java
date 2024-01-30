public class  VehiculeShowRoom {
        public static void main (String[] args){
            Car car= new Car("BMW",2);
            Yacht yacht= new Yacht("Yamaha",25);


            System.out.println("Car Info");
            car.displayInfo();
            car.start();
            car.stop();
            System.out.println("Yacht Info");
            yacht.displayInfo();
            yacht.start();
            yacht.stop();



        }
}