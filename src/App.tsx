import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import Login from "./pages/login";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Login />
    </ThemeProvider>
  );
}

export default App;
