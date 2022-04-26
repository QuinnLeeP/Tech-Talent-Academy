package Java;

public class Main {

	public static void main(String[] args) {
		
		//Initialising the string and sentence 'splitter'
		String sentence = "Are you as excited as I am ?";
		String[] split = sentence.split(" ");
		String reverseSentence = "";
		
		// Loop to iterate over the sentence backwards.
		for (int i = split.length - 1; i >= 0; i--) {
			reverseSentence += (split[i] + " ");
		}
		// Print the value of the reversedSentence string
		System.out.println(reverseSentence);
		
		
		//Initialising the words array and reversedWord strings
		String[] wordList = {"Stressed", "Parts", "Straw", "Keep", "Wolf"};
		String reversedWord;
		
		//Loop to access the words in the array
		for (int i = wordList.length - 1; i >= 0; i--) {
		     reversedWord = "";
		     //Another loop to iterate over the words backwards and add that value to reversedWord
		     for (int j = wordList[i].length() - 1; j >= 0; j--) {
		    	 reversedWord += wordList[i].charAt(j);
		    	 
		     } System.out.println(reversedWord);
		} 
		
	}

}
