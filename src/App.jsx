import "./App.css";
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
