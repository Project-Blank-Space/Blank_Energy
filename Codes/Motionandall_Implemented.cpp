
#include "Arduino.h"

const unsigned long INTERVAL = 20 * 1000; // 5 minutes in milliseconds
bool condition = false;
unsigned long start = millis();

#define LEDPIN 8         //LED brightness (PWM) writing
#define pirPin 7 // Input for HC-S501

int pirValue;

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(LEDPIN, OUTPUT);  
  pinMode(pirPin, INPUT);

  digitalWrite(LED_BUILTIN, LOW);
  digitalWrite(LEDPIN, LOW);


  Serial.begin(9600); // open serial port, set the baud rate to 9600 bps
}
void loop()
{
  pirValue = digitalRead(pirPin);
  digitalWrite(LED_BUILTIN, pirValue);

  unsigned long currentMillis = millis();
  unsigned long elapsed = currentMillis - start;
  
  if (condition) {
    Serial.println("Resetting timer...");
    start = millis();
    condition = false;
  }

  if(elapsed >= INTERVAL){
    digitalWrite(LEDPIN, LOW);
  }

  if (elapsed > 0 && elapsed < INTERVAL ) {

    int val;
    val=analogRead(0); 
    
    float reading = 1000 -analogRead(val); //Read light level
    float square_ratio = reading / 1023.0;      //Get percent of maximum value (1023)
    square_ratio = pow(square_ratio, 2.0);      //Square to make response more obvious

    analogWrite(LEDPIN, 255.0 * square_ratio);  //connect grayscale sensor to Analog 0
    Serial.println(val,DEC);//print the value to serial
    delay(1000);

  }

  if (pirValue == HIGH) {
    condition = true;
  }

}