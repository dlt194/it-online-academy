import { CourseSectionComponent } from "../Components/CourseSectionComponent";
import CodeExample from "../Components/CodeExample";

import { default as MovieReview_9_1 } from "../Components/Module_9/9.1/MovieReview.tsx?raw";
import { default as MovieReview_9_1_Example } from "../Components/Module_9/9.1/MovieReview";

import { default as Header_9_1_1 } from "../Components/Module_9/9.1.1/components/Header.tsx?raw";
import { default as MovieReview_9_1_1 } from "../Components/Module_9/9.1.1/MovieReview.tsx?raw";
import { default as MovieReview_9_1_1_Example } from "../Components/Module_9/9.1.1/MovieReview";

import { default as MovieReview_9_2 } from "../Components/Module_9/9.2/MovieReview.tsx?raw";
import { default as MovieReview_9_2_Example } from "../Components/Module_9/9.2/MovieReview";

import { default as Movies_9_3 } from "../Components/Module_9/9.3/components/Movies/Movies.tsx?raw";
import { default as MovieReview_9_3 } from "../Components/Module_9/9.3/MovieReview.tsx?raw";
import { default as MovieReview_9_3_Example } from "../Components/Module_9/9.3/MovieReview";

import { default as WatchMovies_9_4 } from "../Components/Module_9/9.4/components/Movies/WatchMovies.tsx?raw";
import { default as Movies_9_4 } from "../Components/Module_9/9.4/components/Movies/Movies.tsx?raw";
import { default as MovieReview_9_4 } from "../Components/Module_9/9.4/MovieReview.tsx?raw";
import { default as MovieReview_9_4_Example } from "../Components/Module_9/9.4/MovieReview";

function Module_9() {
  return (
    <>
      {/* 9.1 */}
      <CourseSectionComponent
        title="Movie Review App"
        children={
          <div>
            <CodeExample component={MovieReview_9_1} />
            <MovieReview_9_1_Example />
          </div>
        }
      />
      {/* 9.1.1 */}
      <CourseSectionComponent
        title="Practical Activity: Setting Up a Movie Review Application"
        children={
          <div>
            <CodeExample component={Header_9_1_1} />
            <CodeExample component={MovieReview_9_1_1} />
            <MovieReview_9_1_1_Example />
          </div>
        }
      />
      {/* 9.2 */}
      <CourseSectionComponent
        title="Adding Headers"
        children={
          <div>
            <CodeExample component={MovieReview_9_2} />
            <MovieReview_9_2_Example />
          </div>
        }
      />
      {/* 9.3 */}
      <CourseSectionComponent
        title="Adding Components"
        children={
          <div>
            <CodeExample component={Movies_9_3} />
            <CodeExample component={MovieReview_9_3} />
            <MovieReview_9_3_Example />
          </div>
        }
      />
      {/* 9.4 */}
      <CourseSectionComponent
        title="Creating Movie Display Components"
        children={
          <div>
            <CodeExample component={WatchMovies_9_4} />
            <CodeExample component={Movies_9_4} />
            <CodeExample component={MovieReview_9_4} />
            <MovieReview_9_4_Example />
          </div>
        }
      />
    </>
  );
}

export default Module_9;
