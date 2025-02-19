
package origin;

public class Manager extends Employee{
    private String deptName;
    private Employee[] staff;
    private int employeeCount = 0;

    public Manager(int empId, String name,String ssn, double salary, String deptName, Employee[] staff){
        super(empId, name, ssn, salary);
        this.deptName = deptName;
        this.staff = staff;
    } 

    public String getDeptName(){
        return deptName;
    }

    public int findEmployee(Employee emp){
        int i=0;
        while(staff[i]!= emp){
            // System.out.println(i);
            i++;
            if(i==staff.length) return -1;
        }
        // System.out.println("END             ");
        return i;
    }

    public boolean addEmployee(Employee myEmp){
        int isExist = 0;

        isExist = findEmployee(myEmp);
        if(isExist==-1) {
            staff[employeeCount] = myEmp;
            employeeCount++;

            return true;
        }

        

        return false;
    }

      public boolean removeEmployee(Employee chel, Manager man) {
        int i = man.findEmployee(chel);
        int j=0;
        int c=0;

        Employee newStaff[]=new Employee[man.staff.length-1];

        if(i == -1){
            return false;
        }
        employeeCount--;
        while (true) {
            if(j==man.staff.length){
                break;
            }
            if (j==i) {
                j++;
                continue;
            }
            newStaff[c] =man.staff[j];
            c++;
            j++;
        }
        man.staff=newStaff;
        
        return true;
      }
    public void printStaff(Manager man){
        System.out.println(man.getName());
        for(int i=0;i<staff.length;i++){
            if(staff[i]!=null){
                System.out.println(staff[i].getName());
                System.out.println(staff[i].getEmpID());
                System.out.println(staff[i].getSSN());
                System.out.println(staff[i].getSalary());
            }
        }
    }
    void printLenStaff(){
        System.out.println(staff.length);
    }

}