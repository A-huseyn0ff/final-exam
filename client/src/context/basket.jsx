import { createContext, useState } from "react";
import toast from 'react-hot-toast'
export const basketContext=createContext()

const BasketProvider=({children})=>{
    const [basket, setbasket] = useState(localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')):[])
    localStorage.setItem('basket',JSON.stringify(basket))
let SubTotal=0
basket.map(e=>SubTotal += e.count * e.price)
    function addtobasket(item) {
        const existedproduct=basket.find(x=>x._id === item._id)
        if (existedproduct) {
            existedproduct.count++
            existedproduct.total=existedproduct.count * existedproduct.price
            setbasket([...basket])
            return
        }
        const total=item.price
        setbasket([...basket,{...item,count:1,total}])
        toast.success(`${item.name} successfully added to basket!`)
    }
    function modifycount(item,increment) {
        const existedproduct=basket.find(x=>x._id === item._id)
        if (existedproduct) {
            if (increment) {
                existedproduct.count++
            existedproduct.total=existedproduct.count * existedproduct.price
            setbasket([...basket])
            return 
            }
            else if (existedproduct.count === 1) {
                deletefrombasket(item._id)
                toast.success(`${item.name} successfully deleted from basket!`)
            }
            else{
                existedproduct.count--
            existedproduct.total=existedproduct.count * existedproduct.price
            setbasket([...basket])
            return 
            }
            
        }
    }
    function deletefrombasket(id) {
        setbasket(basket.filter(item=>item._id !== id))
        return
    }
    const data={
        basket,
        setbasket,
        addtobasket,
        deletefrombasket,
        modifycount,
        SubTotal
    }
    return(
        <basketContext.Provider value={data}>
            {children}
        </basketContext.Provider>
    )
}
export default BasketProvider