package Synchronized.src.com.example;

public class PurchasingAgent {

    public PurchasingAgent(){
        System.out.println("Instance created!");
    }

    public void purchase(){
        Store store = Store.getInstance();
        Thread t = Thread.currentThread();
        System.out.println("Thread:"+t.getName()+","+t.getId());
        synchronized(store){ 
        // {   
            if(store.getShirtCount()>=1){
                if(store.authorizeCreditCard("1234", 15.00)){
                    Shirt shirt = store.takeShirt();
                    System.out.println("Purchase is success!\n");
                    System.out.println(shirt);  
                    // System.out.println(Thread.currentThread().getPriority());
                }
            }else{
                System.out.println("No shirts!");
            }
        }
            
    }
}
