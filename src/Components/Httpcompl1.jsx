import React, { useEffect,useState } from 'react'
import Axios from 'axios'
const Httpcompl1 = () => {
    const [todo, setTodo] = useState(null)
    useEffect(()=>{
        const lol=async()=>{
            await Axios({
                method:'get',
                url:'http://127.0.0.1:8000/'
            }).then(response=>{
                setTodo(response.data)
            })

        }
        lol()
    },[])
    return (
<div>
            {
                todo !==null ? (
                    <div>
                        {
                            todo.map(d=>(
                                <div> 
                                    <h1>{d.text}</h1>
                                    <h1>{d.id}</h1>
                                    <h1>{d.date}</h1>
                                </div>
                            ))
                        }
                    </div>

                )

                : 
                
                <div>
                    (<h1>no data</h1>)
                </div>
                
            }

        </div>
    )
}

export default Httpcompl1
