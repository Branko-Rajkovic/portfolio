import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";

function App() {
  //<Route path="/:id" element={<Coin />} />
  return (
    <ErrorBoundary fallback={<Error />}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
