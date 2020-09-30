import React from 'react';
import Main from "./Main";
import Footer from "./Footer";

const ContentWrapper = () => {
    return(
        <div id="content-wrapper" className="d-flex flex-column">
            <Main />
            <Footer />

        </div>

    );
}


export default ContentWrapper;