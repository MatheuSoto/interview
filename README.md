# Interview
## Getting Started

Run the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To reset the data inside the project:
```bash
npm run seed
# or
yarn seed
```

## Development Desicions

### Database
* To start the project, the first thing I did was model the database and its entities. There are many different ways to create a database, but in my case, I opted for the fastest approach that closely resembles a real database. I created the following entities:
  * Types
  * Categories
  * Records
* In this case, "Records" would be the user's entries, which would include a date and an amount indicating an expense or income. This gives us the option to add a button for adding a new record in the future.
* Categories represent the rows displayed in the current table, and their monthly records are the sum of the records, as each record is assigned a Category_id.
* Lastly, the types represent the "four main categories" as described in the PDF. Since we already know what the records are, I didn't find it necessary to create a separate table, so I assigned them as text within the categories.
It's important to note that I didn't create actual tables; instead, I used JSON files to store the data, but I described them as tables for better understanding.
### Project Creation
* For the project creation, I decided not to use the latest version of Next.js because there were many errors and inconsistencies when integrating GraphQL with Next.js. One option could have been to install Next.js in an independent Express project, but that wouldn't allow me to fully utilize the advantages of Next.js. Therefore, I integrated it directly using the native Next.js approach, although I had to revert to an older version.
* I also chose not to use additional libraries beyond those required for the functionalities. Since it's a test, I wanted to demonstrate my problem-solving skills.
### Backend Development
* For the backend development, I chose to integrate GraphQL directly into the "api" folder of Next.js. For this purpose, I created a new folder called "graphql," which would contain the controllers, resolvers, and schemas. This way, I could simulate the functionality of a real backend project.
* For the "records" data, I decided to create a data generator that would overwrite the records.json file. In the case of categories, these data remain unchanged.
* When preparing the data for the API, I decided to do it manually, as this would allow me to use advanced JavaScript methods like reduce, find, filter, among others. However, in a real backend, this can be easily solved by querying the database.
* For data storage, I modified the current JSON file to reflect the changes. This allowed me to work with Node.js and use "fs" and "path" for file manipulation.
### Frontend Development
* For the frontend development, I chose to use TypeScript. This would provide more safety during development and help reduce errors.
To add styles, I opted for Tailwind CSS due to its flexibility in handling CSS without the need for additional dependencies.
* For the drag and drop functionality, I used the native approach as it is simple and the project requirements weren't complicated.
### Conclusión
* In conclusion, I manually implemented all the functionalities without relying on third-party libraries to demonstrate my frontend and backend skills within a single project using native Next.js.