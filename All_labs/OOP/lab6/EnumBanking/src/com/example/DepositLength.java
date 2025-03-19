package EnumBanking.src.com.example;

public class DepositLength{
    private int days;


    private DepositLength(int days){
        this.days=days;
    }

    public int getDays(){
        return days;
    }

    public static DepositLength THREE_MONTHS(){
        return new DepositLength(90);
    }
    public static DepositLength SIX_MONTHS(){
        return new DepositLength(180);
    }
}
