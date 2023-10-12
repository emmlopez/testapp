import React from "react";
import Grid from "@cx/ui/Grid";
import Col from "@cx/ui/Col";
import Card from "@cx/ui/Card";

const HomePage = () => {
  return (
    <Grid fluid className="template-page-wrapper page-wrapper__content-only">
      <Col sm={12} md={12} lg={12}>
        <Card htmlId={"cardId"}>
          <div className="template-content-wrapper content-wrapper__content-only">
            <h1>Hello World!</h1>

            <h3>This is a content-only layout.</h3>
            <p>
              This is just a sample of a content-only page layout and is meant
              only as a starting point. Change as needed!
            </p>
          </div>
        </Card>
      </Col>
    </Grid>
  );
};

export default HomePage;
