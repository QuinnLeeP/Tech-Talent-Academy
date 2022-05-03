import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		// Area Map
		Map treasureMap = new Map(10, 10);
		System.out.println("The map is " + treasureMap.getX() + " by " + treasureMap.getY() + " blocks");
		
		//Starting Position
		int currentX = (int) (Math.random() * 11);
		int currentY = (int) (Math.random() * 11);
		System.out.println("Your current position is: X - " + currentX + " &" + " Y - " + currentY);
		
			
		
		
		// Asking the user for a direction and using that input for the direction
		
		System.out.println("Find the treasure and win the game, try to avoid black holes which take you back to a random location.");
		Scanner myScanner = new Scanner(System.in);
		System.out.println("Which direction do you want to go in? N for North, E for East, S for South and W for West");
		
		String direction = myScanner.nextLine();
		System.out.println("You moved " + direction);
		
		Main movement = new Main();
		movement.move(direction);
	
		
		Characters playerOne = new Characters("Axel", 3, "Speed", "Fire");
		
		
		Characters enemy = new Characters("Scaro", 5, "Water");
		

	}

}
