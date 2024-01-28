
public class Bat extends Mammal {
	
	public Bat() {
	setEnergy(300);
	}
	public void fly() {
		setEnergy(getEnergy()-50);
		System.out.println("The bat is airborne!!");
	}
	public void eatHumans() {
		setEnergy(getEnergy()+25);
		System.out.println("The bat just ate a human!!");
	}
	public void attackTown() {
		setEnergy(getEnergy()-100);
		System.out.println("The bat is attacking the town!!");
	}
}
