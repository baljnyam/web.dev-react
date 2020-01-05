import React, { Component, lazy, Suspense } from "react";

const AvatarComponent = lazy(() => import("./AvatarComponent"));
const InfoComponent = lazy(() => import("./InfoComponent"));
const MoreInfoComponent = lazy(() => import("./MoreInfoComponent"));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: false
    };
  }

  showDetails() {
    this.setState({ details: true });
  }

  renderLoader = () => <div className="loader"></div>;

  render() {
    const { details } = this.state;

    return (
      <div className="App">
        {!details && (
          <button onClick={() => this.showDetails()}>CLICK ME</button>
        )}
        {details && (
          <Suspense fallback={this.renderLoader()}>
            <AvatarComponent />
            <InfoComponent />
            <MoreInfoComponent />
          </Suspense>
        )}
      </div>
    );
  }
}

export default App;