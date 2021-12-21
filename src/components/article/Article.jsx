import React from 'react';
import './article.css';

const Article = ({ imgURL, date, title }) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={imgURL} alt="Blog Image" />
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>
                        <a href="#">
                            {title}
                        </a>
                    </h3>
                </div>
                <p>
                    <a href="#">
                        Read Full Article
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Article
