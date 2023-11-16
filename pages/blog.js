import React, { useEffect, useState } from 'react'
import styles from "../styles/Blog.module.css"
import Link from 'next/link'
const Blog = () => {
  const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, error explicabo. Tenetur exercitationem hic consequuntur, dolorum eaque corrupti aspernatur, at dolores aperiam repellendus sint quisquam harum officiis beatae rem quaerat."
  const [blogs,setBlogs] = useState([])
  useEffect(()=>{
    fetch("/api/blogs").then((a)=>{
      return a.json()})
      .then((parsed)=>{
        //console.log(parsed)
        setBlogs(parsed)
      })
    },[])
  
  
  return (
    <div>
      <div className={styles.homeBlogContainer}>
          {blogs.map((blogItem)=>{
            return(<div className={styles.blogSummary}>
              <h3 className={styles.title}>{blogItem.title}</h3>
              <p className={styles.blogp}>
                {blogItem.content.substr(0,140)}....
                <Link className={styles.readMoreLink} href={`/blogspot/${blogItem.slug}`}>Read more</Link>
              </p>
            </div>)
          })}
          
      </div>
    </div>
  )
}

export default Blog