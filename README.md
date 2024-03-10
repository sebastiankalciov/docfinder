# DocFinder
![DocFinder logo](https://raw.githubusercontent.com/sebastiankalciov/docfinder/main/source/public/meta/logo.png "DocFinder logo")

EN: This is a project made during the ITFest Hackathon 2024, specifically for the 'Health & Wellness" track.

RO: Acesta este un proiect creat în cadrul Hackathon-ului ITFest 2024, în categoria (track-ul) 'Health & Wellness'.
## Contributors (Team members) // Contributori

 - Sebastian Kalciov
 - Silviu Stefan Mitrea
 - Raul-Andrei Ariton
 - Maria Popescu

# Project description // Descripție a proiectului
EN: DocFinder is a responsive web application, which is 'mobile-first', meaning it is designed and developed with mobile users in mind. It is a **"vanilla" web application, created using HTML, CSS and JavaScript.**
It provides users with information regarding the location of the closest available doctors of a chosen specialty.

RO: DocFinder este o aplicație web responsive, concepută și dezvoltată având în vedere utilizatorii mobili. **Este o aplicație web "vanilla", creată folosind tehnologiile HTML & CSS și JavaScript.**
Aplicația web oferă utilizatoriilor informații în legătură cu cei mai apropiați doctori specialității alese.

## Usage // Uz
EN: The user selects a doctor specialty (*e.g. Cardiologist, Neurologist*)
<!-- , and a date on which he/she wishes to book an appointment (either *as soon as possible*, or a specified date and time interval)  -->.
Then, using the **Google Places API for JavaScript** to fetch data regarding **working hours** and **distance from the user's location**, the application creates a list.
The top of the list contains doctor offices of the specified specialty that are the **closest in proximity** to the user
<!-- , and that are **open as soon as possible** in relation to the date specified by the user (if any) -->.

RO: Utilizatorul selectează specialitatea doctorului de care are nevoie (*e.g. Cardiologist, Neurologist*).
Apoi, folosind **API-ul Google Places pentru JavaScript**, se colectează datele în legatură cu distanța doctorului de la utilizator, creând astfel o listă.
Lista începe cu cei mai apropiați (proximitate) doctori a specialității specificate de utilizator, și termină cu cei mai distanți.