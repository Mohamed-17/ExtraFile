import React from 'react'
import { Link } from 'react-router-dom'
export const MegaSale = () => {
  return (
    <div className="container">
    <div className="row m-2 center">
    <div className="col-6">
    <Link to={"/samsung/c/SAMSNG/facet/?q=:relevance:productStatusEn:Mega Sale:inStock:true&text=&pageSize=24&pg=0&sort=relevance"}>
    <img src="https://media.extra.com/i/aurora/MS24_Bissel_cashback_1x2_E_1" alt="" className='w-100' />
    </Link>
    </div>
    <div className="col-6">
    <Link to={"/dyson/c/DYSON/facet/?q=:relevance:productStatusEn:Mega Sale:inStock:true&text=&pageSize=24&pg=0&sort=relevance"}>
    <img src="https://media.extra.com/i/aurora/MS24_Huawei_1x2HomePage%20Banner" alt="" className='w-100' />
        </Link>
    </div>
    </div>
    </div>
  )
}
