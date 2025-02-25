import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class calc implements ActionListener{

    JFrame frame;
    JTextField text;
    JButton[] numButton = new JButton[10];
    JButton[] funcButton = new JButton[8];

    
    calc(){

    }
    public static void main(String[] args){
        calc c= new calc();

    }
    @Override
    public void actionPerformed(ActionEvent e) {
        throw new UnsupportedOperationException("Unimplemented method 'actionPerformed'");
    }

}
    