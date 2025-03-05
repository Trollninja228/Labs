import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.HashMap;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;


public class LoginPage implements ActionListener {
    
    JFrame frame = new JFrame();
    JButton resetButton = new JButton("Reset");
    JButton logButton = new JButton("Login");
    JTextField IdField = new JTextField();
    JPasswordField PasswordField = new JPasswordField();
    JLabel IDLabel =new JLabel("User ID:");
    JLabel PasswordLabel = new JLabel("Password");
    JLabel MessageLabel = new JLabel();


    HashMap<String, String> logInfo = new HashMap<String, String>();

    LoginPage(HashMap<String, String> logInfoOri){
        
        logInfo = logInfoOri;

        IDLabel.setBounds(50,100);

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(420,420);
        frame.setLayout(null);
        frame.setVisible(true);

    }

    @Override
    public void actionPerformed(ActionEvent e) {
        
        throw new UnsupportedOperationException("Unimplemented method 'actionPerformed'");
    }

}
