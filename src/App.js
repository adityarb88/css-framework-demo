import React, { Component } from "react";
import { Hello } from "./lib/react";

class App extends Component {
    render() {
        return (
            <main className="container">
                <Hello />
            </main>
        );
    }
}

export default App;
