import React from 'react';
import './Home.css';
import photo0 from "../assets/slider/photo0.jpeg";
import photo1 from "../assets/slider/photo1.jpeg";
import photo2 from "../assets/slider/photo2.jpeg";
import photo3 from "../assets/slider/photo3.jpeg";
import photo4 from "../assets/slider/photo4.jpeg";
import photo5 from "../assets/slider/photo5.jpeg";
import photo6 from "../assets/slider/photo6.jpeg";
import photo7 from "../assets/slider/photo7.jpeg";
import photo8 from "../assets/slider/photo8.jpeg";
import photo9 from "../assets/slider/photo9.jpeg";



function Home() {
  return (
    <>
    <div className='homeContainer container p-4'></div>
    <div className="smallhomeContainer"></div>
    <div className="container">
        <div className='container flex flex-col items-center p-4 text-2xl xl:text-4xl'><h1>Want to Buy Property ?</h1></div>
    </div>
    <div className='slider'>
        <div className="slide-track">
            <div className="slide">
                <img src={photo0} alt="" />
            </div>
            <div className="slide">
                <img src={photo1} alt="" />
            </div>
            <div className="slide">
                <img src={photo2} alt="" />
            </div>
            <div className="slide">
                <img src={photo3} alt="" />
            </div>
            <div className="slide">
                <img src={photo4} alt="" />
            </div>
            <div className="slide">
                <img src={photo5} alt="" />
            </div>
            <div className="slide">
                <img src={photo6} alt="" />
            </div>
            <div className="slide">
                <img src={photo7} alt="" />
            </div>
            <div className="slide">
                <img src={photo8} alt="" />
            </div>
            <div className="slide">
                <img src={photo9} alt="" />
            </div>

        </div>
    </div>
    <div className="container flex flex-col items-center p-4 text-2xl xl:text-4xl">Popular Blogs</div>
    <div className="mainBlogContainer">
        <div className="container blogContainer">
            <span className='blogTime'>7 hours ago</span>
            <h1 className='blogTitle'>Malibu Colony Estates Home Hits The Market At $35 Million</h1>
            <p className='blogContent'>The pedigree of being old Malibu refers to the original community where old-time celebrities, such as Barbara Stanwick, Gary Cooper, Bing Crosby, Charlie Chaplin and Gloria Swanson, bought beach homes in the 1930s.</p>
            <span className='blogAuthor'>By <b>Mary Forgione</b></span>
        </div>
        <div className="container blogContainer">
            <span className='blogTime'>7 hours ago</span>
            <h1 className='blogTitle'>Malibu Colony Estates Home Hits The Market At $35 Million</h1>
            <p className='blogContent'>The pedigree of being old Malibu refers to the original community where old-time celebrities, such as Barbara Stanwick, Gary Cooper, Bing Crosby, Charlie Chaplin and Gloria Swanson, bought beach homes in the 1930s.</p>
            <span className='blogAuthor'>By <b>Mary Forgione</b></span>
        </div>
        <div className="container blogContainer">
            <span className='blogTime'>7 hours ago</span>
            <h1 className='blogTitle'>Malibu Colony Estates Home Hits The Market At $35 Million</h1>
            <p className='blogContent'>The pedigree of being old Malibu refers to the original community where old-time celebrities, such as Barbara Stanwick, Gary Cooper, Bing Crosby, Charlie Chaplin and Gloria Swanson, bought beach homes in the 1930s.</p>
            <span className='blogAuthor'>By <b>Mary Forgione</b></span>
        </div>
        <div className="container blogContainer">
            <span className='blogTime'>7 hours ago</span>
            <h1 className='blogTitle'>Malibu Colony Estates Home Hits The Market At $35 Million</h1>
            <p className='blogContent'>The pedigree of being old Malibu refers to the original community where old-time celebrities, such as Barbara Stanwick, Gary Cooper, Bing Crosby, Charlie Chaplin and Gloria Swanson, bought beach homes in the 1930s.</p>
            <span className='blogAuthor'>By <b>Mary Forgione</b></span>
        </div>
        <div className="container blogContainer">
            <span className='blogTime'>7 hours ago</span>
            <h1 className='blogTitle'>Malibu Colony Estates Home Hits The Market At $35 Million</h1>
            <p className='blogContent'>The pedigree of being old Malibu refers to the original community where old-time celebrities, such as Barbara Stanwick, Gary Cooper, Bing Crosby, Charlie Chaplin and Gloria Swanson, bought beach homes in the 1930s.</p>
            <span className='blogAuthor'>By <b>Mary Forgione</b></span>
        </div>
        <div className="container blogContainer">
            <span className='blogTime'>7 hours ago</span>
            <h1 className='blogTitle'>Malibu Colony Estates Home Hits The Market At $35 Million</h1>
            <p className='blogContent'>The pedigree of being old Malibu refers to the original community where old-time celebrities, such as Barbara Stanwick, Gary Cooper, Bing Crosby, Charlie Chaplin and Gloria Swanson, bought beach homes in the 1930s.</p>
            <span className='blogAuthor'>By <b>Mary Forgione</b></span>
        </div>
        <div className="container blogContainer">
            <span className='blogTime'>7 hours ago</span>
            <h1 className='blogTitle'>Malibu Colony Estates Home Hits The Market At $35 Million</h1>
            <p className='blogContent'>The pedigree of being old Malibu refers to the original community where old-time celebrities, such as Barbara Stanwick, Gary Cooper, Bing Crosby, Charlie Chaplin and Gloria Swanson, bought beach homes in the 1930s.</p>
            <span className='blogAuthor'>By <b>Mary Forgione</b></span>
        </div>
    </div>
    </>
  )
}

export default Home