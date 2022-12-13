import io from "socket.io-client"
import {useEffect, useState} from "react";

const socket = io.connect("http://127.0.0.1:3030", {
    reconnection: true
})

function Server1() {
    const [serverData, setServerData]=useState({proc_pid: 'unknown', proc_prior: 'unknown', time: '-'})

    const sendHandler = async () => {
       await socket.emit("get_info", "",(data)=>{
            setServerData(data)
        })
    }

    useEffect(()=>{
        socket.emit("get_info", "",(data)=>{
            setServerData(data)
        })
    },[])

    return ( <div className="header">
               <div className="server_header">
                   This is a first server! Hello! <br/>
                    I have some information.
                    <div className="server_content">
                        <br/>
                        Process priority: {serverData.proc_prior}
                        <br/>
                        My id: {serverData.proc_pid}
                        <br/>
                        Time: {new Date(serverData.time).toTimeString().split(' ')[0]
                    }
                    </div>
                   <button className="footer_button"  onClick={sendHandler}>UPDATE</button>
               </div>
            </div>

    );
}

export default Server1;