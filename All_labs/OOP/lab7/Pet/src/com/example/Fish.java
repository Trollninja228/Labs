package Pet.src.com.example;

public class Fish extends Animal implements Pet{
    public Fish() {
            super(0);
            //TODO Auto-generated constructor stub
        }
    
        protected String name;

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
        System.out.println("Just keep swimming.");
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'play'");
    }

    @Override
    public void eat() {
        System.out.println("Fish eat pond scum.");
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'eat'");
    }
    
    @Override
    public void walk(){
        System.out.println("Fish, of course, can't walk; they swim.");
    }
    
}
