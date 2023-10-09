// react 17.0.2

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// import apollo
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apollo-client";

// import react-redux & store
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
