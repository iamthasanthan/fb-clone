import React from 'react'
import './Widgets.css'
function Widjets() {
    return (
        <div className="widjets">
            // eslint-disable-next-line jsx-a11y/iframe-has-title
            <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcodethamizhathasatech%2F&tabs=timeline&width=340&height=2500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="340" 
            height="100%" 
            style={{border:"none", overflow:"hidden"}} 
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true"
            allowfullscreen="true" 
            allow="encrypted-media"
            alt=""></iframe>

        </div>
    )
}

export default Widjets
