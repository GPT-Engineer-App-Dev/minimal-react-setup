import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ProtectedContent from "./pages/ProtectedContent.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";

function App() {
  const { session } = useSupabaseAuth();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route
          path="/protected"
          element={session ? <ProtectedContent /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
