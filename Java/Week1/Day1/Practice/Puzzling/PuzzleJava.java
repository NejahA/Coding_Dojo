import java.util.Random;
import java.util.ArrayList;

public class PuzzleJava {
    public ArrayList<Integer>  getTenRolls() {
        Random randMachine = new Random();
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        for (int i=0; i<10; i++){
            numbers.add (randMachine.nextInt((20 - 1) + 1) + 1);
        }
        return numbers;
    }
    public char getRandomLetter() {
        Random randMachine = new Random();
        
        char[] alphabet =  {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};

        char letter = alphabet[randMachine.nextInt(26)];
        return letter;
    }
    public String generatePassword(){
        String password = new String();
        password = "";
        for (int i=0;i<8;i++){
            password += getRandomLetter();
        }
        return password;
    }
    public ArrayList<String> getNewPasswordSet(int arrSize){
        ArrayList<String> pwSet = new ArrayList<String>();
        for (int i=0; i<arrSize;i++){
            pwSet.add(generatePassword());
        }
        return pwSet;
    }
    public ArrayList<String> shuffleArray (ArrayList<String> array){
        Random randMachine = new Random();
        ArrayList<String> shuffled = new ArrayList<String>();
        ArrayList<Integer> shuffledindexes = new ArrayList<Integer>();
        Integer index=Integer.valueOf(randMachine.nextInt(array.size())) ;
        for (int i=0; i<array.size();i++){
            while (shuffledindexes.contains(index)){
            index=Integer.valueOf(randMachine.nextInt(array.size()));
            }

            shuffled.add(array.get(index));
            shuffledindexes.add(index);
        }
        return shuffled;
    }
    }

