import React from 'react'
import './DisplayTabs.css'

const DisplayTabs = (props) => {
  const arr = props.arr
  const selectTab = (idx) => {
    var tabselement=document.getElementsByClassName("tab")
    var tabs=Array.from(tabselement)
    tabs.map((e)=>e.classList.remove('active'))
    document.getElementById('t'+idx).classList.add("active")
    

    var contentelement=document.getElementsByClassName("content")
    var content=Array.from(contentelement)
    content.map((e)=>e.classList.remove("active"))
    document.getElementById('c'+idx).classList.add('active')
  }
  return (

    <div className="tabs" >
            <div className="title">Hello, Thise are React tabs</div>
            <div className='tab-header' >
              {arr.map((ele,idx)=> <div id={"t"+idx} className='tab' onClick={()=>{selectTab(idx)} }> {ele.header} </div> )}
                  </div>
                  <div className='tab-body' id='bs{idx}' > 
                  {arr.map((ele,idx)=> <div className='content' id={"c"+idx} > {ele.content} </div> )}

                  </div>
                
                
            </div>
          
    )
    
}

export default DisplayTabs