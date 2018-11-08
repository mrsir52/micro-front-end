import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Input, Fa, FormInline } from "mdbreact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <FormInline>
            <Input label="Type the Value" icon="hand-lizard-o" group type="number" />
            <Input
              label="Type the operation"
              icon="meh-o"
              group
              type="text"
            />
            <Button color="success">Submit</Button>
          </FormInline>
        </div>
      </div>
    );
  }
}

export default App;
