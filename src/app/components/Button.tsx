"use client";
import React from 'react'

export const Button = () => {

   React.useEffect(() => {
      console.log('in useEffect')
   })
   return (
      <div>
         <button onClick={() => console.log("clicked")}>
            click me!
         </button>
      </div>
   )
}
