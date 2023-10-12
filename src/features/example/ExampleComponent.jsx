import React from "react";
import "./ExampleComponent.scss";
import Button from "@cx/ui/Button";

/**
 * An example component
 * @constructor
 */
const ExampleComponent = () => {
  const [clickCount, setClickCount] = React.useState(0);
  return (
    <div>
      <div>{`Click Count: ${clickCount}`}</div>
      <div>
        <div className={"button-container"}>
          <Button
            htmlId={"increment"}
            onClick={() => setClickCount((prev) => prev + 1)}
          >
            Increment
          </Button>
          <Button
            htmlId={"decrement"}
            onClick={() => setClickCount((prev) => prev - 1)}
          >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ExampleComponent;
