import React from 'react';
import blog from './blog.module.css'

const Blog_Component = ({img_src,img_alt,title,description,postlink}) =>{
    return(
        <div className={blog.img_content_qobi}>
            <div className={blog.img_container_qobi}>
                <img src={img_src} alt={img_alt} />
            </div>
            <div className={blog.text_content_qobi}>
                <div className={blog.title_qobi}>
                    <h3 onClick={postlink}>{title}</h3>
                </div>
                <div className={blog.description_qobi}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Blog_Component;