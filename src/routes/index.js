import CoreLayout from "layouts/CoreLayout";
import LoginLayout from "layouts/LoginLayout";
import NewsViewLayout from "layouts/NewsViewLayout";
import Home from "./Home";
import Login from "./Login";
import NewsView from "./NewsView";

export const createRoutes = (store) => ([{
  path        : "/news",
  component   : NewsViewLayout,
  indexRoute  : NewsView,
  childRoutes : [
    {
      path: "/news/:sourceId",
      indexRoute: NewsView,
    },
  ],
},
{
  path        : "/login",
  component   : LoginLayout,
  indexRoute  : Login,
},
]);

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
