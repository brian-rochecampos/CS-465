Architecture 
In my full-stack project, I used the MEAN stack, which consists of MongoDB, Express, Angular, and Node.js, for both the customer-facing and administrative sides of the application. Initially, the customer-facing side was built using Express to render static HTML content. As the project evolved, I incorporated Angular to create a single-page application (SPA), which added dynamic functionality and a smoother user experience.
For the frontend development, I used Angular to create dynamic components. The Angular app structure included building components for displaying the trip listings and the admin interface. The admin panel was integrated with the backend using the Angular CLI, and it allowed for managing trip data using POST, GET, PUT, and DELETE methods.
On the backend, I set up the server with Node.js and used Express to handle the routing and controllers, which served the data from the MongoDB database. I integrated MongoDB using Mongoose, which helped manage the trip data and other related information. This data was made available through RESTful API endpoints.
The use of the SPA allowed for a seamless user experience on both the customer and admin sides, as pages no longer needed to be reloaded with every action.
Regarding the choice of database, I opted for MongoDB because it is a NoSQL database. It is well-suited for handling large volumes of unstructured data, like travel bookings, which can vary in their details. The flexible schema provided by MongoDB made it easy to store and manage the trip data.

Functionality
JSON, or JavaScript Object Notation, is a data format used to send and receive data between the backend (Express server) and the frontend (Angular SPA). While JavaScript is a programming language, JSON is simply a lightweight data format that is easy for both humans and machines to read and write.
JSON played a key role in connecting the frontend and backend of the application. For example, when displaying trips on the frontend, I used an API call to retrieve the trip data stored in MongoDB. The API returned the data in JSON format, which the Angular components could then render for the user.
As for refactoring, I frequently improved the code to enhance efficiency, especially in the admin panel. I created reusable UI components, such as trip cards, which helped streamline the development process and made the code more maintainable. These components were reusable across various parts of the app, making it easier to add new features and manage existing ones.


Testing
Testing was a crucial step, especially with the added security features in the final stages of the project. After implementing security for login authentication, I used Postman to test the new API endpoints, including those for creating, reading, updating, and deleting trips. Each of these endpoints was tested to ensure that the application could authenticate users correctly and handle HTTP status codes as expected.
To manage admin access, I applied a JWT-based (JSON Web Token) security system. This ensured that only authorized users could access the admin panel and make changes to the trip data.
The methods used to interact with the API included POST, GET, PUT, and DELETE. These methods were tested thoroughly using Postman to verify that the routes were working correctly and that they returned the appropriate responses.


Reflection
This course significantly helped me improve my full-stack development skills. I gained hands-on experience with Angular, Node.js, MongoDB, and Express, and learned how to manage a project from start to finish. From building the frontend UI to managing the backend database, I feel much more confident in my ability to develop modern web applications.
Additionally, I now have a deeper understanding of how security features like JWT authentication are integrated into web applications to ensure safe user access. This knowledge, combined with the real-world experience I've gained, has made me a more marketable developer, equipped with the technical skills needed to work on full-stack web applications.


Conclusion
In summary, I successfully built and tested a full-stack application for Travlr Getaways using the MEAN stack, which included MongoDB for the database, Express for the server, Angular for the frontend, and Node.js for the backend logic. The application met all the client requirements, including a customer-facing website, an admin interface, and full security features. I have documented my approach and reflected on my experience in this journal as part of the course.


