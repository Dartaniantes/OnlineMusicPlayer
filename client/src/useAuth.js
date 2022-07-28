import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()


    useEffect(() =>{
        axios.post('http://localhost:3003/login', {
            code,
        }).then(res =>{
            console.log("SETTING TOKENS")
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, "/")
            console.log("TOKENS WERE SET")
            console.log("DATA = " + res.data)
        }).catch(()=>{
            
        })
        
    }, [code])
}
