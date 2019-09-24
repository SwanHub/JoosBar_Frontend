import React from 'react'

export default function AlcoholFilter() {
    return (
        <div>
            <form>
               <label> Search Alc!
                    <input id="alc-search" type="text" name="alc-search" />
               </label> 
               <input type="submit" value="Search that shit!"/>
            </form>
        </div>
    )
}
