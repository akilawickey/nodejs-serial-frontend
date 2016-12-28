/*
 * This code will emulate USB data 
 * 
 * 
 */


// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 13 as an output.
  Serial.begin(9600);
}

// the loop function runs over and over again forever
void loop() {

    Serial.println("#M,5,!");
    delay(1000);  
 
    Serial.println("#T,1,19,29,30,29,26,26,26,29,26,26,30,29,27,26,22,0,26,0,!");
    delay(1000);  

    Serial.println("#M,12,!");
    delay(1000);  
    
    Serial.println("#T,1,29,29,22,29,22,23,26,29,26,26,30,29,26,26,29,0,26,0,!");
    delay(1000);  
    
    Serial.println("#M,15,!");
    delay(1000);  

    Serial.println("#T,1,22,29,30,29,26,26,26,29,26,26,30,22,26,26,29,0,26,0,!");
    delay(1000); 
    
    Serial.println("#M,17,!");
    delay(1000);  

    Serial.println("#T,1,25,29,30,29,25,26,26,29,22,26,30,29,26,26,22,0,26,0,!");
    delay(1000);   

    Serial.println("#M,20,!");
    delay(1000);  


}
