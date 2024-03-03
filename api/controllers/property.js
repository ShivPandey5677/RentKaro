import {db} from "../connect.js"
import jwt from "jsonwebtoken";
export const addProperty=(req,res)=>{

    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!");
jwt.verify(token,"secretkey",(err,userInfo)=>{
    if(err) return res.status(403).json("Token is invalid");
    const products = req.body;
    let insertionsCompleted = 0; 
    products.forEach((property) => {
        console.log(property)
        console.log(userInfo.id)
        let q=""
        let values=[]
        if(property.ptype=='1'){
        q="INSERT INTO flat(`name`,`location`,`ammen1`,`ammen2`,`imgURL`,`type`,`rent`,`rent2b`,`rent3b`,`ownerid`) VALUES (?)";
        values=[
        property.name,
        property.location,
        property.ammenity1,
        property.ammenity2,
        property.imgURL,
        property.ptype,
        parseInt(property.price1),
        parseInt(property.price2),
        parseInt(property.price3),
        userInfo.id,
    ];
        }
        else if(property.ptype=='2')
        {
            console.log(property)
            q="INSERT INTO pg(`name`,`location`,`ammenity1`,`ammentiy2`,`imgURL`,`type`,`rentsingle`,`rentdouble`,`renttriple`,`ownerid`) VALUES (?)";
            values=[
           property.name,
           property.location,
           property.ammenity1,
           property.ammenity2,
           property.imgURL,
           property.ptype,
           parseInt(property.price1),
           parseInt(property.price2),
           parseInt(property.price3),
           userInfo.id,
       ];
        }
        else{
            q="INSERT INTO fullhouse(`name`,`location`,`ammenity1`,`ammenity2`,`imgURL`,`type`,`price`,`ownerid`) VALUES (?)";
             values=[
           property.name,
           property.location,
           property.ammenity1,
           property.ammenity2,
           property.imgURL,
           property.ptype,
           parseInt(property.price1),
           userInfo.id,
       ];
        }
db.query(q,[values],(err,data)=>{ 
    if (err) {
        return res.status(500).json(err);
    } else {
        insertionsCompleted++;
        if (insertionsCompleted === products.length) {
            // All insertions are completed, send the response
            return res.status(200).json("All products have been added");
        }}
    })
})
})
}
export const getProperty = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is invalid");
    const { location, type } = req.query;
    console.log(location)
    console.log(type)
    let q="" // Access the query parameters sent with the GET request
    if(type==1){
        q=`SELECT 
        f.id AS id,
        f.name AS name,
        f.location AS location,
        f.rent AS rent1,
        f.rent2b AS rent2b,
        f.rent3b AS rent3b,
        f.ammen1 AS ammenity1,
        f.ammen2 AS ammenity2,
        f.imgURL AS imageURL,
        f.ownerid AS owner,
        f.type AS type
    FROM 
        flat AS f
    WHERE 
        f.location= ?`;
        }
        else if(type==2)
        {
            console.log(property)
            q=`SELECT 
            p.id AS id,
            p.name AS name,
            p.location AS location,
            p.rentsingle AS rent1,
            p.rentdouble AS rent2b,
            p.renttriple AS rent3b,
            p.ammenity1 AS ammenity1,
            p.ammentiy2 AS ammenity2,
            p.imgURL AS imageURL,
            p.ownerid AS owner,
            p.type AS type
        FROM 
            plat AS p
        WHERE 
            p.location= ?`;
        }
        else{
            q=`SELECT 
            f.id AS id,
            f.name AS name,
            f.price AS rent1,
            f.location AS location
            f.ammenity1 AS ammenity1,
            f.ammenity2 AS ammenity2,
            f.imgURL AS imageURL,
            f.ownerid AS owner,
            f.type AS type
        FROM 
            fullhouse AS f
        WHERE 
            f.location= ?`;
        } // Adjust your query to filter based on location and type
    db.query(q, [location], (err, data) => {
      if (err) return res.status(500).json(err);
      console.log(data);
      return res.status(200).json(data);
    });
  });
};
