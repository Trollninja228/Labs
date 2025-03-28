package PetComposition.src.com.example;

public class PetMain {

    public static void main(String[] args) {
        Animal a;
        //test a spider with a spider reference
        Spider s = new Spider();
        s.eat();
        AnimalWalk(s);
        //test a spider with an animal reference
        a = new Spider();
        a.eat();
        AnimalWalk(a);

        Pet p;

        Cat c = new Cat("Tom");
        c.eat();
        c.play();

        AnimalWalk(c);

        a = new Cat();
        a.eat();
        p = new Cat();
        p.setName("Mr. Whiskers");
        p.play();

        AnimalWalk(a);



        Fish f = new Fish();
        f.setName("Guppy");
        f.eat();
        f.play();
        a = new Fish();
        a.eat();
        AnimalWalk(a);
        AnimalWalk(f);


        playWithAnimal(s);
        playWithAnimal(c);
        playWithAnimal(f);
    }

    public static void AnimalWalk(Animal a){
        if (a instanceof Ambulatory){
            a.walk();
        } else{
            System.out.println("No legs");
        }
    }
    public static void playWithAnimal(Animal a) {
        if (a instanceof Pet) {
            Pet p = (Pet) a;
            p.play();
        } else {
            System.out.println("Danger! Wild Animal");
        }
    }
}