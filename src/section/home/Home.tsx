import { Link } from 'react-router-dom'
import './home.scss'
import {TbPlant} from 'react-icons/tb'
import { MdArrowRight, MdArrowLeft } from 'react-icons/md'

export const Home = () => {
  return (
    <section className="header">
      <div className="header__left"></div>
      <div className="header__right"></div>
      <div className="header__container">

        <div className="header__container__title">
          <p  className="header__container__title__flex">Plant</p>
          <p className="header__container__title__flex">of a</p>
          <p className="header__container__title__flex">Home</p>
          <Link to="/plants">
            <span className="header__container__link-dark"><MdArrowRight/></span>
              
              <span className="header__container__link-light"><TbPlant/></span>
              
              <span className="header__container__link-dark"><MdArrowLeft/></span>
          </Link>

        </div>
      </div>
    </section>
  )
}
