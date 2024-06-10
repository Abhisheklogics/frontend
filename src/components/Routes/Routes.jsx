import React, { lazy, Suspense ,useMemo} from 'react';
import { Route, createRoutesFromElements } from 'react-router-dom';

import axios from 'axios';

// Lazy loading components
const App=lazy(()=>import('../../App.jsx'))
const Home = lazy(() => import('../Home/Home.jsx'));
const Resall = lazy(() => import('../Res/Res.jsx'));
const Res5images = lazy(() => import('../Res/Res5images.jsx'));
const ResNotSp = lazy(() => import('../Res/ResNotsp.jsx'));
const ResAllExperiment = lazy(() => import('../Res/AllRes.jsx'));
const AllExperiment = lazy(() => import('../Arduino/AllExperiment.jsx'));
const Arduino = lazy(() => import('../Arduino/Arduino.jsx'));
const Arduino6 = lazy(() => import('../Arduino/Aduino6.jsx'));
const ArduinoOne5 = lazy(() => import('../Arduino/ArduinoOne5.jsx'));
const ArduinoTwo5 =lazy(()=>import('../Arduino/ArduinoTwo.jsx'))
const ArduinoThree5 =lazy(()=>import('../Arduino/ArduinoThree.jsx'))
const ArduinoAlag = lazy(() => import('../Arduino/Arduinoalag.jsx'));
const Esp = lazy(() => import('../esp/Esp.jsx'));
const EspExperiments = lazy(() => import('../esp/AllEspexperiments.jsx'));
import { getEspData,getArduinoData,getRaspberryData } from '../../../db.call/ArduinoDatabaseCalls.js';




