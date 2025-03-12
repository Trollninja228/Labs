class Test{
    static int m=30;
    public static class InnerTest {
                public int b;
                InnerTest(){
                    b=30;
                }

                public int ret(){
                    return 0;
                }
                
            }
            public static class InnerTest_1 extends InnerTest {
                public int c;
                InnerTest_1(){
                    super();
                    c=40;
                }
                @Override
                public int ret(){
                    return -1;
                }
                
            }
            public static void main(String[] args) {
                // System.out.println(m);
                InnerTest test=new InnerTest_1();
                InnerTest test1 = new InnerTest(); 
                System.out.println(test.ret());
                System.out.println(test1.ret());
                // System.out.println(test.c);
        
    }
}