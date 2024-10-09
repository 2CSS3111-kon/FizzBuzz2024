import java.util.Scanner;
public class section1{
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);

        System.out.print("整数を入力してください>>");
        int n = sc.nextInt();

        for(int i = 1; i <= n; i++){
            if((i%3 == 0)&&(i%5 != 0)){
                System.out.print("Fizz,");
            }
            else if((i%3 != 0)&&(i%5 == 0)){
                System.out.print("Buzz,");
            }
            else if((i%3 == 0)&&(i%5 == 0)){
                System.out.print("Fizz Buzz,");
            }
            else{
                System.out.print(i+",");
            }
        }
    }
}