
#include "Arduino.h"

#include <SimpleDHT.h>

SimpleDHT11 dht11;

#include <LiquidCrystal.h>

// initialize the library with the numbers of the interface pins
LiquidCrystal lcd(12,6,13,5,4,3);

const unsigned long INTERVAL = 5000; // 5 minutes in milliseconds
bool condition = false;
unsigned long start = millis();

#define LEDPIN 8         //LED brightness (PWM) writing
#define pirPin 7 // Input for HC-S501
#define pinDHT11 2 // DHT11

#define ENABLE 10
#define DIRA 9
#define DIRB 11

int pirValue;

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(LEDPIN, OUTPUT);  
  pinMode(pirPin, INPUT);

  digitalWrite(LED_BUILTIN, LOW);
  digitalWrite(LEDPIN, LOW);

  pinMode(ENABLE,OUTPUT);
  pinMode(DIRA,OUTPUT);
  pinMode(DIRB,OUTPUT);

  digitalWrite(ENABLE,HIGH); //enable on
  digitalWrite(DIRA,HIGH); //one way
  digitalWrite(DIRB,LOW);

  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  lcd.setCursor(0, 0);
  // Print a message to the LCD.
  lcd.print("SCH D008");



  Serial.begin(9600); // open serial port, set the baud rate to 9600 bps
}
void loop()
{
  lcd.setCursor(0, 0);

  pirValue = digitalRead(pirPin);
  digitalWrite(LED_BUILTIN, pirValue);

  // analogWrite(ENABLE,175); //enable on
  // digitalWrite(DIRA,HIGH); //one way
  // digitalWrite(DIRB,LOW);

  // delay(2000);

  Serial.println("=================================");
  Serial.println("Sample DHT11...");
  
  // read with raw sample data.
  byte temperature = 0;
  byte humidity = 0;
  byte data[40] = {0};
  if (dht11.read(pinDHT11, &temperature, &humidity, data)) {
    Serial.print("Read DHT11 failed");
    return;
  }

  Serial.print("Sample RAW Bits: ");
  for (int i = 0; i < 40; i++) {
    Serial.print((int)data[i]);
    if (i > 0 && ((i + 1) % 4) == 0) {
      Serial.print(' ');
    }
  }
  Serial.println("");
  
  Serial.print("Sample OK: ");
  Serial.print((int)temperature); Serial.print(" *C, ");
  Serial.print((int)humidity); Serial.println(" %");

  delay(100);

  unsigned long currentMillis = millis();
  unsigned long elapsed = currentMillis - start;
  
  if (condition) {
    Serial.println("Resetting timer...");
    start = millis();
    condition = false;
  }

  if(elapsed >= INTERVAL){
    digitalWrite(LEDPIN, LOW);

    analogWrite(ENABLE,0); //enable on
    digitalWrite(DIRA,LOW); //one way
    digitalWrite(DIRB,LOW);

    lcd.setCursor(0, 0);
    lcd.print("2 Watts 90.00%");
  }

  if (elapsed > 0 && elapsed < INTERVAL ) {

    int val;
    val=analogRead(0); 
    
    float reading = 1000 -analogRead(val); //Read light level
    float square_ratio = reading / 1023.0;      //Get percent of maximum value (1023)

    float reto = square_ratio;
    square_ratio = pow(square_ratio, 2.0);      //Square to make response more obvious

    analogWrite(LEDPIN, 255.0 * square_ratio);  //connect grayscale sensor to Analog 0
    Serial.println(val,DEC);//print the value to serial

    int tempro  = (int)temperature*8.15;

    if(tempro >250){
      tempro = 250;
    }

    analogWrite(ENABLE,tempro); //enable on
    digitalWrite(DIRA,LOW); //one way
    digitalWrite(DIRB,HIGH);

    int power_measure;

    power_measure = reto*8.18 + (int)temperature*0.25;

    float percent = ((float)(20-power_measure)/20)*100;

    lcd.setCursor(0, 0);
    lcd.print(String(power_measure) + " Watts " + String(percent) + " %");

    delay(500);

  }

  if (pirValue == HIGH) {
    condition = true;
  }

  delay(150);

}