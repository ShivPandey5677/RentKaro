import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
jwt.verify(token,"secretkey",(err,userInfo)=>{
    if(err) return res.status(403).json("Token is invalid");
  const {type}=req.query;
  const q = "SELECT u.name As name,t.gender AS gender,t.profile AS profilePic,u.email AS email,u.contactno AS number FROM tenant AS t JOIN user AS u ON u.id=t.userid WHERE t.type=?";
  console.log(type)
  db.query(q, [type], (err, data) => {
    if (err) return res.status(500).json(err);
    console.log(data);
      return res.status(200).json(data);
  });
})
};

export const addTenant=(req,res)=>{

    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
jwt.verify(token,"secretkey",(err,userInfo)=>{
    if(err) return res.status(403).json("Token is invalid");
    const tenant = req.body;
        console.log(tenant)
        console.log(userInfo.id)
       const q="INSERT INTO tenant(`age`,`type`,`gender`,`vmail`,`profile`,`vermail`,`userid`) VALUES (?)";
const values=[
    parseInt(tenant.age),
    tenant.type,
    tenant.gender,
    tenant.email,
    tenant.profilePicture,
    tenant.veriPic,
    userInfo.id,
];
        
db.query(q,[values],(err,data)=>{ 
    if (err) {
        return res.status(500).json(err);
    } else {
       
            // All insertions are completed, send the response
            return res.status(200).json("All products have been added");
        }
    })
})
}