
#include "Arduino.h"

#define LEDPIN 8         //LED brightness (PWM) writing

void setup()
{
  pinMode(LEDPIN, OUTPUT);  
  Serial.begin(9600); // open serial port, set the baud rate to 9600 bps
}
void loop()
{
      int val;
      val=analogRead(0); 
      
      float reading = 1000 -analogRead(val); //Read light level
      float square_ratio = reading / 1023.0;      //Get percent of maximum value (1023)
      square_ratio = pow(square_ratio, 2.0);      //Square to make response more obvious

      analogWrite(LEDPIN, 255.0 * square_ratio);  //connect grayscale sensor to Analog 0
      Serial.println(val,DEC);//print the value to serial
      delay(1000);
}