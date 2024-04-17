import "./App.css";
import Page from "../src/view/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
