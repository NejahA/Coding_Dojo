
public class Gorilla extends Mammal {

	public Gorilla() {
		super();
		// TODO Auto-generated constructor stub
	}
	public void throwSomething() {
		setEnergy(getEnergy()-5);
		System.out.println("The gorilla threw something!");
	}
	public void eatBananas() {
		setEnergy(getEnergy()+10);
		System.out.println("The gorilla ate bananas and now is satisfied!");
	}
	public void climb() {
		setEnergy(getEnergy()-10);
		System.out.println("The gorilla climbed a tree!");
	}
}
