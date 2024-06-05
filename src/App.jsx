import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ProtectedContent from "./pages/ProtectedContent.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";

function App() {
  const { session } = useSupabaseAuth();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        {session && <Route path="/protected" element={<ProtectedContent />} />}
      </Routes>
    </Router>
  );
}

export default App;
