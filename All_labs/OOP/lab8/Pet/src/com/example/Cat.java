package Pet.src.com.example;

public class Cat extends Animal implements Pet{

    protected String name;
    public Cat(String name) {
            super(4);
            this.name=name;
            //TODO Auto-generated constructor stub
        }
    public Cat() {
        this("Fluffy");
    }
    @Override
    public String getName() {
        return name;    
    }

    @Override
    public void setName(String name) {
        this.name=name;
    }

    @Override
    public void play() {
        System.out.println(name+" likes to play with string.");
    }

    @Override
    public void eat() {
        System.out.println("Cats likes eat to spiders and fish.");
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'eat'");
    }

    
}
