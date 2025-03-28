package PetComposition.src.com.example;

public class Spider extends Animal implements Ambulatory {

    private Ambulatory ambulatory;

    public Spider() {
        ambulatory =new AmbulatorImpl(8);
    }

    @Override
    public void walk() {
        ambulatory.walk();
    }
    @Override
    public void eat() {
        System.out.println("The spider eats a fly.");
    }
    
}