import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const allProduct=[
    {id:1, name:'Apple Ultra 2 Titanium Case Trail Loop 49mm Smart Watch', price:402000000 ,priceWithDiscount:39396000, description:"ساعت هوشمند اپل مدل Ultra 2 Titanium Case Trail Loop 49mm" , img: "https://dkstatics-public.digikala.com/digikala-products/1cd66e6fda5472ae2aa2c3153fad2872d328e2cd_1696071107.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", stock:10, incredibleOffers:true,dailySuggest: true, images:[
      {
      id:11,
      original: "https://dkstatics-public.digikala.com/digikala-products/3905be13315dab740ae431b19dc9b70e6104c99e_1696071106.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      thumbnail:"https://dkstatics-public.digikala.com/digikala-products/3905be13315dab740ae431b19dc9b70e6104c99e_1696071106.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
      },
      {
        id:12,
        original: "https://dkstatics-public.digikala.com/digikala-products/3b1e7bba98b2aaf0f4445c4d3d4b86b6d36865e7_1696071106.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        thumbnail:"https://dkstatics-public.digikala.com/digikala-products/3b1e7bba98b2aaf0f4445c4d3d4b86b6d36865e7_1696071106.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
      },
      {
        id:13,
        original: "https://dkstatics-public.digikala.com/digikala-products/7ab9b07de3230beae8f7d5f300a999337afc3ec0_1696071105.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        thumbnail:"https://dkstatics-public.digikala.com/digikala-products/7ab9b07de3230beae8f7d5f300a999337afc3ec0_1696071105.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
      }
    ]},
    {id:2, name:'Apple Series 9 Aluminum 45mm M/L Smart Watch', price:193000000 ,priceWithDiscount:0, description:"ساعت هوشمند اپل مدل Series 9 Aluminum 45mm M/L" , img: "https://dkstatics-public.digikala.com/digikala-products/4cceca7c016ad782aae57aa8fc8c63a7bc6e1fec_1696058704.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", stock:2, incredibleOffers:false,dailySuggest: true},
    {id:3, name:'Apple Watch SE 2023 44mm Aluminum Case', price:13120000 ,priceWithDiscount:0, description:"ساعت هوشمند اپل مدل SE 2023 Aluminum Case 44mm" , img: "https://dkstatics-public.digikala.com/digikala-products/cf2f3cffef40a01b8cdff5114faecb6499ed0c64_1696676539.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", stock:6, incredibleOffers:true,dailySuggest: false}

  ]
}

export default App
