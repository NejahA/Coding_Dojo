
public class Phone extends Device {

	public Phone() {
		super();
		// TODO Auto-generated constructor stub
	}
	public void makeCall() {
		setBattery(getBattery()-5);	
		if (getBattery()<10) {
			System.out.println("Battery critical.");
		}
	}
	public void playGame() {
		if (getBattery()>=25) {			
			setBattery(getBattery()-20);	
			if (getBattery()<10) {
				System.out.println("battery critical.");
			}
		}
		else {
			System.out.println("Battery below 25%.");
		}
	}
	public void charge () {
		setBattery(getBattery()+50);	
	}
	
	 
}
