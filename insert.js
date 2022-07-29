const dbConnect = require('./mongodb');

const insertData=async ()=>{
   let data = await dbConnect();
  let result = await data.insert(
      [
          {name:'ramesh',location:'bangalore',college:'svit'},
        //   {name:'max 6',brand:'micromax',price:520,category:'mobile'},
        //   {name:'max 7',brand:'micromax',price:620,category:'mobile'},

      ]
  )
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

insertData();