package Java;

public class Pangrams {

	public static void main(String[] args) {
	
		
		//Initialising the sentence and the booleans
		String sentence = "Pack my box with five dozen liquor jugs.";
		Boolean a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
		
		a = b = c = d = e = f = g = h = i = j = k = l = m = n = o = p = q = r = s = t = u = v = x = y = z = false;
		
		// Loop to iterate over each letter of the string.
			for (int letter = 0; letter < sentence.length(); letter++) {
				
				// Initialising a character variable to use in the switch statement.
				char character = Character.toLowerCase(sentence.charAt(letter));
				
				//Switch-case evaluating each letter of the alphabet
				switch(character) {
				case 'a':
					a = true;
					break;
				case 'b':
					b = true;
					break;
				case 'c':
					c = true;
					break;
				case 'd':
					d = true;
					break;
				case 'e':
					e = true;
					break;
				case 'f':
					f = true;
					break;
				case 'g':
					g = true;
					break;
				case 'h':
					h = true;
					break;
				case 'i':
					i = true;
					break;
				case 'j':
					j = true;
					break;
				case 'k':
					k = true;
					break;
				case 'l':
					l = true;
					break;
				case 'm':
					m = true;
					break;
				case 'n':
					n = true;
					break;
				case 'o':
					o = true;
					break;
				case 'p':
					p = true;
					break;
				case 'q':
					q = true;
					break;
				case 'r':
					r = true;
					break;
				case 's':
					s = true;
					break;
				case 't':
					t = true;
					break;
				case 'u':
					u = true;
					break;
				case 'v':
					v = true;
					break;
				case 'w':
					w = true;
					break;
				case 'x':
					x = true;
					break;
				case 'y':
					y = true;
					break;
				case 'z':
					z = true;
					System.out.println("This sentence is a pangram!");
					break;
				default:
					System.out.println("This sentence is not a pangram");
			  }
			
		}
	}

}
