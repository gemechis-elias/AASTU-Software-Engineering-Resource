import java.util.Scanner;

public class EX10_Sum_odd_or_Even 
{
	public static void main(String[] args) 
	{
		int n, sum=0;
		
		System.out.print("Enter a Number : ");
		
		Scanner sc = new Scanner(System.in);
		
		n = sc.nextInt();
		
		if (n%2==0) 
		{
			for (int i = 0; i <= n; i=i+2) 
			{
				sum = sum + i;
			}
			System.out.println("Sum of Even Number is : " + sum);
			
		} 
		else 
		{
			for (int i = 1; i <= n; i=i+2) 
			{
				sum = sum + i;
			}
			System.out.println("Sum of odd Number is : " + sum);
		}
		
	}

}


/* Output:


Enter a Number : 20
Sum of Even Number is : 110



*/
