import java.util.Scanner;

class Data {
    private double sum;
    private double max;
    private int count;

    public Data() {
        sum = 0;
        max = Double.NEGATIVE_INFINITY;
        count = 0;
    }

    public void addValue(double value) {
        sum += value;
        if (value > max) {
            max = value;
        }
        count++;
    }

    public double getAverage() {
        if (count == 0) {
            return 0;
        }
        return sum / count;
    }

    public double getMax() {
        if (count == 0) {
            return 0;
        }
        return max;
    }
}
// ABAI VERY smart! GOOD solution! 
public class Analyzer {
    public static void main(String[] args) {
        
}