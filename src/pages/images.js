import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from './image';

const PhotoContainer = props => {

    const displayPhotos = () => {
    return props.photos.map(photo => {
        return <Image url={photo.url}/>;
    });
};

return (
    <section>{displayPhotos()}</section>
)
};

export default PhotoContainer
