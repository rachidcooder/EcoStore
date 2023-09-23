import category from "../models/category.js";
import slugify from "slugify"


function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      parentId: cate.parentId,
      type: cate.type,
      children: createCategories(categories, cate._id),
    });
  }

  return categoryList;
}
// POST  : Create CATEGORY
export const CreateCategory= async(req,res)=>{
    
  const categoryObj={
    name : req.body.name,
    slug : slugify(req.body.name) 
  };
  if(req.body.parentId){
    categoryObj.parentId=req.body.parentId 
  }

  try{
    const categ=new category(categoryObj);
  
    await categ.save()
res.status(200).json({categ})
  }catch(err){console.log(err);}

}

// GET categories
  export const getCategories =async(req,res)=>{
     
    try{
      const categories=await category.find();
       
       if(categories){
        const calegoryList=createCategories(categories)
        res.status(200).json({calegoryList});
    }

    }catch(err){console.log(err);}
  }

  //DELETE category

  //UPDATE category


