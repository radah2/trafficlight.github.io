const int sensor=A0;
const int led=13;
const int buzzer=12;
int sensorvalue=0;
void setup() {
// put your setup code here, to run once:
Serial.begin(9600);
pinMode(led, OUTPUT);
pinMode(sensor,INPUT);
pinMode(buzzer,OUTPUT);
}
void loop() {
sensorvalue=analogRead(sensor); 
if (sensorvalue>=200){
digitalWrite(led,HIGH);
tone(buzzer,100); 
}
else {
digitalWrite(led,LOW); 
noTone(buzzer);
}
}
