import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/Blogspot.module.css'
import Link from 'next/link'
const slugg = () => {
  const [data, setdata] = useState([])
  const router=useRouter();
  const {slug}= router.query
 
  useEffect(()=>{
    //console.log(`/api/getblog?slug=${slug}`)
    if (slug) {
    fetch(`/api/getblog?slug=${slug}`).then((a)=>{
      return a.json()})
      .then((parsed)=>{
        
        setdata(parsed)
      })
      .catch((error)=>{console.log({'Error fetching blog':error})})
    }
  },[slug]);
  
  return (
    <div className={styles.homeBlogContainer}>
      <div className={styles.blogSummary}>
        <h3 className={styles.title}>{data.title}</h3>
          <p className={styles.blogp}>
            {data.content}
            {console.log(typeof data.content)}
          </p>
      </div>
    </div>
  )
}

export default slugg