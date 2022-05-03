
public class Map {
	
	private int x;
	private int y;
	private int currentX;
	private int currentY;
	
	public void move(String direction) {
		if (direction.equals("N")) {
			if (this.currentY == this.y) {
				this.currentY = 0;
			} else {
				this.currentY = this.currentY + 1;
				System.out.println("Your current location is X - " + currentX + " & " + "Y - " + currentY);
			}
		} else if (direction.equals("S")) {
			if (this.currentY == this.y) {
				this.currentY = 0;
			} else {
				this.currentY = this.currentY - 1;
				System.out.println("Your current location is X - " + currentX + " & " + "Y - " + currentY);
			}
		} else if (direction.equals("E")) {
			if (this.currentX == this.x) {
				this.currentX = 0;
			} else {
				this.currentX = this.currentX + 1;
				System.out.println("Your current location is X - " + currentX + " & " + "Y - " + currentY);
			}
		} else if (direction.equals("W")) {
			if (this.currentX == this.x) {
				this.currentX = 0;
			} else {
				this.currentX = this.currentX - 1;
				System.out.println("Your current location is X - " + currentX + " & " + "Y - " + currentY);
			}
		} 
		if (this.currentX > 10 || this.currentY > 10) {
			this.currentX = 0;
			this.currentY = 0;
		} else if (this.currentX < 0 || this.currentY < 0) {
			this.currentX = 0;
			this.currentY = 0;
		}
		if (this.currentX == 8 && this.currentY == 3) {
			System.out.println("Congratulations!! You've found the treasure!");
		} else if (this.currentX == 1 && this.currentY == 5) {
			System.out.println("Oh no! You've fell in a black hole, try again!");
		}
		
	}
	
	public int getX() {
		return this.x;
	}
	
	public int getY() {
		return this.y;
	}
	
	public Map(int x, int y) {
		this.x = x;
		this.y = y;
	}
	
	

}