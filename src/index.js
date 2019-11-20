import React from "react";
import ReactDOM from "react-dom";
import ShowcaseLayout from "./ReactGrid.jsx";

class ExampleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { layout: [] };
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(layout) {
    this.setState({ layout: layout });
  }

  // stringifyLayout() {
  //   return this.state.layout.map(function(l) {
  //     return (
  //       <div className="layoutItem" key={l.i}>
  //         <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
  //       </div>
  //     );
  //   });
  // }

  render() {
    return (
      <div>
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
      </div>
    );
  }
}

const contentDiv = document.getElementById("root");
const gridProps = window.gridProps || {};
ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import ShowcaseLayout from "./ReactGrid";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<ShowcaseLayout />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
