import React from 'react';

import "./blogSection.css";

import BlogImageLock from "../../../assets/img/blogImage1.png"
import BlogImageBox from "../../../assets/img/blogImage2.png";

function BlogSection() {
    return (
        <div className="blog-section__wrapper">
            <div className="blog-section">
                <div className="blog-section__description-wrapper">
                    <h4 className="blog-section__description-title">
                        Eget quis quam metus, scelerisque.
                    </h4>
                    <p className="blog-section__description">
                        Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu porttitor molestie massa porttitor. Quisque at turpis ut proin eu et magna etiam rhoncus.
                        Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra interdum in leo. Nullam ullamcorper id enim fermentum integer praesent bibendum. In ullamcorper purus scelerisque malesuada et egestas. Ac dictumst mauris sed facilisis.
                    </p>
                </div>
                <div className="blog-section__image-wrapper blog-section__image-wrapper_justify-left">
                    <img className="blog-section__image" src={BlogImageLock} alt="blog good" />
                </div>
                <div className="blog-section__image-wrapper">
                    <img className="blog-section__image" src={BlogImageBox} alt="blog good" />
                </div>
                <div className="blog-section__description-wrapper">
                    <h4 className="blog-section__description-title">
                        Eget quis quam metus, scelerisque.
                    </h4>
                    <p className="blog-section__description">
                        Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu porttitor molestie massa porttitor. Quisque at turpis ut proin eu et magna etiam rhoncus.
                        Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra interdum in leo. Nullam ullamcorper id enim fermentum integer praesent bibendum. In ullamcorper purus scelerisque malesuada et egestas. Ac dictumst mauris sed facilisis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;