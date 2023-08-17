import React,{Fragment} from 'react'

// router-dom
import { Outlet } from 'react-router'


const DefaultLayout =() => {
  return (
    <Fragment>
      <Outlet></Outlet>
    </Fragment>
  )
}
export default DefaultLayout