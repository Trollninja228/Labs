package PetComposition.src.com.example;

public class Cat extends Animal implements Pet,Ambulatory{
    
    private Nameable nameable = new NameableImpl();
    
    private Ambulatory ambulatory;


    public Cat() {
        this("Fluffy");
    }
    
    public Cat(String name) {
        ambulatory =new AmbulatorImpl(4);
        this.nameable.setName(name);
    }

    @Override
    public void walk() {
        ambulatory.walk();
    }

    @Override
    public void eat() {
        System.out.println("Cats like to eat spiders and fish.");
    }

    @Override
    public void setName(String name) {
        this.nameable.setName(name);    
    }

    @Override
    public String getName() {
        return this.nameable.getName(); 
    }

    @Override
    public void play() {
        System.out.println(nameable.getName() + " likes to play with string.");
    }
    
}