// Routes configuration
export const Routes = createRoutesFromElements(
  <Route path='/' element={<Suspense><App /></Suspense>}>
    <Route path='' element={<Suspense ><Home /></Suspense>} loader={async () => {
      const response = await axios.get('arduino/homeData');
      return response.data;
    }} />
    
    <Route path='arduino' element={<Suspense fallback={<div>Loading...</div>}><Arduino /></Suspense>}>
      <Route path='' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment code={`int sensor_pin=13; 
      int sensor_state=1; 
      void setup()
      {
       pinMode(13,INPUT); 
      Serial.begin(9600);
      }
     void loop()
     {
         Serial.print("Soil Moisture Level: "); 
        sensor_state = digitalRead(sensor_pin); 
      if (sensor_state == 1)
       {
       Serial.println("Wet");
       }
     else 
     { 
     Serial.println("Dry");
      }
         delay(200);
     }
`}/></Suspense>} loader={async () => {
        const response = await axios.get('/arduino/getDataArduino', { params: { exId: 1 } });
        return response.data;
      }} />
      <Route path='ex1' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment  code={`
      int sensor_pin=13;
      int sensor_state=1;
      void setup()
        { 
         pinMode(13,INPUT); 
         Serial.begin(9600);
        }
       void loop()
     {
      Serial.print("Soil Moisture Level: "); 
      sensor_state = digitalRead(sensor_pin); 
      if (sensor_state == 1) 
      { 
           Serial.println("Wet");
      }

      else 
       { 
         Serial.println("Dry");
       }
           delay(200);
     }
`}/></Suspense>} loader={() => { return  getArduinoData(1)}} />

      <Route path='ex2' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment code={`
const int motorPin = 9;
void setup() 
{
pinMode(motorPin, OUTPUT);
}
void loop()
 {
  digitalWrite(motorPin, HIGH);
  delay(2000);
  digitalWrite(motorPin, LOW);
  delay(1000);
  digitalWrite(motorPin, HIGH);
  delay(2000);
  digitalWrite(motorPin, LOW);
  delay(1000);
}
`}/></Suspense>} loader={() => { return getArduinoData(2)}} />
      <Route path='ex3' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment  code={`
int A= 3;
int B= 4;
int C= 5;
int D= 6;
int E= 7;
int F= 8;
int G= 9;
int X= 13;
int Y= 12; 
int Z= 11;
void setup()
 {
 pinMode(A,OUTPUT);
 pinMode(B,OUTPUT);
 pinMode(C,OUTPUT);
 pinMode(D,OUTPUT);
 pinMode(E,OUTPUT);
 pinMode(F,OUTPUT);
 pinMode(G,OUTPUT);
 pinMode(X,OUTPUT);
 pinMode(Y,OUTPUT);
pinMode(Z,OUTPUT);  
  }
  void loop()
  {
  digitalWrite(A,HIGH);
  digitalWrite(B,HIGH);
  digitalWrite(C,HIGH);
  digitalWrite(D,HIGH);
  digitalWrite(E,HIGH);
  digitalWrite(F,HIGH);
  digitalWrite(G,LOW);
  digitalWrite(X,HIGH);
  digitalWrite(Y,LOW);
  digitalWrite(Z,LOW); 
  delay(2000);
  digitalWrite(A,LOW);
  digitalWrite(B,HIGH);
  digitalWrite(C,HIGH);
  digitalWrite(D,LOW);
  digitalWrite(E,LOW);
  digitalWrite(F,LOW);
  digitalWrite(G,LOW);
  digitalWrite(X,HIGH);
  digitalWrite(Y,LOW);
  digitalWrite(Z,LOW);
  delay(2000);
  digitalWrite(A,HIGH);
  digitalWrite(B,HIGH);
  digitalWrite(C,LOW);
  digitalWrite(D,HIGH);
  digitalWrite(E,HIGH);
  digitalWrite(F,LOW);
  digitalWrite(G,HIGH);
  digitalWrite(X,HIGH);
  digitalWrite(Y,LOW);
  digitalWrite(Z,LOW);
  delay(2000);
  digitalWrite(A,HIGH);
  digitalWrite(B,HIGH);
  digitalWrite(C,HIGH);
  digitalWrite(D,HIGH);
  digitalWrite(E,LOW);
  digitalWrite(F,LOW);
  digitalWrite(G,HIGH);
  digitalWrite(X,LOW);
  digitalWrite(Y,HIGH);
  digitalWrite(Z,LOW);
  delay(2000);
  digitalWrite(A,LOW);
  digitalWrite(B,HIGH);
  digitalWrite(C,HIGH);
  digitalWrite(D,LOW);
  digitalWrite(E,LOW);
  digitalWrite(F,HIGH);
  digitalWrite(G,HIGH);
  digitalWrite(X,LOW);
  digitalWrite(Y,HIGH);
  digitalWrite(Z,LOW);
  delay(2000);
  digitalWrite(A,HIGH);
  digitalWrite(B,LOW);
  digitalWrite(C,HIGH);
  digitalWrite(D,HIGH);
  digitalWrite(E,LOW);
  digitalWrite(F,HIGH);
  digitalWrite(G,HIGH);
  digitalWrite(X,LOW);
  digitalWrite(Y,HIGH);
  digitalWrite(Z,LOW);
  delay(2000);
  digitalWrite(A,HIGH);
  digitalWrite(B,LOW);
  digitalWrite(C,HIGH);
  digitalWrite(D,HIGH);
  digitalWrite(E,HIGH);
  digitalWrite(F,HIGH);
  digitalWrite(G,HIGH);
  digitalWrite(X,LOW);
  digitalWrite(Y,LOW);
  digitalWrite(Z,HIGH);
  delay(2000);
  digitalWrite(A,HIGH);
  digitalWrite(B,HIGH);
  digitalWrite(C,HIGH);
  digitalWrite(D,LOW);
  digitalWrite(E,LOW);
  digitalWrite(F,LOW);
  digitalWrite(G,LOW);
  digitalWrite(X,LOW);
  digitalWrite(Y,LOW);
  digitalWrite(Z,HIGH);
  delay(2000);
  digitalWrite(A,HIGH);
  digitalWrite(B,HIGH);
  digitalWrite(C,HIGH);
  digitalWrite(D,HIGH);
  digitalWrite(E,HIGH);
  digitalWrite(F,HIGH);
  digitalWrite(G,HIGH);
  digitalWrite(X,LOW);
  digitalWrite(Y,LOW);
  digitalWrite(Z,HIGH);
  delay(2000);
  digitalWrite(A,HIGH);
  digitalWrite(B,HIGH);
  digitalWrite(C,HIGH);
  digitalWrite(D,HIGH);
  digitalWrite(E,LOW);
  digitalWrite(F,HIGH);
  digitalWrite(G,HIGH);
  digitalWrite(X,LOW);
  digitalWrite(Y,LOW);
  digitalWrite(Z,HIGH);
  delay(2000);
}
`}/></Suspense>} loader={() => {return getArduinoData(3)}} />
      <Route path='ex4' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment code={`
int PIR PIN = 4;
void setup()
 {
    serial.begin(9600);
    pinMode(PIR PIN, INPUT);
    delay(1000);
}
Void loop() 
{
     int motionDetected = digitalRead(PIR PIN);
     if (motionDetected = = HIGH) 
       {
         serial.println(“Motion detected!”);
       }
        delay(500);
}
`} /></Suspense>} loader={() => getArduinoData(4)} />
      <Route path='ex5' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment  code={`#define echoPin 2 
#define trigPin 3 
#define led     12
// defines variables
long duration; 
int distance;

void setup() 
{
  pinMode(trigPin, OUTPUT); 
  pinMode(echoPin, INPUT);
  pinMode(led,OUTPUT);
  Serial.begin(9600); 
  Serial.println()
}
void loop() 
{
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  distance = duration * 0.034 / 2; 
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  if(distance<200)
  {
    digitalWrite(led,HIGH);
  }
 else
  {
 digitalWrite(led,LOW);
  }
}

`} /></Suspense>} loader={() => getArduinoData(5)} />
      <Route path='ex6' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment code={` int a=0,b=1,c=13;
int Duration;
int distance;
  void setup(){
 Serial.begin(9600);
  pinMode(0,INPUT);
  pinMode(1,OUTPUT);
 pinMode(13,OUTPUT);
}
void loop()
{
  digitalWrite(b,LOW);
  delayMicroseconds(2);
  digitalWrite(b,HIGH);
  delayMicroseconds(10);
  digitalWrite(b,LOW);
  Duration=pulseIn(1,HIGH);
  distance=Duration*0.034/2;
  if(distance<40)
  {
   digitalWrite(c,HIGH);  

  }
   else
   {
    digitalWrite(c,LOW);
  
  }
    }
`} /></Suspense>} loader={() => getArduinoData(6)} />
      <Route path='ex7' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment code={`int A=3;
int B=4;
int C=5;
int D=6;
int E=7;
int F=8;
int G=9;
int X=10;
int Y=11;
int Z=12;
  void setup(){
pinMode(A, OUTPUT);
pinMode(B, OUTPUT);
pinMode(C, OUTPUT);
pinMode(D, OUTPUT);
pinMode(E, OUTPUT);
pinMode(F, OUTPUT);
pinMode(G, OUTPUT);
pinMode(X, OUTPUT);
pinMode(Y, OUTPUT);
pinMode(Z, OUTPUT);
}
void loop()
{
    digitalWrite(A, HIGH);
    digitalWrite(B ,HIGH);
    digitalWrite(C, HIGH);
    digitalWrite(D, HIGH);
    digitalWrite(E, HIGH);
    digitalWrite(F, HIGH);
    digitalWrite(G, LOW);
  delay(1000);
     digitalWrite(A, LOW);
    digitalWrite(B ,HIGH);
    digitalWrite(C, HIGH);
    digitalWrite(D, LOW);
    digitalWrite(E, LOW);
    digitalWrite(F, LOW);
    digitalWrite(G, LOW);
  delay(1000);
  digitalWrite(A, HIGH);
    digitalWrite(B ,HIGH);
    digitalWrite(C, LOW);
    digitalWrite(D, HIGH);
    digitalWrite(E, HIGH);
    digitalWrite(F, LOW);
    digitalWrite(G, HIGH);
  delay(1000);
  digitalWrite(A, HIGH);
    digitalWrite(B ,HIGH);
    digitalWrite(C, HIGH);
    digitalWrite(D, HIGH);
    digitalWrite(E, LOW);
    digitalWrite(F, LOW);
    digitalWrite(G, HIGH);
  delay(1000);
  digitalWrite(A, LOW);
    digitalWrite(B ,HIGH);
    digitalWrite(C, HIGH);
    digitalWrite(D, LOW);
    digitalWrite(E, LOW);
    digitalWrite(F, HIGH);
    digitalWrite(G,HIGH);
  delay(1000);
  digitalWrite(A, HIGH);
    digitalWrite(B ,LOW);
    digitalWrite(C, HIGH);
    digitalWrite(D, HIGH);
    digitalWrite(E, LOW);
    digitalWrite(F, HIGH);
    digitalWrite(G, HIGH);
  delay(1000);
  digitalWrite(A, LOW);
    digitalWrite(B ,LOW);
    digitalWrite(C, HIGH);
    digitalWrite(D, HIGH);
    digitalWrite(E, HIGH);
    digitalWrite(F, HIGH);
    digitalWrite(G, HIGH);
  delay(1000);
  digitalWrite(A, HIGH);
    digitalWrite(B ,HIGH);
    digitalWrite(C, HIGH);
    digitalWrite(D, LOW);
    digitalWrite(E, LOW);
    digitalWrite(F, LOW);
    digitalWrite(G, LOW);
  delay(1000);
  digitalWrite(A, HIGH);
    digitalWrite(B ,HIGH);
    digitalWrite(C, HIGH);
    digitalWrite(D, HIGH);
    digitalWrite(E, HIGH);
    digitalWrite(F, HIGH);
    digitalWrite(G, HIGH);
  delay(1000);
  digitalWrite(A, HIGH);
    digitalWrite(B ,HIGH);
    digitalWrite(C, HIGH);
    digitalWrite(D, LOW);
    digitalWrite(E, LOW);
    digitalWrite(F, HIGH);
digitalWrite(G, HIGH);
  delay(1000);             }
`}  /></Suspense>} loader={() => getArduinoData(7)} />
      <Route path='ex8' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment code={`#include <LiquidCrystal.h>
LiquidCrystal lcd(12,11,5,4,3,2);
void setup()
{
  lcd.begin(16,2);
  lcd.print("ANJALI KUMARI");            
}
void loop(){}
`} /></Suspense>} loader={() => getArduinoData(8)} />
      <Route path='ex9' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment code={`#include <LiquidCrystal.h>
LiquidCrystal lcd(12,11,5,4,3,2);
void setup()
{
  lcd.begin(16,2);
  lcd.print("Garima Dixit!");
            }
void loop(){}          
`}  /></Suspense>} loader={() => getArduinoData(9)} />
      <Route path='ex10' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment  code={`void setup() {
  pinMode(13, OUTPUT); // Set pin 13 as an output
}
void loop() 
{
  digitalWrite(13, HIGH); 
  delay(1000);            
  digitalWrite(13, LOW);  
  delay(1000);           
}
`}/></Suspense>} loader={() => getArduinoData(10)} />
      <Route path='ex11' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment code={`# include <Servo.h>; 
Servo Motor;
void setup(){
  Motor.attach(13);
}
void loop (){
  Motor.write(0);
  delay(1000);
  Motor.write(180);
  delay(1000);
  }`}/></Suspense>} loader={() => getArduinoData(11)} />
      <Route path='ex12' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment  code={`const int dirPin1 = 13;  
void setup() 
{
pinMode(dirPin1, OUTPUT);
}
void loop()
 {
 digitalWrite(dirPin1, HIGH);
 digitalWrite(dirPin1, LOW);
}
`} /></Suspense>} loader={() => getArduinoData(12)} />
      <Route path='ex13' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment code={`#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
Void setup() 
{
  // Initialize OLED display with the I2C address 0x3C (for the 128x64 OLED)
  If(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F(“SSD1306 allocation failed”));
    For(;;);
  }
  // Clear the buffer
  Display.clearDisplay();
  // Set text size, color, and display a message
  Display.setTextSize(1);
  Display.setTextColor(SSD1306_WHITE);
  Display.setCursor(0, 0);
  Display.println(“Hello, OLED!”); 
  // Display the message
  Display.display();
}
Void loop() 
{
  // Display doesn’t need refreshing in this simple example
}

`} /></Suspense>} loader={() => getArduinoData(13)} />
      <Route path='ex14' element={<Suspense fallback={<div>Loading...</div>}><ArduinoOne5  code={`
void setup()
{
pinMode(2,INPUT);
pinMode(13,OUTPUT);
}
void loop()
{

if(digitalRead(2) == 1)
{
digitalWrite(13,HIGH);
}
else
{
digitalWrite(13,LOW);
}
}
`} /></Suspense>} loader={() => getArduinoData(14)} />
      <Route path='ex15' element={<Suspense fallback={<div>Loading...</div>}><ArduinoTwo5  code={`int A= 6;
  int B= 13;
  void setup(){
  pinMode(A,INPUT);
  pinMode(B,OUTPUT);
  
  }
  void loop(){
  int buttonState= digitalRead(A);
  if(buttonState == HIGH){
 digitalWrite(B,HIGH);
 }
 else
 {
  digitalWrite(B,LOW);
   }
 }
   
`} /></Suspense>} loader={() => getArduinoData(15)} />
      <Route path='ex16' element={<Suspense fallback={<div>Loading...</div>}><ArduinoThree5  code={`#include <DHT.h>

#define DHTPIN 8     // Digital pin connected to the DHT sensor
#define DHTTYPE DHT22   // DHT 22  (AM2302)

DHT dht(DHTPIN, DHTTYPE);

void setup()
 {
  Serial.begin(9600);
  dht.begin();
}

void loop() 
{
  delay(2000);  // Wait for 2 seconds between measurements

  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  // Check if any reads failed and exit early (to try again)
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  // Print temperature and humidity
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.print("%\t");
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println("°C");
}

`}/></Suspense>} loader={() => getArduinoData(16)} />
      <Route path='ex17' element={<Suspense fallback={<div>Loading...</div>}><ArduinoOne5 /></Suspense>} loader={() => getArduinoData(17)} />
      <Route path='ex18' element={<Suspense fallback={<div>Loading...</div>}><ArduinoAlag  code={`#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#define OLED_RESET 4
Adafruit_SSD1306 display(OLED_RESET);
#define BUTTON_PIN 2
void setup() 
{
  // Initialize OLED display with I2C address 0x3C
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.display();
  delay(2000);  // Pause for 2 seconds
  pinMode(BUTTON_PIN, INPUT_PULLUP); // Set the push button pin as input with internal pull-up resistor
}
void loop() 
{
  // Clear the display
  display.clearDisplay(); 
  // Read the state of the push button
  int buttonState = digitalRead(BUTTON_PIN);
  // Display button state on OLED
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0,0);
  display.print("Button State: ");
  display.println(buttonState == HIGH ? "RELEASED" : "PRESSED");
  // Display on OLED
  display.display();
  delay(100); // Delay to debounce button (adjust as needed)
}
`}/></Suspense>} loader={() => getArduinoData(18)} />
      <Route path='ex19' element={<Suspense fallback={<div>Loading...</div>}><Arduino6 code={`// Define pin connections
const int trigPin = 9;
const int echoPin = 10;
// Define variables
long duration;
int distance;
void setup() 
{
// Initialize 
serial communication
  Serial.begin(9600); 
 // Define pin modes
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}
void loop() 
{
// Clear the trigger pin
  digitalWrite(trigPin,LOW);
  delayMicroseconds(2); 
/Send a 10 microsecond
 pulse to the trigger pin
  digitalWrite(trigPin,HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin,LOW); 
// Measure the duration of 
the echo pulse
 duration = pulse In(echo Pin,HIGH);
 Calculate distance in cm 
  (speed of sound is 343 m/s)
  distance = duration * 0.034 / 2;
  // Print distance to the 
  serial monitor
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm"); 
  // Delay before next reading
  delay(1000);
`}/></Suspense>} loader={() => getArduinoData(19)} />
      <Route path='ex20' element={<Suspense fallback={<div>Loading...</div>}><AllExperiment /></Suspense>} loader={() => getArduinoData(20)} />
    </Route>
    <Route path='raspberry' element={<Suspense fallback={<div>Loading...</div>}><Resall /></Suspense>}>
      <Route path='' element={<Suspense fallback={<div>Loading...</div>}><ResAllExperiment code={`import RPi.GPIO as GPIO
import time

LED_PIN = 17  # GPIO pin connected to the LED

# Setup GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_PIN, GPIO.OUT)

try:
    while True:
        # Turn on the LED
        GPIO.output(LED_PIN, GPIO.HIGH)
        time.sleep(1)  # Wait for 1 second

        # Turn off the LED
        GPIO.output(LED_PIN, GPIO.LOW)
        time.sleep(1)  # Wait for 1 second

except KeyboardInterrupt:
    # Clean up GPIO on keyboard interrupt (Ctrl+C)
    GPIO.cleanup()
`} /></Suspense>} loader={() => getRaspberryData(1)} />
      <Route path='res2' element={<Suspense fallback={<div>Loading...</div>}><ResAllExperiment code={`import RPi.GPIO as GPIO
import time

BUTTON_PIN = 18  # GPIO pin connected to the push button

# Setup GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

try:
    while True:
        if GPIO.input(BUTTON_PIN) == GPIO.HIGH:
            print("Button pressed!")
            # Add your desired actions here
            time.sleep(0.2)  # Debounce delay

except KeyboardInterrupt:
    # Clean up GPIO on keyboard interrupt (Ctrl+C)
    GPIO.cleanup()
`} /></Suspense>} loader={() => getRaspberryData(2)} />
      <Route path='res3' element={<Suspense fallback={<div>Loading...</div>}><ResAllExperiment code={`import Adafruit_DHT
import time

DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 17  # GPIO pin connected to the DHT11 sensor

try:
    while True:
        humidity, temperature = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)
        if humidity is not None and temperature is not None:
            print(f"Temperature: {temperature:.1f}°C, Humidity: {humidity:.1f}%")
        else:
            print("Failed to retrieve data from DHT11 sensor")
        time.sleep(2)  # Read sensor every 2 seconds

except KeyboardInterrupt:
    # Clean up GPIO on keyboard interrupt (Ctrl+C)
    GPIO.cleanup()

`} /></Suspense>} loader={() => getRaspberryData(3)} />
      <Route path='res4' element={<Suspense fallback={<div>Loading...</div>}><ResAllExperiment  code={`import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

TRIG_PIN = 23
ECHO_PIN = 24

GPIO.setup(TRIG_PIN, GPIO.OUT)
GPIO.setup(ECHO_PIN, GPIO.IN)

def measure_distance():
    GPIO.output(TRIG_PIN, True)
    time.sleep(0.00001)
    GPIO.output(TRIG_PIN, False)

    start_time = time.time()
    stop_time = time.time()

    while GPIO.input(ECHO_PIN) == 0:
        start_time = time.time()

    while GPIO.input(ECHO_PIN) == 1:
        stop_time = time.time()

    elapsed_time = stop_time - start_time
    distance = (elapsed_time * 34300) / 2  # Speed of sound = 343 m/s
    return distance

try:
    while True:
        dist = measure_distance()
        print(f"Distance: {dist:.2f} cm")
        time.sleep(1)  # Update distance measurement every 1 second

except KeyboardInterrupt:
    GPIO.cleanup()

`}/></Suspense>} loader={() => getRaspberryData(4)} />
      <Route path='res5' element={<Suspense fallback={<div>Loading...</div>}><ResAllExperiment code={`import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

SERVO_PIN = 18

GPIO.setup(SERVO_PIN, GPIO.OUT)

servo = GPIO.PWM(SERVO_PIN, 50)  # 50 Hz frequency

def set_angle(angle):
    duty_cycle = (angle / 18) + 2  # Convert angle to duty cycle
    GPIO.output(SERVO_PIN, True)
    servo.ChangeDutyCycle(duty_cycle)
    time.sleep(1)  # Allow time for the servo to reach the desired angle
    GPIO.output(SERVO_PIN, False)
    servo.ChangeDutyCycle(0)

try:
    while True:
        set_angle(0)  # Rotate servo to 0 degrees
        time.sleep(1)
        set_angle(90)  # Rotate servo to 90 degrees
        time.sleep(1)
        set_angle(180)  # Rotate servo to 180 degrees
        time.sleep(1)

except KeyboardInterrupt:
    servo.stop()
    GPIO.cleanup()
`}/></Suspense>} loader={() => getRaspberryData(5)} />
      <Route path='res6' element={<Suspense fallback={<div>Loading...</div>}><ResAllExperiment code={`import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

PIR_PIN = 17  # GPIO pin connected to the OUT pin of the PIR sensor

GPIO.setup(PIR_PIN, GPIO.IN)

def motion_detected(channel):
    print("Motion detected!")

try:
    GPIO.add_event_detect(PIR_PIN, GPIO.RISING, callback=motion_detected)
    print("PIR sensor initialized. Waiting for motion...")

    while True:
        time.sleep(1)  # Keep the script running

except KeyboardInterrupt:
    GPIO.cleanup()
 
`}/></Suspense>} loader={() => getRaspberryData(6)} />
      <Route path='res7' element={<Suspense fallback={<div>Loading...</div>}><ResNotSp  code={`import serial

# Configure serial port for RFID reader communication
serial_port = serial.Serial('/dev/ttyS0', baudrate=9600, timeout=1)

def read_rfid_tag():
    while True:
        # Read RFID tag data from serial port
        rfid_data = serial_port.readline().strip()
        if rfid_data:
            print(f"RFID Tag Detected: {rfid_data.decode('utf-8')}")

try:
    print("RFID Reader Initialized. Ready to read RFID tags...")
    read_rfid_tag()

except KeyboardInterrupt:
    serial_port.close()

`}/></Suspense>} loader={() => getRaspberryData(7)} />
      <Route path='res8' element={<Suspense fallback={<div>Loading...</div>}><Res5images  code={`import RPi.GPIO as GPIO
import time

# Define LCD pin mapping (adjust based on your LCD module)
LCD_RS = 25
LCD_E = 24
LCD_D4 = 23
LCD_D5 = 17
LCD_D6 = 18
LCD_D7 = 22

# Define LCD dimensions (number of columns and rows)
LCD_COLUMNS = 16
LCD_ROWS = 2

def lcd_init():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(LCD_RS, GPIO.OUT)
    GPIO.setup(LCD_E, GPIO.OUT)
    GPIO.setup(LCD_D4, GPIO.OUT)
    GPIO.setup(LCD_D5, GPIO.OUT)
    GPIO.setup(LCD_D6, GPIO.OUT)
    GPIO.setup(LCD_D7, GPIO.OUT)

    lcd_send_command(0x33)  # Initialize
    lcd_send_command(0x32)  # Set to 4-bit mode
    lcd_send_command(0x28)  # 2 lines, 5x8 font
    lcd_send_command(0x0C)  # Display on, cursor off, blink off
    lcd_send_command(0x01)  # Clear display
    time.sleep(0.1)

def lcd_send_command(command):
    GPIO.output(LCD_RS, GPIO.LOW)
    lcd_write(command >> 4)
    lcd_write(command & 0x0F)

def lcd_write(data):
    GPIO.output(LCD_RS, GPIO.HIGH)
    GPIO.output(LCD_D4, GPIO.HIGH if (data & 0x01) else GPIO.LOW)
    GPIO.output(LCD_D5, GPIO.HIGH if (data & 0x02) else GPIO.LOW)
    GPIO.output(LCD_D6, GPIO.HIGH if (data & 0x04) else GPIO.LOW)
    GPIO.output(LCD_D7, GPIO.HIGH if (data & 0x08) else GPIO.LOW)
    lcd_toggle_enable()

    GPIO.output(LCD_D4, GPIO.HIGH if (data & 0x10) else GPIO.LOW)
    GPIO.output(LCD_D5, GPIO.HIGH if (data & 0x20) else GPIO.LOW)
    GPIO.output(LCD_D6, GPIO.HIGH if (data & 0x40) else GPIO.LOW)
    GPIO.output(LCD_D7, GPIO.HIGH if (data & 0x80) else GPIO.LOW)
    lcd_toggle_enable()

def lcd_toggle_enable():
    GPIO.output(LCD_E, GPIO.HIGH)
    time.sleep(0.0005)
    GPIO.output(LCD_E, GPIO.LOW)
    time.sleep(0.0005)

def lcd_display_text(text):
    lcd_send_command(0x01)  # Clear display
    time.sleep(0.1)
    for char in text:
        lcd_write(ord(char))

try:
    lcd_init()
    lcd_display_text("Hello, Raspberry Pi!")
    time.sleep(2)
    lcd_display_text("LCD Display Test")

    while True:
        pass  # Keep the script running

except KeyboardInterrupt:
    GPIO.cleanup()
`}/></Suspense>} loader={() => getRaspberryData(8)} />
    </Route>
    <Route path='esp' element={<Suspense fallback={<div>Loading...</div>}><Esp /></Suspense>}>
      <Route path='' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" code={`#include "DHT.h"	

