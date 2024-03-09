# DocFinder
This is a project made during the ITFest Hackathon 2024, specifically for the 'Health & Wellness" track.
## Contributors (Team members)

 - Sebastian Kalciov
 - Silviu Stefan Mitrea
 - Raul-Andrei Ariton
 - Maria Popescu
# Project description
DocFinder is a responsive web application, which is 'mobile-first', meaning it is designed and developed with mobile users in mind.
The user selects a doctor specialty (*e.g. Cardiologist, Neurologist*), and a date on which he/she wishes to book an appointment (either *as soon as possible*, or a specified date and time interval). 
Then, using the Google Places API for JavaScript to fetch data regarding **opening hours** and **distance from user location**, the application creates a list.
The top of the list contains doctor offices of the specified specialty that are the **closest in proximity** to the user, and that are **open as soon as possible** in relation to the date specified by the user (if any).
