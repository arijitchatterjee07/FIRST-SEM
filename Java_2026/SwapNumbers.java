import java.util.*;
class Solution 
{
    public static void solve() 
    {
      Scanner sc=new Scanner(System.in);
      int a,b;
      a=sc.nextInt();
      b=sc.nextInt();
      a=a+b;
      b=a-b;
      a=a-b;
      System.out.println(a+" "+b);
      sc.close();
    }
}