#define DHTPIN 4     // Digital pin connected to the DHT sensor
// Feather HUZZAH ESP8266 note: use pins 3, 4, 5, 12, 13 or 14 --
// Pin 15 can work but DHT must be disconnected during program upload.

// Uncomment whatever type you're using!
//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22 (AM2302), AM2321
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

// Connect pin 1 (on the left) of the sensor to +5V
// NOTE: If using a board with 3.3V logic like an Arduino Due connect pin 1
// to 3.3V instead of 5V!
// Connect pin 2 of the sensor to whatever your DHTPIN is
// Connect pin 4 (on the right) of the sensor to GROUND
// Connect a 10K resistor from pin 2 (data) to pin 1 (power) of the sensor

// Initialize DHT sensor.
// Note that older versions of this library took an optional third parameter to
// tweak the timings for faster processors.  This parameter is no longer needed
// as the current DHT reading algorithm adjusts itself to work on faster procs.
DHT dht (DHTPIN, DHTTYPE);

void setup () {
  Serial.begin(9600);
  Serial.println(F ("DHTxx test!"));

  dht. begin ();
}

void loop() {
  // Wait a few seconds between measurements.
  delay (2000);

  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  float h = dht. read Humidity ();
  // Read temperature as Celsius (the default)
  float t = dht. readTemperature ();
  // Read temperature as Fahrenheit (is Fahrenheit = true)
  float f = dht. readTemperature(true);

  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println(F ("Failed to read from DHT sensor!"));
    return;
  }

  // Compute heat index in Fahrenheit (the default)
  float hif = dht. computeHeatIndex (f, h);
  // Compute heat index in Celsius (Fahrenheit = false)
  float hic = dht. computeHeatIndex(t, h, false);

  Serial. print(F ("Humidity: "));
  Serial.print(h);
  Serial.print(F ("%  Temperature: "));
  Serial.print(t);
  Serial.print(F ("°C "));
  Serial.print(f);
  Serial.print(F ("°F  Heat index: "));
  Serial.print(hic);
  Serial.print(F ("°C "));
  Serial.print(hif);
  Serial.println(F("°F"));
}`} /></Suspense>} loader={() => getEspData(1)} />
      <Route path='Esp2' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" code={`
