![Logo](https://github.com/user-attachments/assets/14445988-a8b5-4b73-b29b-bfed6affe842)

## Abstract
The “Art Collector” project is built with TypeScript and React, it allows you to browse artworks from the Rijksmuseum in the Netherlands, learn about them, and even create your own gallery by saving your favorites. Designed with accessibility in mind, it ensures that everyone can enjoy the content. Additionally, it is thoroughly tested with Cypress, and our team has implemented robust error handling methods to address any issues that may arise.

## Preview
![gif-1](https://github.com/user-attachments/assets/d36bd245-851b-4651-8391-b555d4ccfbf7)


## Screenshots
### Home Page
![Screenshot 2024-07-23 at 1 17 05 PM](https://github.com/user-attachments/assets/26c600dd-6f98-481f-b0fa-8729b572a21d)

### Main Gallery
![Screenshot 2024-07-23 at 1 17 24 PM](https://github.com/user-attachments/assets/a53a4410-64a9-403c-ba0d-d4a20a697f0d)

### My Gallery
![Screenshot 2024-07-23 at 1 18 07 PM](https://github.com/user-attachments/assets/dd7944c4-ddaa-4045-9676-57eb6e664458)



## Installation Instructions
### To start the app
- [ ]  Clone down the repository onto your local machine using `git clone https://github.com/KyleMBoomer/art-collector`
- [ ]  Once cloned down, cd into the direction and install dependencies by running `npm install`
- [ ]  Run `npm start` then visit the local host to view the application in your browser.

### To test with Cypress
- [ ]  Run `npm run cy:open #` then visit the local host to view the application in your browser.
- [ ]  Click E2E testing
- [ ]  Click Start E2E Testing in Chrome


## Pre-Planning
Used Github Project for Pre-planning. [here](https://github.com/users/KyleMBoomer/projects/2)
![layout11](https://github.com/user-attachments/assets/c9d8cc06-90e8-4e31-91f0-336ddd227bbf)


## Learning Goals
  * Gain hands-on experience with Typescript, Cypress and React.
  * Develop a modular project structure.
  * Utilize PR templates and a project board for efficient workflow management.
  
## Challenges
  * Initially, our plan was to utilize the Harvard Museum’s API. However, we encountered multiple issues that led to the generation of inconsistent data sets. As a result, our team convened and dedicated several hours to researching and identifying a more reliable museum API.
  * The learning curve with TypeScript in React was a bit steeper than the team had initially estimated. In addition, we had to learn new React hooks like `useContext` and `createContext` to make the My Gallery functionality work with regard to the Main Gallery fetch call from the Riksmuseum API. 
  
## Wins
* Successful implementation of Cypress testing over a modularized project in TypeScript feels like a win to us. We learned we needed to create fixtures that mirror the data structure from the API to pass our robust test suites. 
* Creating the Types file, and passing them down as props to the components, felt like a win with TypeScript. The built-in "error handling" of the language kept us from making mistakes with our Types. 

## Contributions
[Jordan Williamson - LinkedIn](https://www.linkedin.com/in/jordan-williamson-a079b3271/) <br />
[Kim Ewing - LinkedIn](https://www.linkedin.com/in/kimberlypekar/) <br />
[Kyle Boomer - LinkedIn](https://www.linkedin.com/in/kylemboomer/) <br />
[Seong Kang - LinkedIn](https://www.linkedin.com/in/seong-kang/)
