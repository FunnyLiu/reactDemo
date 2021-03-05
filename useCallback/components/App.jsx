import React, { useCallback, useState } from "react";
import Effect from "./Effect.jsx";
import Memo from "./Memo.jsx";
import Simple from "./Simple.jsx";
import UseMemo from "./useMemo.jsx";

function App() {


  return (
    <div>
      <Simple />
      <Effect/>
      <Memo/>
      <UseMemo/>
    </div>
  );
}

export default App;
