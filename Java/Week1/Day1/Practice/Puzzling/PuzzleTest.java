import java.util.ArrayList;
import java.util.Random;
public class PuzzleTest {
    
	public static void main(String[] args) {
		PuzzleJava generator = new PuzzleJava();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);
		char randomLetter = generator.getRandomLetter();
		System.out.println(randomLetter);
		String randomPw = generator.generatePassword();
		System.out.println(randomPw);
		ArrayList<String> randomPwSet = generator.getNewPasswordSet(10);
		System.out.println(randomPwSet);
		
		ArrayList<String> shuffleSet = generator.shuffleArray(randomPwSet);
		System.out.println(shuffleSet);
		
	}
}