const int trigPin = 5;
const int echoPin = 18;

//define sound speed in cm/uS
#define SOUND_SPEED 0.034
#define CM_TO_INCH 0.393701

long duration;
float distanceCm;
float distanceInch;

void setup() {
  Serial.begin(115200); // Starts the serial communication
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input
}

void loop() {
  // Clears the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  
  // Calculate the distance
  distanceCm = duration * SOUND_SPEED/2;
  
  // Convert to inches
  distanceInch = distanceCm * CM_TO_INCH;
  
  // Prints the distance in the Serial Monitor
  Serial.print("Distance (cm): ");
  Serial.println(distanceCm);
  Serial.print("Distance (inch): ");
  Serial.println(distanceInch);
  
  delay(1000);
}
`} /></Suspense>} loader={() => getEspData(2)} />
      <Route path='Esp3' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" code={`#define DO_PIN 13 // ESP32's pin GPIO13 connected to DO pin of the flame sensor

void setup () {
  // initialize serial communication
  Serial.begin(9600);
  // initialize the ESP32's pin as an input
  pinMode (DO_PIN, INPUT);
}

void loop () {
  int flame_state = digitalRead(DO_PIN);

  if (flame_state == HIGH)
    Serial.println("No flame dected => The fire is NOT detected");
  else
    Serial.println("Flame dected => The fire is detected");
}
`}/></Suspense>} loader={() => getEspData(1)} />
      <Route path='Esp4' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" code={`int led = 36;
