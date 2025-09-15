import { CourseSectionComponent } from "../Components/CourseSectionComponent";
import CodeExample from "../Components/CodeExample";

import { default as WatchMovies_10_2 } from "../Components/Module_10/10.2/components/Movies/WatchMovies.tsx?raw";
import { default as Movies_10_2 } from "../Components/Module_10/10.2/components/Movies/Movies.tsx?raw";
import { default as MovieReview_10_2 } from "../Components/Module_10/10.2/MovieReview.tsx?raw";
import { default as MovieReview_10_2_Example } from "../Components/Module_10/10.2/MovieReview";

function Module_10() {
  return (
    <>
      {/* 10.1 */}
      <CourseSectionComponent
        title="Introduction to API"
        children={
          <div>
            <h2 className="underline mb-1">What is an API?</h2>
            <p>API stands for Application Programming Interface</p>
            <p>
              An API is a set of guidelines that define how one software
              application can interact and utilise the data or features offered
              by another software application.
            </p>
            <h2 className="underline mb-1 mt-1">Types of API</h2>
            <ul className="list-disc pl-6">
              <li>Open API - Free to use by anyone</li>
              <li>
                Partner API - Usually available with the correct
                license/permissions from the API Developer
              </li>
              <li>
                Internal API - Usually closed source, only available to the
                developers of that API
              </li>
              <li>
                Composite API - Combines Data & Services, primarily used to
                increase performance in your application
              </li>
            </ul>
            <h2 className="underline mb-1 mt-1">Endpoints</h2>
            <p>
              API endpoints are specific paths or URLs on a server where an API
              can receive requests and send responses
            </p>
            <p>
              Base URL: <code>https://api.news.com</code>
            </p>
            <p>
              Path: <code>'/user/', '/orders/21'</code>
            </p>
            <p className="pt-1">
              API's will usually require an API Key in order to authenticate
              correctly. When you make a call to the API you may need to provide
              this API key, it will then be verified and if correct the API will
              responde accordingly.
            </p>
            <h2 className="underline mb-1 mt-1">Request Methods</h2>
            <p>
              Request Methods characterise what action we are going to take.
              There are four main types:
            </p>
            <ul className="list-disc pl-6">
              <li>GET - Retrieves data from the API</li>
              <li>POST - Sends data to the API</li>
              <li>PUT - Updates an object/record</li>
              <li>DELETE - Removes an object/record</li>
            </ul>
            <h2 className="underline mb-1 mt-1">Response Codes</h2>

            <ul className="list-disc pl-6">
              <li>200 - OK: When a user's request was succesful</li>
              <li>201 - Created: A resource was successfully created</li>
              <li>400 - Bad Request: The request was invalid</li>
              <li>401 - Unauthorised: Authentication is required</li>
              <li>404 - Not Found: The resource was not found</li>
              <li>
                500 - Server Internal Error: The server encountered an error
                whilst processing the request.
              </li>
            </ul>
          </div>
        }
      />
      {/* 10.2 */}
      <CourseSectionComponent
        title="API Key & Methods to Access API"
        children={
          <div>
            <CodeExample component={WatchMovies_10_2} />
            <CodeExample component={Movies_10_2} />
            <CodeExample component={MovieReview_10_2} />
            <MovieReview_10_2_Example />
          </div>
        }
      />
      {/* 10.3 */}
      <CourseSectionComponent
        title="Practice Exercise"
        children={<div></div>}
      />
      {/* 10.4 */}
      <CourseSectionComponent
        title="Filtering & Sorting"
        children={<div></div>}
      />
      {/* 10.5 */}
      <CourseSectionComponent
        title="Adding Reusable Components"
        children={<div></div>}
      />
    </>
  );
}

export default Module_10;
