package Pet.src.com.example;

public class PetMain {

    public static void main(String[] args) {
        Animal a;
        //test a spider with a spider reference
        Spider s = new Spider();
        s.eat();
        s.walk();
        playWithAnimal(s);        
        //test a spider with an animal reference
        a = new Spider();
        a.eat();
        a.walk();
        playWithAnimal(a);

        Pet p;
        Cat c = new Cat ("Tom");
        c.eat();
        c.walk();
        c.play();
        a = new Cat();
        a.eat();
        a.walk();
        p = new Cat();
        p.setName("Mr. Whiskers");
        p.play();
        Fish f = new Fish();
        f.setName("Guppy");
        f.eat();
        f.walk();
        f.play();
        a=new Fish();
        a.eat();
        a.walk();
    }
    
    public static void playWithAnimal(Animal a) {
        if(a instanceof Pet){
            ((Pet)a).play();
        }
        else{
            System.out.println("Danger! Wild Animal");
        }
    }
    
}