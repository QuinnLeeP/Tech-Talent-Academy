package Java;


public class results {

	public static void main(String[] args) {
		

		//Initialising the test score variables and the percentage variable
		int physics = 100;
		int chemistry = 145;
		int biology = 100;
		int total = physics + chemistry + biology;
		int percentage = (total * 100) / 450;
		
		//Print all of the exam scores
		System.out.println("You achieved a " + physics + " in Physics\n"
				           + "Scored a " + chemistry + " in Chemistry\n" +
				           "And earnt a mark of " + biology + " in Biology");
		
		//Print the overall percentage score
		System.out.println("Overall your total percentage mark is " + percentage + "%" );
		
		
		//If statement to evaluate the percentage mark and if any of the exam marks are under 60
		if (percentage < 60 || physics < 60 || chemistry < 60 || biology < 60) {
			System.out.println("You haven't scored an overall mark to meet the pass requirement. Please try again.");
		} else {
			System.out.println("You have scored the overall mark to pass, congratulations!!");
		}
		
	}

}
