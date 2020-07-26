import React from 'react'
import singlepost from './single-post.module.css'
// import {Link} from 'react-router-dom'
import dummydata from '../blog/dummydata'
import bgimg from './images/Rectangle15.png'
import timeimg from './images/Group63.png'
import shareimg from './images/Group64.png'
import commentimg from './images/Vector.png'

const SinglePost = ({dataIndex}) => {
    const [blogStory,setBlogStory] = React.useState([]);
    React.useEffect(()=>{function doIt(){!blogStory[0] && dummydata.dummy(setBlogStory);}doIt();})
    return(

    
        <div className={singlepost.singlepost}>
            
            <section className={singlepost.bg_qobi} style={{backgroundImage:`url(${bgimg})`}}></section>

            <section className={singlepost.article_container_qobi}>
                <div className={singlepost.main_container_qobi}>
                    <div className={singlepost.article_qobi}>
                        <div className={singlepost.article_content_qobi}>
                            <div className={singlepost.single_post_header_qobi}>
                                <h1>{blogStory[0] && blogStory[dataIndex].title}</h1>                    
                            </div>
                            <div className={singlepost.meta_info_qobi}>
                                <span><img src={timeimg} alt="" /><p>{}</p></span>
                                <span><img src={shareimg} alt="" /><p>{}COMMENT</p></span>
                                <span><img src={commentimg} alt="" /><p>{}SHARE</p></span>
                            </div>
                            <div className={singlepost.article_body_qobi}>
                                <p>{blogStory[0] && blogStory[dataIndex].description}</p>                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={singlepost.main_container_qobi}>
                    <div className={singlepost.share_container_qobi}>
                        
                    </div>
                </div>
            </section>

        </div>

    )
}
export default SinglePost;