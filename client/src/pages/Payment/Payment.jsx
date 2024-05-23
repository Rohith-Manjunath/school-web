import { Button } from '@mui/material'

const Payment = () => {

      const checkout=async()=>{

            const keyData=await fetch(`https://school-web-50fi.onrender.com/api/getKey`,{
                  method:"GET",
                  headers:{
                        "Content-Type":"application/json"
                  },
            })


            let data=await fetch(`https://school-web-50fi.onrender.com/api/payment`,{
                  method:"POST",
                  headers:{
                        "Content-Type":"application/json",    
                  },  
                  body:JSON.stringify({amount:5000})

            })



            data=await data.json()

            const {order}=data;

const options = {
    "key": keyData?.key, // Enter the Key ID generated from the Dashboard
    "amount": order?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Rohith",
    "description": "Test Transaction",
    "image": "https://avatars.githubusercontent.com/u/130335161?v=4",
    "order_id": order?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://school-web-50fi.onrender.com/api/payment/paymentVerification",
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};


var razor = new window.Razorpay(options);
razor.open();


      }

  return (
    <div className='mt-20'>
      <Button onClick={checkout} variant="contained">Checkout</Button>
    </div>
  )
}

export default Payment