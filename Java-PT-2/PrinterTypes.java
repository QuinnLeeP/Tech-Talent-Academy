
//Importing the HashMap class
import java.util.HashMap;

public class PrinterTypes {

	public static void main(String[] args) {
	
		//Creating a new HashMap using 2 Strings 
		HashMap<String, String> printers = new HashMap<>();
		
		//Adding items into the HashMap
		printers.put("Voxelab", "Aquila"); 
		printers.put("Anycubic", "Mega X");
		printers.put("Creality", "Ender Pro 3");
		printers.put("Prusa", "i3 MK3S+");
		printers.put("Flashforge", "Adventurer");
		printers.put("Elegoo", "Mars 2 PRO");
		printers.put("Snapmaker", "F250");
		
		
		//Print the size of the map
		System.out.println("The map size is:-" + printers.size());
		
		
		//Printing elements in the map
		System.out.println(printers);
		
		
		//Checking if element is present in map
		//and printing the key and value if present
		if (printers.containsKey("Creality")) {
			
			//Mapping
			String a = printers.get("Creality");
			
			//Printing the value of Creality key
			System.out.println("The model for the printer" + " \"Creality\" is:-" + a);
		} else {
			System.out.println("Value not found");
		}
	}

}
