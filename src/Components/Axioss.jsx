// import React, { useEffect } from 'react'
// import Axios from 'axios'

// const Axioss = () => {
//     // useEffect(()=>{
// const lol=async()=>{
//     await Axios({
//         method:'get',
//         url:'https://jsonplaceholder.typicode.com/posts'

//     }).then(response=>{
//         console.log(response.data);
//     })
// }
// lol()
//     // },[])
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Axioss


// import axios from 'axios'
// import React, { Component } from 'react'

// export class Axioss extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             posts:[]
             
//         }
//     }
//     componentDidMount(){
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then((response)=>{
//             this.setState({
//                 posts:response.date
//             })
//             console.log(response)

//         })
//         .catch(err=>{
//             console.log(err)

//         })
//     }
    
//     render() {
//         const {posts}=this.state
//         return (
//             <div>
//                 <h1>hello</h1>
//                 {posts ? posts.map((post)=>{
//                     return <h1 key={post.id}>{post.title}</h1>
//                  }): 'post not fount' } 
//             </div>
//         )
//     }
// }

// export default Axioss
