
public class TestZookeeper {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Gorilla gorilla = new Gorilla();
		gorilla.displayEnergy();
		gorilla.climb();
		gorilla.throwSomething();
		gorilla.eatBananas();
		gorilla.displayEnergy();
		
		Bat bat = new Bat();
		bat.displayEnergy();
		bat.fly();
		bat.attackTown();
		bat.eatHumans();
		bat.displayEnergy();
	}

}
