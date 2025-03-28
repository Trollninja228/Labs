package PetComposition.src.com.example;

public abstract class Animal {
    
    protected int legs;
    

    
    public void walk() {
        System.out.println("This animal walks on " + legs + " legs.");
    }
    
    public abstract void eat();
    
}