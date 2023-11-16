// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
export default async function handler(req, res) {
  let data = await fs.promises.readdir(`blogdata/`,'utf-8')
  let myfile;
  let allBlogs=[]
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    //console.log(item)
    myfile=await fs.promises.readFile(`blogdata/${item}`,'utf-8')
    allBlogs.push(JSON.parse(myfile))
    //console.log(JSON.parse(myfile))

  }
  res.status(200).json(allBlogs)
  
  
  
  
  
  
  
  
  
  
  
  //fs.readdir(`blogdata/`,'utf-8',(err,data)=>{
  //  if(err){
  //    res.status(500).json({'error':'No Blogs Found.'})
  //  }
  //  let allBlogs=[]
  //  data.forEach((item)=>{
  //    console.log(item)
  //    fs.readFile(`blogdata/${item}`,'utf-8',(err,d)=>{
  //    allBlogs.push(item)
  //    })
  //  })
  //  //console.log(req.query.slug)
  //  res.status(200).json(data)
  //});
  
}
