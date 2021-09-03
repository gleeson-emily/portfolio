import images from '../project-images/project-images.js'

const projects = [ 
    {
        id: 1,
        projectTitle: "Code Creatures",
        projectTech: "MERN Stack - MongoDB, Express, React, and Node.js; Bootstrap CSS",
        projectDescription: "A virtual pet site that helps users learn coding skills through challenges and games, with the help of some adorable critter friends. Pet sprites are dynamically generated, and users can earn coins to purchase food for their pets.",
        myRole: "Initial Database and Server Set-Up, Front-End Styling, and Dynamically Rendering Pet Sprites",
        picture: images.codeCreatures,
        pictureAltText: "Code Creatures",
        githubLink: "https://github.com/gleeson-emily/Code-creatures",
        deployedLink: "http://cold-code-creatures.herokuapp.com/"  
    },
    {
        id: 2,
        projectTitle: "Plan Your Trip - Travel Budgeting App",
        projectTech: "HTML, CSS, JavaScript, Handlebars, and MySQL",
        projectDescription: "A travel budgeting app that allows users to save and update trip budget data. Users can also leave comments on individual city pages, which can be used for providing travel tips.",
        myRole: "Back-End Developer and JavaScript Troubleshooting",
        picture: images.planTrip,
        pictureAltText: "Plan Your Trip Budget App",
        githubLink: "https://github.com/gleeson-emily/cold-travel-planner",
        deployedLink: "https://intense-savannah-61016.herokuapp.com/"
    },
    {   
        id: 3,
        projectTitle: "Progressive Budget App",
        projectTech: "Progressive Web Application and MongoDB",
        projectDescription: "A budgeting app that allows users to enter transactions regardless of if they have access to the internet.",
        myRole: "Solo Developer",
        picture: images.budgetTracker,
        pictureAltText: "Progressive Budget App",
        githubLink: `https://github.com/gleeson-emily/progressive-budget-app`,
        deployedLink: `https://sleepy-everglades-32339.herokuapp.com/`
    },
    {
        id: 4,
        projectTitle: "Fitness Tracker",
        projectTech: "MongoDB and JavaScript",
        projectDescription: "A fitness tracker that uses a MongoDB database to save information about users' workouts.",
        myRole: "Solo Developer",
        picture: images.fitnessTracker,
        pictureAltText: "Fitness Tracker",
        githubLink: "https://github.com/gleeson-emily/fitness-tracker",
        deployedLink: " https://pacific-lowlands-33435.herokuapp.com/"
    },
    {
        id: 5,
        projectTitle: "Simple Day Planner",
        projectTech: "HTML, CSS, and jQuery",
        projectDescription: "A simple day planner app that allows users to enter information for each hour of the standard workday. The information is saved to local storage, and can be updated and deleted. Used jQuery to execute the logic and Bootstrap for CSS styling.",
        myRole: "Solo Developer",
        picture: images.dayPlanner,
        pictureAltText: "Simple Day Planner",
        githubLink: "https://github.com/gleeson-emily/simple-day-planner",
        deployedLink: "https://gleeson-emily.github.io/simple-day-planner/"
    },
    {
        id: 6,
        projectTitle: "Project Mayhem eSports Dashboard",
        projectTech: "HTML, CSS, JavaScript, and Server-Side APIs",
        projectDescription: "An eSports app that uses API calls to fetch information about eSports tournaments and teams. Built using Twitch and PandaScore APIs, and Bulma CSS framework for the styling. A group project - my contribution included pulling data from PandaScore's API and styling using Bulma.",
        myRole: "Front-End Styling and Setting Up API Calls",
        picture: images.eSportsDash,
        pictureAltText: "Project Mayhem eSports Dashboard",
        githubLink: "https://github.com/Staycold/EsportsDashboard",
        deployedLink: "https://staycold.github.io/EsportsDashboard/"
    },
    {
    id: 7,
    projectTitle: "Google Book Search App",
    projectTech: "MERN Stack - MongoDB, Express, React, and Node.js",
    projectDescription: "A code refactoring exercise in which the app's RESTful API was replaced with a GraphQL API built using Apollo Server. Allows users to sign up, search for books using the Google Books API search engine, and save books to their personal account.",
    myRole: "Solo Developer",
    picture: images.bookSearch,
    pictureAltText: "Google Book Search App",
    githubLink: "https://github.com/gleeson-emily/book-search-app",
    deployedLink: "https://peaceful-stream-07540.herokuapp.com/."
    }
    
]

export default projects;