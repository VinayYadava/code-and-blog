// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
export default async function handler(req, res) {

  let myfile=await fs.promises.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
    if(err){
      res.status(500).json({'error':'No Such Blog Found.'})
    }
    
    //console.log(req.query.slug)
    
  });
  res.status(200).json(JSON.parse(myfile))
}