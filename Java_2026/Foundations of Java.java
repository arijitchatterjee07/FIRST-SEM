import java.util.*;
class Solution 
{
    public static void solve() 
    {
      Scanner sc=new Scanner(System.in);
      int marks;
      marks=sc.nextInt();
      if (marks > 90)
      {
        System.out.print("excellent");
      }
      else if (marks>80 && marks<=90)
      {
        System.out.println("good");
      }
      else if (marks>70 && marks<=80)
      {
        System.out.println("average");
      }
      else if (marks>60 && marks<=70)
      {
        System.out.println("below average");
      }
      else
      {
        System.out.print("fail");
      }
    sc.close();
    }
}