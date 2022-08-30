import React from "react"
export default function HandleError({error}) {
 
return(
    <div>
        <h1>{error.status}</h1>
        <h2>{error.msg}</h2>
    </div>
)

   
}
