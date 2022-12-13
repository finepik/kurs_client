import io from "socket.io-client"
import {useEffect, useState} from "react";

const socket = io.connect("http://127.0.0.1:9090", {
    reconnection: true
})

function Server2() {
    const [serverData, setServerData]=useState({os_version: 'unknown', homedir: 'unknown', time: '-'})

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

    return (
        <div className="header">
            <div className="server_header">
                This is a second server! Hello! <br/>
                I have some information.
                <div className="server_content">
                    <br/>
                    OS version: {serverData.os_version}
                    <br/>
                    Home directory: {serverData.homedir}
                    <br/>
                    Time: {new Date(serverData.time).toTimeString().split(' ')[0]
                }
                </div>
                <button className="footer_button"  onClick={sendHandler}>UPDATE</button>
            </div>
        </div>

    );
}

export default Server2;