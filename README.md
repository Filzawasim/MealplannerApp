# Introduction:
Mealplanner App is a React Native application designed to help users plan their meals efficiently. It allows registered users to log in, view a timeline of their meals, and add new meals to their schedule.

# Table of Contents
- Features
- Registration Screen
- Login Screen
- Home Screen
-  Menu Screen
- Database

 
 # Features
User Authentication: Users can register and log in securely to access the app's features.
Timeline View: View meals organized by day and date in a timeline format.
Real-time Updates: Meals are displayed in real-time, allowing users to see their schedule dynamically.
Menu Selection: Users can select meal categories (Breakfast, Lunch, Dinner) and further define their meal (Staple, Main, Side, Soup).
Add/Delete Meals: Users can add new meals to their schedule and delete existing ones.
MongoDB Integration: The app utilizes MongoDB as its database for storing user data and meal information.

# Register Screen:
The user will first register him/herself by providing the basic information like Full name, email, password and conform password. By providing these information 
the user will get sucessfully registered. Code in Register.js

# Login Screen: 
The user who are already registered can easily login by providing the registered email and password.This will then navigate to the Home Screen. Code in Login.js

# Home Screen:
In our app's Home Screen, users can conveniently track their meals on a real-time day and date-based timeline. This feature provides a user-friendly interface displaying the meals they have entered. If the user hasn't added any meal yet, the interface gracefully prompts them with a "no meal added" component. Additionally, clicking on this component seamlessly navigates the user to the menu screen, encouraging them to add their meals effortlessly. code in Home.js

# Menu Screen:

The Menu Screen empowers users with a seamless meal management experience, offering choices between Breakfast, Lunch, and Dinner, further categorized into Staple, Main, Side, and Soup options. Users can effortlessly add their desired meals by selecting the appropriate category, specifying the dish type, and typing the meal name in the provided textbox before clicking the Add button. Additionally, users can duplicate existing items for efficiency and delete meals as needed. Meals added in the Menu Screen are dynamically reflected in real-time on both the Menu and Home Screens, with the latter displaying a "No meals added" message prompting users to navigate back to the Menu Screen for meal additions.

# DataBase:
The database used in this project is MongoDb.



 
