import React from 'react'
import {BiImageAdd} from 'react-icons/bi'
import { useState } from 'react'

const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
}
const getDatafromLS=()=>{
    const data=localStorage.getItem("blogData");
    if(data){
        
      return JSON.parse(data);// convert into OBJECT 
    }
    else{
      return []
    }
  }

function CreatePost() {
   


   const [blogData,setBlogData]=useState([])

    const [postImage,setPostImage]=useState('');
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
   const imageHandler=(e)=>{
    //     console.log(e.target.files[0])
    //     const reader=new FileReader();
    //    localStorage.setItem('post_image',reader.result);
    //     reader.readAsDataURL(File[0])
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
          localStorage["fileBase64"] = base64;
          console.debug("file stored",base64);
          const recentImageUrl=localStorage.getItem('fileBase64');
          if(recentImageUrl){
            setPostImage(recentImageUrl);
            const blog={
                title,
                desc,
                blogImage:{recentImageUrl}
            }
            localStorage.setItem('blogData',JSON.stringify(blog))
           
          // console.log(recentImageUrl)
          }
        });
    }


      const submitHandler=(e)=>{
        e.preventDefault();
        setTitle('');
        setDesc('');
        setPostImage('');
        const data=getDatafromLS()
        //console.log(data.blogImage.recentImageUrl)   --->>>>this is for get image binary
        //  setBlogData(...blogData,data)
        //  console.log(blogData)

      }
    
  return (
    <div className='grid justify-center w-[100%]  '>
        <h1 className='mb-[20px] text-[24px] italic text-yellow-700 px-[20px]'>createPost</h1>
        <form   onSubmit={submitHandler}
        className='flex  flex-col gap-4'>
            <h1 className=''>Title</h1>
            <input required type="text" name="title" id="title"
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)}
                placeholder='Enter Post Title'
                className='border-[1px] border-[rgba(0,0,0,0.7)] rounded-[10px] px-2 py-2'
                />
            <h1>Descripation</h1>
            <textarea required name="desc" id="desc" cols="30" rows="10"
             value={desc}
             onChange={(e)=>setDesc(e.target.value)}
                placeholder='Enter about your post '
                className='border-[1px] border-[rgba(0,0,0,0.7)] rounded-[10px] px-2 py-2'
             ></textarea>  
             <br />
            <input   type="file" name="img" id="img" onChange={imageHandler}
             className=' file:rounded-r-[20px] file:rounded-l-[20px] file:bg-green-400 file:text-white   file:border-white file:cursor-pointer'  />
         {/* {<span  className='w-[300px] px-4 py-4 bg-yellow-300 cursor-pointer  mb-5 '>  <BiImageAdd className=' inline text-[24px] cursor-pointer'  aria-hidden="true" id='img'>
           </BiImageAdd>Add Image</span>} */}
        <img src={postImage} className='rounded-[10px] w-[300px] h-[200px] mt-[40px] ' alt="select image" />
       <button type='submit' className='w-[100%] rounded-[20px] bg-blue-700 text-white py-[6px] mb-[40px]'> Post Blog</button>
        </form>
        <div>
            {/* <h1>Tittle:{data.title}</h1>
            <h1>Descripation:{data.desc}</h1> */}
        </div>
    </div>
  )
}

export default CreatePost