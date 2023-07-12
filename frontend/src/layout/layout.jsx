import React from "react";

import header from "../components/header/header";
import footer from "../components/footer/footer";
import routers from "../routes/routers";

const layout = () => {
  return <>
  <header/>
    <main>
        <routers/>

    
    </main>
  <footer/>
  </>
};

export default layout;
