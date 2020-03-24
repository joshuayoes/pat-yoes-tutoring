import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Strength from "../components/strength"
import style from '../styles/index.module.css'

import laptopSvg from '../../static/illustration-laptop.svg'
import aboutSvg from '../../static/illustration-about.svg'
import decadesOfExperienceIcon from '../../static/icon-decades-of-experience.svg'
import personalTouchIcon from '../../static/icon-personal-touch.svg'
import localKnowledgeIcon from '../../static/icon-local-knowledge.svg'
import educationalGuidanceIcon from '../../static/icon-educational-guidance.svg'


const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <section className={style.hero}> 
        <img className={style.heroSvg} src={laptopSvg} alt='Illustration of Pat video calling on laptop' />
        <h1 className={[style.h1, style.center].join(' ')}>Pat Yoes Tutoring</h1>
        <p className={[style.p, style.center].join(' ')}>Expert one-on-one remote tutoring in <br /> the convenience of your own home</p>
        <button className={style.button}>Book Now</button>
      </section>
      <section className={style.about}>
        <img className={style.aboutSvg} src={aboutSvg} alt='Illustration of Pat in front of a chalkboard' />
        <h1 className={[style.h1, style.about_h1].join(' ')}>About Pat</h1>
        <p className={style.p}>Pat Yoes has worked as a private tutor, public school teacher, and a tutoring business owner for over 30 years. He specializes in reading, math, writing, education counseling, and one-on-one tutoring.</p>
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
          description='Plan for long term success: Pat will help construct a solid foundation for your child to grow their skills on.' 
        />
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
