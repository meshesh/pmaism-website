import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { LeadProvider } from "@/context/LeadContext";
import useLenis from "@/hooks/useLenis";
import Landing from "@/pages/Landing";

function App() {
  useLenis();

  return (
    <div className="App">
      <LeadProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </LeadProvider>
      <Toaster position="top-center" theme="dark" richColors />
    </div>
  );
}

export default App;