int sound_digital = 2;
int sound_analog = 4;

void setup() {
  Serial.begin(9600);
  pinMode (led, OUTPUT);
  pinMode (sound_digital, INPUT);  
}

void loop () {
  int val_digital = digitalRead(sound_digital);
  int val_analog = analogRead(sound_analog);

  Serial.print(val_analog);
  Serial.print("\t");
  Serial.println(val_digital);

  if (val_digital == HIGH)
  {
    digitalWrite (led, HIGH);
    delay(3000);
    }

}
`}/></Suspense>} loader={() => getEspData(4)} />
      <Route path='Esp5' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" code={` #define outputB  35    // DATA signal
#define outputA 34    // CLOCK signal
int counter = 0;
int aState;
int aLastState;

void setup() {
   pinMode (outputA,INPUT);
   pinMode (outputB,INPUT);
  
   Serial.begin (115200);
   // Reads the initial state of the outputA
   aLastState = digitalRead(outputA);  
}

void loop() {
   aState = digitalRead(outputA); // Reads the "current" state of the outputA
   // If the previous and the current state of the outputA are different, that means a Pulse has occured
   if (aState != aLastState){    
     // If the outputB state is different to the outputA state, that means the encoder is rotating clockwise
     if (digitalRead(outputB) != aState) {
       counter ++;
     } else {
       counter --;
     }
     Serial.print("Position: ");
     Serial.println(counter);
   }
   aLastState = aState; // Updates the previous state of the outputA with the current state
}
`}/></Suspense>} loader={() => getEspData(5)} />
      <Route path='Esp6' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" code={` #include <IRremote.h>
 
 int RECV_PIN = 15;
  
 IRrecv irrecv(RECV_PIN);
  
 decode_results results;
  
 void setup()
 {
 Serial.begin(9600);
 irrecv.enableIRIn(); // Start the receiver
 }
  
 void loop()
 {
 if (irrecv.decode(&results))
 {
 Serial.println(results.value, HEX);
 irrecv.resume();
 }
 }
 `}/></Suspense>} loader={() => getEspData(6)} />
      <Route path='Esp7' element={<Suspense fallback={<div>Loading...</div>}><EspExperiments made="Aman Raj" code={`#include <ESP32Servo.h>
 
 Servo myservo;  // create servo object to control a servo
 // 16 servo objects can be created on the ESP32
  
 int pos = 0;    // variable to store the servo position
 // Recommended PWM GPIO pins on the ESP32 include 2,4,12-19,21-23,25-27,32-33 
 int servoPin = 13;
  void setup() {
   // Allow allocation of all timers
   ESP32PWM::allocateTimer(0);
   ESP32PWM:allocateTimer(1);
   ESP32PWM::allocateTimer(2);
   ESP32PWM::allocateTimer(3);
   myservo.setPeriodHertz(50);    // standard 50 hz servo
   myservo.attach(servoPin, 500, 2400); // attaches the servo on pin 18 to the servo object
   // using default min/max of 1000us and 2000us
   // different servos may require different min/max settings
   // for an accurate 0 to 180 sweeps
 }
  void loop() {
  
   for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
     // in Steps of 1 degree
     myservo. write(pos);    // tell servo to go to position in variable 'pos'
     delay(15);             // waits 15ms for the servo to reach the position
   }
   for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
     myservo. write(pos);    // tell servo to go to position in variable 'pos'
     delay (15);             // waits 15ms for the servo to reach the position
   }
 }
 `}/></Suspense>} loader={() => getEspData(7)} />
    </Route>
  </Route>
);
