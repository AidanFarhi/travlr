# Travlr

## Architecture

- Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

While developing this project, a couple of different approaches were used to create the front-end layer. For the client facing portion, Express.js was used to handle and process
requests. The content was displayed using a combination of HTML, CSS, and Handlebars templating to dynamically render pages. Using templating helped to reduce repetitive code
and enabled breaking up sections of the UI into reusable components that could dynamically be injected with data.

The admin portion of the application was built as a SPA using the Angular framework. The UI was broken up into components, services, and models. Each component contained
all the dependencies, markup, styling, and logic needed to handle its lifecycle. For example, the `trip-listing` component used the `TripDataService` to fetch a list of
trips from the API layer. Once the trip data was retrieved, Angular specific directives within the `trip-listing.component.html` file rendered a list of `TripCardComponent` components.

- Why did the backend use a NoSQL MongoDB database?

MongoDB was chosen as the database for the application. Some of the highlights of MongoDB are its flexable schema, horizontal scalability, and available ODMs like Mongoose.
Its document-oriented data format is also almost identical to JSON, which is the primary data serialization format of most REST APIs.

## Functionality

- How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON, which stands for JavaScript Object Notation, is a data serialization format commonly used to transfer data between services on the web.
It is based on the way objects are structed in JavaScript.
JavaScript is a programming language that runs in most browsers as well as on back-end servers via Node.js.
The backend portion of the application was built with JavaScript.
One of the components of the backend is a REST API that responds to requests with JSON data.
When the frontend layer made requests to the API, it recieved the JSON response, and used it to dynamically render markup to the user.

- Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

At the start of the project, all of the UI elements were split into several HTML files. Within the HTML, there were repetitive sections of code, such as the header, footer, and card elements.
These HTML files were refactored into Handlebars template files. This enabled re-use of common components and reduced the total amount of code required to display content.

## Testing

- Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

## Reflection

- How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?




