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

MongoDB was chosen as the database for the application. Some of the highlights of MongoDB are its flexible schema, horizontal scalability, and available ODMs like Mongoose.
Its document-oriented data format is also almost identical to JSON, which is the primary data serialization format of most REST APIs.

## Functionality

- How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON, which stands for JavaScript Object Notation, is a data serialization format commonly used to transfer data between servers on the web.
It is based on the way objects are structured in JavaScript.
JavaScript is a programming language that runs in most browsers as well as on back-end servers via Node.js.
The backend portion of the application was built with JavaScript.
One of the components of the backend is a REST API that responds to requests with JSON data.
When the frontend layer made requests to the API, it received the JSON response, and used it to dynamically render markup to the user.

- Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

At the start of the project, all of the UI elements were split into several HTML files. Within the HTML, there were repetitive sections of code, such as the header, footer, and card elements.
These HTML files were refactored into Handlebars template files. This enabled re-use of common components and reduced the total amount of code required to display content.

## Testing

- Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Virtually all applications on the modern web communicate via the HTTPS (a secure version of HTTP) protocol. When a person browsing the web types in `www.catphotos.com` and hits enter,
their browser will issue a `GET` request for that resource via the internet using this protocol. Once the IP address for the server has been found via DNS, the hosting computer will response with an HTML page
containing a bunch of cat photos.
`GET` is one of the commonly used HTTP methods. It used to request resources from a server.
There are other methods which are used by a client talking to a server signifying what they would like to do.
This includes `POST` to submit data to a server, `PUT` which updates data, and `DELETE` which removes information.

Many applications are broken into front-end and back-end layers. The back-end layer typically exposes several endpoints over HTTPS. Each endpoint represents
a specific request or operation. For example, within the travlr project, there were a series of endpoints related to trip information.
If a `GET /trips` request is recieved by the back-end, it responds with a JSON serialized list of objects. There is also a method for registering new users, which uses
the `POST /register` endpoint.

Endpoints that manipulate data or contain sensitive information are typcially secured to limit access. A common way to do this is to add some sort of *authentication* and *authorization* mechanism.
In the travlr project, this was handled using JWT tokens. All endpoints related to updating or creating trips required a valid JWT token to be present in the request.
If it was not present, the operation would not be allowed. This was the *authorization* layer.
In order to obtain a valid JWT, a user would have to submit a `POST /login` request with their credentials. The server then validates the credentials.
If the credentials are valid, a JWT is generated and issued back to the client to be used in subsequent requests.
This constitutes the *authorization* layer.

## Reflection

- How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

My goal is to become a well-rounded software engineer capable of leveraging a vast toolbelt of languages, frameworks, and design philosophies. Building a full-stack application from the ground up was a rewarding experience. I found it enrichening to use Angular for the first time as well as Node, Express, and Handlebars. By walking through different ways to build applications, I have the opportunity to develop skills relevant to the modern job market and obtain a solid foundation in engineering practices.

