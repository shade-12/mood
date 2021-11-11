# Mood 👾

University can be very stressful at times and sometimes the resources you need are not readily available to you. This web application can help students relax by completing positive "mindfulness" tasks to beat their monsters. We decided to build a web application specifically for mobile since we thought that the app would be most effective if it is very accessible to anyone. We implemented a social aspect to it as well by allowing users to make friends to make the experience more enjoyable. Everything in the design was carefully considered and we always had mindfulness in mind, by doing some research into how colours and shapes can affect your mood.

Read more on devpost: https://devpost.com/software/mood-3zvp0n

## Table of Content:
- [Technology Stack](#technology-stack)
- [Key Features](#key-features)
- [Project Setup](#project-setup)
- [App Demo](#app-demo)
- [Developers](#developers)


### Technology Stack
* React 16.8.6
* React Router Dom 5.0.1
* Rails 2.6.2
* Bootstrap 4.3.1
* SASS 4.12.0


### Key Features
Mood prompts you to choose your current mood on your first login of every day, which then allows us to play music that matches your mood as well as create monsters which you can defeat by completing tasks meant to ease your mind. You can also add friends and check on their progress, and in theory be able to interact with each other through the app by working together to defeat the monsters, however, we haven't been able to implement this functionality yet.


### Project Setup
1. cd into client folder and run `npm install`
2. Run `bundle install` in the root folder
3. Run `rake:db setup` then `rake:db migrate` to initialize the database
4. Run `bin/rails s` to start the rails back-end server
5. In a new terminal window, run `npm start` to start the react front-end server
6. Visit `http://localhost:3000` to view the app (Make sure you include all the API keys in order to run the app)


### App Demo
!["Login Page"](https://github.com/shade-12/mood/blob/master/assets/login.png?raw=true)
!["Home Page"](https://github.com/shade-12/mood/blob/master/assets/home.png?raw=true)


### Developers
 - [Cindy Miao](https://github.com/cxsong1)
 - [Eric Yan](https://github.com/eqfy)
 - [Ken Johnson](https://github.com/Kojon74)
 - [Shade Wong](https://github.com/shade-12)
