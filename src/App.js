import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "components";

const Buy = lazy(() => import("pages/Buy"));
const Detail = lazy(() => import("pages/Detail"));
const Cart = lazy(() => import("pages/Cart"));
const Success = lazy(() => import("pages/Success"));

function App() {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback="Loading...">
          <Switch>
            <Route exact path="/" component={Buy} />
            <Route exact path="/product-detail/:id" component={Detail} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/success" component={Success} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
