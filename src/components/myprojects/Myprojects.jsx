import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/gimg4.png'
import IMG2 from '../../assets/gimg2.png'
import IMG3 from '../../assets/gimg3.png'
import IMG4 from '../../assets/gimg1.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>E-Commerce</h3>
            <small className='text-light'>HTML | CSS | ReactJs | Mongodb</small>
            <div className="portfolio__item-cta">
              <a href="" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Alumni Association</h3>
            <small className='text-light'>HTML | CSS | JS | NODEJS | EJS | POSTGRASQL</small>
            <div className="portfolio__item-cta">
              <a href="" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>HTML | CSS | ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="" target="_blank" rel='noreferrer' className='btn'>Github</a>
              {/* <a href="https://thakshila-bandara.github.io/my-portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>   */}
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Travaling Web Application</h3>
            <small className='text-light'>HTML | CSS | ReactJs | Mongodb</small>
            <div className="portfolio__item-cta">
              <a href="" target="_blank" rel='noreferrer' className='btn'>Github</a>
              {/* <a href="https://thakshila-bandara.github.io/my-resume/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>   */}
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects