import java.util.Scanner;

public class EX9_Even_number_inRange 
{
		public static void main(String[] args) 
		{
			int n;
			
			System.out.print("Enter Range :");
			
			Scanner sc = new Scanner(System.in);
			
			n = sc.nextInt();		
			
			for (int i = 0; i <= n; i=i+2) 
			{
				System.out.println(i);
				
			}
		}

}


//Output:
/*

Enter Range :10
0
2
4
6
8
10





*/
