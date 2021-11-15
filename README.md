# project-catwalk

## Table of Content
- [Overview](#Overview)
- [Tech Stack](#Tech-Stack)
- [Module Description](#Module-Description)
- [Installation](#Installation)
- [Team Members](#Team-Members-&-Roles)

## Overview
Project catwalk is Front End Capstone project for HackReactor. This project comprises a complete redesign of the retail portal designed to address the concern of an outdated UI. The requirements provided in the given Business Requirement Documentation define the new user interface required for customers to browse items in our retail catalog.


## Tech Stack
### Front-End Development
#### React <img width="15%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg">
#### CSS <img width="15%" src="https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg">
#### Styled-Component <img width="15%" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png">

### Back-End Development
#### Nodejs <img width="15%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg">
#### Nodemon <img width="15%" src="https://www.vectorlogo.zone/logos/nodemonio/nodemonio-ar21.svg">
#### Express <img width="15%" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg">
#### axios <img width="15%" src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png">

### Compiler
#### webpack <img width="15%" src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-ar21.svg">
#### Babel <img width="15%" src="https://www.vectorlogo.zone/logos/babeljs/babeljs-ar21.svg">

### Code Formatter
#### ESlint <img width="15%" src="https://www.vectorlogo.zone/logos/eslint/eslint-ar21.svg">
#### Prettier <img width="15%" src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png">

### Testing
#### Jest <img width="15%" src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-ar21.svg">

### Project Management
#### Trello <img width="15%" src="https://www.vectorlogo.zone/logos/trello/trello-ar21.svg">

### Deployment
#### AWS <img width="15%" src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg">


---

## Module Description
- Product Overview
- Related Product & Outfit List
- Questions & Answers
- Ratings & Reviews

### Product Overview
### Related Product & Outfit List


### Questions & Answers
### Ratings & Reviews
The Ratings & Reviews module allows for viewing of ratings and reviews and submission of a new review for the selected product. The module consists of a Rating section and a Reviews section.
The Rating section summarizes the ratings for the product, renders the user ratings distribution in terms of stars, and breaks down the characteristics (such as fit, comfort, quality, length) ratings in an easy-to-read bar & triangle format. The star rating distribution also acts as a modular filter whereby you can sort the reviews to only display ones with the star rating(s) that are selected.
The Reviews section displays two reviews initially, and can be expanded to a windowed scrolling display when the "more reviews" button is clicked. There is a sorting functionality with three sort options that interacts cooperatively with the aforementioned star rating modular filter from the Ratings section. Each review can be marked as helpful or reported for being inappropriate, but only once each. 
The 'Add a Review' button will open up a submission page which can be used to submit new reviews. A user will be able to rate the product out of 5 stars (through an interactive star rating module) as well as rate characteristics and provide review text. If a required section within the submission form is filled out incorrectly, an alert will display asking the submitter to fix the issues.

## Installation
Fork the repo and clone to your local machine. After completion, follow these steps to install.

1. Make a `config.js` file to root folder. 
2. Assign the `API_KEY` variable to your GitHub token. You can read more about API token [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
3. Install dependencies

    ```bash
    npm install
    ```

4. In one terminal, build the webpack bundle

    ```bash
    npm run react-dev
    ```

5. In another terminal, start the server

    ```bash
    npm run server-dev
    ```

6. Visit [localhost:3000](http://localhost:3000) in the browser


## Team Members & Roles
- Kyle Hahn
- [Ziye Song](https://github.com/ZiyeS123) - Related Product & Outfit List
- Guillermo Martinez
- [John Hwang](https://github.com/johnjhwang) - Ratings & Reviews
