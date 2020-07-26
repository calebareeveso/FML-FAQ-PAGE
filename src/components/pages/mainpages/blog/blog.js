import React from 'react'
import blog from './blog.module.css'
import {Link} from 'react-router-dom'
import {Footer,Navbar} from '../../navigation'
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'
import BlogComponent from './blog_component'
import dummydata from './dummydata'
import showmoreimg from './img/Vector 1.png'
import {SinglePost} from '../mainpages'

const Blog = () => {
    const [blogStory,setBlogStory] = React.useState([]);
    const [switchPage,setSwitchPage] = React.useState(false);
    const [singlePageIndex,setSingPageIndex] = React.useState(0);
    React.useEffect(()=>{function doIt(){!blogStory[0] && dummydata.dummy(setBlogStory);}doIt();})
    function handleSinglePost(index){setSingPageIndex(index);setSwitchPage(!switchPage);}
    return(
        <ScrollIntoView>
            <Navbar/>
                { !switchPage ? 
                <div className={blog.blog_qobi}>                    
                    <section className={blog.header_title_qobi}><div className={blog.main_container_qobi}><h1>The Blog</h1></div></section>
                    <section>
                        <div className={blog.main_container_qobi}>
                            <div className={blog.stories_qobi}>
                                {blogStory.map((data,index)=>{return(
                                    <BlogComponent key={index} img_src={data.img_src} img_alt={data.img_alt} title={data.title} description={data.description} postlink={()=>{handleSinglePost(index)}}/>
                                )})}
                            </div>
                            <div className={blog.load_more_qobi}>
                                <Link className={blog.link_qobi}><p>Load More</p><img src={showmoreimg} alt=""/></Link>
                            </div>
                        </div>
                    </section>
                    <section className={blog.subscribe_section_qobi}>
                        <div className={blog.main_container_qobi}>
                            <div className={blog.subcribe_content_qobi}>
                                <div className={blog.subscribe_content_left_qobi}>
                                    <h1>Subscribe to our newsletter</h1><p>Get the latest news from FundMyLaptop</p>
                                </div>
                                <div className={blog.subscribe_content_right_qobi}>
                                    <form><input placeholder="Enter your email address"/><button>Subscribe</button></form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                : <SinglePost dataIndex={singlePageIndex}/>
                }
            <Footer/>
        </ScrollIntoView>
    )
}
export default Blog;