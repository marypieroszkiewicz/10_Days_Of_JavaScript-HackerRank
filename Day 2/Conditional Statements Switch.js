function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A';
            break;
        
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;
        
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C';
            break;
        
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't': 
        case 'v': 
        case 'w': 
        case 'x': 
        case 'y':
        case 'z':
            letter = 'D';
    }

    return letter;
}

/* ----- Short Version ----- */


function getLetter(s) {
    let letter;
    // Write your code here
    
    switch (s[0]) {
        case ( 'a' || 'e' || 'o' || 'i' || 'u'):
            letter = 'A';
            break;
                
        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = 'B';
            break;
                
        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = 'C';
            break;
                
        case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' ):
            letter = 'D';                
        }  
    
    return letter;
}