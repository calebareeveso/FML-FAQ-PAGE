import React from 'react';
import image1 from './img/Rectangle 16.png'
import image2 from './img/Rectangle 16-1.png'
import image3 from './img/Rectangle 16-2.png'
import image4 from './img/Rectangle 16-3.png'
import image5 from './img/Rectangle 16-4.png'
import image6 from './img/Rectangle 16-5.png'
import image7 from './img/Rectangle 16-6.png'
import image8 from './img/Rectangle 16-7.png'
import image9 from './img/Rectangle 16-8.png'

function all (){
    return (
        <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dolor augue, at facilisis sem aliquet volutpat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dolor augue, at facilisis sem aliquet volutpat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dolor augue, at facilisis sem aliquet volutpat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dolor augue, at facilisis sem aliquet volutpat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dolor augue, at facilisis sem aliquet volutpat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dolor augue, at facilisis sem aliquet volutpat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dolor augue, at facilisis sem aliquet volutpat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dolor augue, at facilisis sem aliquet volutpat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dolor augue, at facilisis sem aliquet volutpat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dolor augue, at facilisis sem aliquet volutpat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis dolor augue, at facilisis sem aliquet volutpat.
        </>
    )
}


const data = [

        {img_src: image1,img_alt:"blog story",
         title:"How to Find Lenders For Your Campaign",
         description:all(),
         time:new Date().toString(),
         comment:"",
         share: ""
        },
        
        {img_src: image2,img_alt:"blog story",title:"Top Fund My Laptop Campaigns By City",
         description:all(),
         time:new Date().toString(),
         comment:"",
         share: ""},
        
        {img_src: image3,img_alt:"blog story",title:"How to Structure Your Campaign for Success",
         description:all(),
         time:new Date().toString(),
         comment:"",
         share: ""},
        
        {img_src: image4,img_alt:"blog story",title:"Top 10 Jobs You Can Get Working From Anywhere",
         description:all(),
         time:new Date().toString(),
         comment:"",
         share: ""},

        {img_src: image5,img_alt:"blog story",title:"How to Find Lenders For Your Campaign",
         description:all(),
         time:new Date().toString(),
         comment:"",
         share: ""},
        
        {img_src: image6,img_alt:"blog story",title:"Recommeded Laptops For Designers",
         description:all(),
         time:new Date().toString(),
         comment:"",
         share: ""},

        {img_src: image7,img_alt:"blog story",title:"How to Find Lenders For Your Campaign",
         description:all(),
         time:new Date().toString(),
         comment:"",
         share: ""},

        {img_src: image8,img_alt:"blog story",title:"Getting The Best Value For Your Laptop Purchase",
         description:all(),
         time:new Date().toString(),
         comment:"",
         share: ""},

        {img_src: image9,img_alt:"blog story",title:"What You Need To Do Before Buying a Laptop",
         description:all(),
         time:new Date().toString(),
         comment:"",
         share: ""},
]

function dummy(setObject){
    setObject(data)
}

const dummydata = {
    dummy
}

export default dummydata;