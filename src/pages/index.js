import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Strength from "../components/strength"
import Booking from '../components/booking'
import ContactItem from '../components/contactItem'

import style from '../styles/index.module.css'

import laptopSvg from '../../static/illustration-laptop.svg'
import aboutSvg from '../../static/illustration-about.svg'
import bookingSvg from '../../static/illustration-booking.svg'
import contactSvg from '../../static/illustration-contact.svg'
import decadesOfExperienceIcon from '../../static/icon-decades-of-experience.svg'
import personalTouchIcon from '../../static/icon-personal-touch.svg'
import localKnowledgeIcon from '../../static/icon-local-knowledge.svg'
import educationalGuidanceIcon from '../../static/icon-educational-guidance.svg'
import emailIcon from '../../static/icon-email.svg'
import phoneIcon from '../../static/icon-phone.svg'


const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <section className={style.hero}> 
        <img className={style.heroSvg} src={laptopSvg} alt='Illustration of Pat video calling on laptop' />
        <div>
          <h1 className={[style.h1, style.center].join(' ')}>Pat Yoes Tutoring</h1>
          <p className={[style.p, style.center].join(' ')}>Expert one-on-one remote tutoring in <br /> the convenience of your own home</p>
          <button 
            className={style.button}
            onClick={() => document.getElementById('booking').scrollIntoView({ behavior: "smooth"})}
            >Book Now</button>
        </div>
      </section>
      <section className={style.about}>
        <img className={style.aboutSvg} src={aboutSvg} alt='Illustration of Pat in front of a chalkboard' />
        <div>
          <h1 className={[style.h1, style.about_h1, style.center].join(' ')}>About Pat</h1>
          <p className={[style.p, style.center].join(' ')}>Pat Yoes has worked as a private tutor, public school teacher, and a tutoring business owner for over 30 years. He specializes in reading, math, writing, education counseling, and one-on-one tutoring.</p>
        </div>
      </section>
      <section className={style.strengths}>
        <Strength 
          svg={decadesOfExperienceIcon}
          alt='Award icon'
          heading='Decades of Experience'
          description='Pat has experience in multiple educational roles in his career, giving him a deep breadth of experience to draw from.'
        />
        <Strength
          svg={personalTouchIcon}
          alt='Handshake icon'
          heading='Personal Touch'
          description='Pat specializes in one-on-one tutoring. Studies have shown that students preform better in school with individual support.'
        />
        <Strength 
          svg={localKnowledgeIcon}
          alt='School icon'
          heading='Local Knowledge'
          description='As a substitute teacher in both the Evergreen and Vancouver school district, Pat has unique insight into the local school system.'
        />
        <Strength
          svg={educationalGuidanceIcon}
          alt='Sign icon'
          heading='Educational Guidance'
          description='Plan for long term educational success: Pat will help construct a solid foundation for your child to grow their skills on.' 
        />
      </section>
      <section id="booking" className={style.booking}>
        <img src={bookingSvg} alt='Illustration of a woman in front of a calendar' />
        <Booking />
      </section>
      <section className={style.contact}>
        <img src={contactSvg} alt="Illustration of man in front of email letter and chat bubbles" className={style.contactSvg} />
        <div>
          <h1 className={[style.h1, style.contact_h1].join(' ')}>Contact</h1>
          <ContactItem
            icon={emailIcon}
            alt='Email icon'
            contact='patyoes@yahoo.com'
            link='mailto:patyoes@yahoo.com'
          />
          <ContactItem
            icon={phoneIcon}
            alt='Phone icon'
            contact='(360) 521-8486'
            link='tel:13605218486'
          />
        </div>
      </section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
