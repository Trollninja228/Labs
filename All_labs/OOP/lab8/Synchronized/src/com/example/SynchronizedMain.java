package Synchronized.src.com.example;

public class SynchronizedMain {

    public static void main(String[] args) {
        Store store = Store.getInstance();
        store.addShirt(new Shirt("1", "Polo", "Rainbow", "Large"));
        // store.addShirt(new Shirt("2", "Polorizer", "RainbowDash", "Lx"));
        
        PracticeThread p1 = new PracticeThread();
        PracticeThread p2 = new PracticeThread(); 
        
        p1.start();
        p2.start();

        
    }
}