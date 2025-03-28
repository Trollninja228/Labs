package PetComposition.src.com.example;

public class Fish extends Animal implements Pet {

    private Nameable nameable = new NameableImpl();

    @Override
    public void eat() {
        System.out.println("Fish eat pond scum.");
    }


    @Override
    public void play() {
        System.out.println("Just keep swimming.");
    }

    


    @Override
    public void setName(String name) {
        this.nameable.setName(name);    
    }

    @Override
    public String getName() {
        return this.nameable.getName(); 
    }


}