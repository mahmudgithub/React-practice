import React from 'react'

const Class = () => {
 

// class one{
    
//     constructor(a,b){
//         this.x=a
//         this.y=b

//         let sum=this.x+this.y;
//         this.z=sum
//         console.log(sum)
//     }
//     fun=(c,d)=>{
//         console.log(this.z);
//         this.p=c
//         this.q=d
//         let sub=this.p-this.q
//         this.r=sub

//     }
//     fun1=()=>{
//         console.log(this.r)
//     }
// }

// var sos=new one(5,9);
// sos.fun(10,5)
// sos.fun1()


// var obj={
//     name:'mahmud',
//     one:{
//         name:'hossain',
//         two:{
//             name:'lamyaa',
//             three:{
//                 name:'nowsin',
//                 fn:function(){
//                     console.log(this.name)
//                 }

//             }

//         }
//     }

// }
// obj.one.two.three.fn.call(obj);

class one{
    constructor(){
        console.log(`i am constructor class`)
    }

     cool=()=>{
        console.log(`i am first method inside class `)
    
    }

    mol=(a,b)=>{
        this.x=a
        this.y=b 
        console.log(`sum of a and b is =${this.x+this.y}`) 
    }


}
var sos=new one();
sos.cool()
sos.mol(2,2)
    return (
        <div>
            i am simple Class and constructor
        </div>
    )
}

export default Class
