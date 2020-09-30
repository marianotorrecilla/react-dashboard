import React from 'react';
import Heading from './Heading';
import ContentRowUp from './ContentRowUp';
import ContentRowDown from './ContentRowDown';

const PageContent = () => {
    return(
        <div className="container-fluid">
            <Heading />
            <ContentRowUp />
            <ContentRowDown />

        </div>

    );
}


export default PageContent;