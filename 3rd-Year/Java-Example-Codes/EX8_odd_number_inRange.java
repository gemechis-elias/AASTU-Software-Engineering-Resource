import java.util.Scanner;

public class EX8_odd_number_inRange 
{
	public static void main(String[] args) 
	{
		int n;
		
		System.out.print("Enter Range :");
		
		Scanner sc = new Scanner(System.in);
		
		n = sc.nextInt();		
		
		for (int i = 1; i <= n; i=i+2) 
		{
			System.out.println(i);
			
		}
	}

}


//Output :
/*


Enter Range : 30
1
3
5
7
9
11
13
15
17
19
21
23
25
27
29





*/
