import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import style from '../styles/index.module.css'

import laptopImg from '../../static/laptop.svg'
import aboutSvg from '../../static/about.svg';

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <section className={style.hero}> 
        <img className={style.heroSvg} src={laptopImg} alt='Illustration of Pat video calling on laptop' />
        <h1 className={[style.h1, style.center].join(' ')}>Pat Yoes Tutoring</h1>
        <p className={[style.p, style.center].join(' ')}>Expert one-on-one remote tutoring in <br /> the convenience of your own home</p>
        <button className={style.button}>Book Now</button>
      </section>
      <section className={style.about}>
        <img className={style.aboutSvg} src={aboutSvg} alt='Illustration of Pat in front of a chalkboard' />
        <h1 className={[style.h1, style.about_h1].join(' ')}>About Pat</h1>
        <p className={style.p}>Pat Yoes has worked as a private tutor, public school teacher, and a tutoring business owner for over 30 years. He specializes in reading, math, writing, education counseling, and one-on-one tutoring.</p>
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
