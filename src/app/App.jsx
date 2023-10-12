import React from "react";
import Title from "../features/title/Title";
import ExampleComponent from "../features/example/ExampleComponent";
import "./App.css";
/**
 * Main application component
 * @constructor
 */
const App = () => {
  return (
    <div className={"main-container"}>
      <div>
        <Title
          title={"CX Starter App"}
          subtitle={"SCSS Applied, hover should be blue"}
        />
        <ExampleComponent />
      </div>
    </div>
  );
};
export default App;
