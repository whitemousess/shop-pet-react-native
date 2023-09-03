import React from "react";

import AppNav from "./src/navigations/AppNav";
import { AuthProvider } from "./src/context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
