import React, { Component } from 'react'
import Gallery from 'react-grid-gallery';

import img0 from "../../images/gallery-photos/originals/0.jpg";
import img0thumb from "../../images/gallery-photos/thumbails/0.jpg";
import img1 from "../../images/gallery-photos/originals/1.jpg";
import img1thumb from "../../images/gallery-photos/thumbails/1.jpg";
import img2 from "../../images/gallery-photos/originals/2.jpg";
import img2thumb from "../../images/gallery-photos/thumbails/2.jpg";
import img3 from "../../images/gallery-photos/originals/3.jpg";
import img3thumb from "../../images/gallery-photos/thumbails/3.jpg";
import img4 from "../../images/gallery-photos/originals/4.jpg";
import img4thumb from "../../images/gallery-photos/thumbails/4.jpg";
import img5 from "../../images/gallery-photos/originals/5.jpg";
import img5thumb from "../../images/gallery-photos/thumbails/5.jpg";
import img6 from "../../images/gallery-photos/originals/6.jpg";
import img6thumb from "../../images/gallery-photos/thumbails/6.jpg";
import img7 from "../../images/gallery-photos/originals/7.jpg";
import img7thumb from "../../images/gallery-photos/thumbails/7.jpg";
import img8 from "../../images/gallery-photos/originals/8.jpg";
import img8thumb from "../../images/gallery-photos/thumbails/8.jpg";
import img9 from "../../images/gallery-photos/originals/9.jpg";
import img9thumb from "../../images/gallery-photos/thumbails/9.jpg";
import img10 from "../../images/gallery-photos/originals/10.jpg";
import img10thumb from "../../images/gallery-photos/thumbails/10.jpg";
import img11 from "../../images/gallery-photos/originals/11.jpg";
import img11thumb from "../../images/gallery-photos/thumbails/11.jpg";
import img12 from "../../images/gallery-photos/originals/12.jpg";
import img12thumb from "../../images/gallery-photos/thumbails/12.jpg";
import img13 from "../../images/gallery-photos/originals/13.jpg";
import img13thumb from "../../images/gallery-photos/thumbails/13.jpg";
import img14 from "../../images/gallery-photos/originals/14.jpg";
import img14thumb from "../../images/gallery-photos/thumbails/14.jpg";

export default class GalleryGrid extends Component {
    constructor(props){
        super(props);

        this.IMAGES =
            [
                {
                    src: img0,
                    thumbnail: img0thumb,
                    thumbnailWidth: 320,
                    thumbnailHeight: 212,
                },
                {
                    src: img1,
                    thumbnail: img1thumb,
                    thumbnailWidth: 320,
                    thumbnailHeight: 174,
                    // caption: "After Rain (Jeshu John - designerspics.com)"
                    // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                },
                {
                    src: img2,
                    thumbnail: img2thumb,
                    thumbnailWidth: 320,
                    thumbnailHeight: 212,
                },
                {
                    src: img3,
                    thumbnail: img3thumb,
                    thumbnailWidth: 220,
                    thumbnailHeight: 220,
                },
                {
                    src: img4,
                    thumbnail: img4thumb,
                    thumbnailWidth: 320,
                    thumbnailHeight: 212,
                },
                {
                    src: img5,
                    thumbnail: img5thumb,
                    thumbnailWidth: 320,
                    thumbnailHeight: 174,
                },
                {
                    src: img6,
                    thumbnail: img6thumb,
                    thumbnailWidth: 220,
                    thumbnailHeight: 220,
                },
                {
                    src: img7,
                    thumbnail: img7thumb,
                    thumbnailWidth: 320,
                    thumbnailHeight: 212,
                },
                {
                    src: img8,
                    thumbnail: img8thumb,
                    thumbnailWidth: 320,
                    thumbnailHeight: 174,
                },
                {
                    src: img9,
                    thumbnail: img9thumb,
                    thumbnailWidth: 250,
                    thumbnailHeight: 382,
                },
                {
                    src: img10,
                    thumbnail: img10thumb,
                    thumbnailWidth: 320,
                    thumbnailHeight: 212,
                },
                {
                    src: img11,
                    thumbnail: img11thumb,
                    thumbnailWidth: 250,
                    thumbnailHeight: 382,
                },
                {
                    src: img12,
                    thumbnail: img12thumb,
                    thumbnailWidth: 220,
                    thumbnailHeight: 220,
                },
                {
                    src: img13,
                    thumbnail: img13thumb,
                    thumbnailWidth: 320,
                    thumbnailHeight: 174,
                },
                {
                    src: img14,
                    thumbnail: img14thumb,
                    thumbnailWidth: 320,
                    thumbnailHeight: 212,
                },
            ];
    }

    render() {
        return (
            <div>
                <Gallery images={this.IMAGES}/>
            </div>
        )
    }
}
