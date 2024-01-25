import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Admin.scss'
import axios from 'axios'
import { Helmet } from 'react-helmet';
const Admin = () => {
    const [data, setdata] = useState([])
    const [search, setsearch] = useState('')
    const [sort, setsort] = useState(null)
    const fetchdata=async()=>{
        const res =await axios.get('http://localhost:4000/product')
        setdata(res.data)
    }
    const fetchpost=async(values)=>{
     await axios.post('http://localhost:4000/product',values)
     fetchdata()
    }
    const fetchdelete=async(id)=>{
        await axios.delete(`http://localhost:4000/product/${id}`)
        fetchdata()
       }
    useEffect(()=>{
fetchdata()
    },[])
    const formik = useFormik({
        initialValues: {
          image: '',
          name: '',
          price: '',
          title:''
        },
        validationSchema: Yup.object({
            image: Yup.string()
            .required('Required')
            .matches(`(https?:\/\/.*\.(?:png|jpg))`),
            name: Yup.string()
          
            .required('Required'),
            title: Yup.string()
            
            .required('Required'),
            price: Yup.number().required('price Required')
        }),
        onSubmit: (values,{resetForm}) => {
         fetchpost(values)
         resetForm()
        },
      });
  return (
    <>
    <Helmet>
      <title>Admin</title>
    </Helmet>
    <section className='admin'>
    <div className='container'>
    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="image">Image</label>
       <input
         id="image"
         type="text"
         {...formik.getFieldProps('image')}
       />
       {formik.touched.image && formik.errors.image ? (
         <h5>{formik.errors.image}</h5>
       ) : null}
 
       <label htmlFor="name">Name</label>
       <input id="name" type="text" {...formik.getFieldProps('name')} />
       {formik.touched.name && formik.errors.name ? (
         <h5>{formik.errors.name}</h5>
       ) : null}
  <label htmlFor="title">Title</label>
       <input
         id="title"
         type="text"
         {...formik.getFieldProps('title')}
       />
       {formik.touched.title && formik.errors.title ? (
         <h5>{formik.errors.title}</h5>
       ) : null}
       <label htmlFor="price">Price</label>
       <input id="price" type="price" {...formik.getFieldProps('price')} />
       {formik.touched.price && formik.errors.price ? (
         <h5>{formik.errors.price}</h5>
       ) : null}
 
       <button type="submit">Submit</button>
     </form>

<div className='filtersort'>
    <input type="text" onChange={e=>setsearch(e.target.value)} placeholder='search here'/>
    <button onClick={()=>setsort(null)}>default</button>
    <button onClick={()=>setsort('false')}>expensive to cheap</button>
    <button onClick={()=>setsort('true')}>cheap to expensive</button>

</div>
     <table>
        <thead>
            <tr>
                <td>Image</td>
                <td>Name</td>
                <td>Title</td>
                <td>Price</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            {
                data && data
                .sort((a,b)=>{
if (sort === 'true') {
   return a.price-b.price
}
else if (sort === 'false') {
    return b.price-a.price
 }
                })
                .filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))
                .map(item=>(
                    <tr key={item._id}>
                        <td><img src={item.image} alt="" /></td>
                        <td>{item.name}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td><button onClick={()=>fetchdelete(item._id)}>Delete</button></td>
                    </tr>
                ))
            }
        </tbody>
     </table>
    </div>
    </section>
    </>
  )
}

export default Admin