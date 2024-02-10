import React from "react";
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import Popup from "./components/Popup";

const App = () => {
    const routing = useRoutes(Themeroutes);

    return (
        <div className="dark">
            {routing}
            <Popup /> 
        </div>
    );
};

export default App;
