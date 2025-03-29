package PetComposition.src.com.example;

public class AmbulatorImpl implements Ambulatory{

    private int legs;

    public AmbulatorImpl(int legs){
        this.legs=legs;
    }
    @Override
    public void walk() {
        System.out.println("This animal walks on " + this.legs + " legs.");
    }
    
}
