import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import MainView from '../../components/MainView/mainView'
import readingNews from '../../assets/img/readingNews.svg'
import './Blog.scss'
import Footer from '../../components/Footer/Footer'


function Blog() {
    return (
        <div className ='blog'>
            <MainView>
                <img src={readingNews} alt="news Image" className='img-blog'/>
            </MainView>

            <h2 className='blog-title'>Brevemente</h2>

            <div className='blog-news-info'>
    
            </div>

            <Footer/>
            
        </div>
    )
}

export default Blog
