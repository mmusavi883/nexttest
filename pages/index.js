import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import link from "next/link"
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Home() {
    const [showPosts, setShowPosts] = useState();
    // const apiUrl = 'https://jsonplaceholder.typicode.com/todos'
    const apiUrl = 'https://api.cerampakhsh.com/api/v1/decors-v2/%DA%A9%D8%A7%D8%B4%DB%8C-%D9%88-%D8%B3%D8%B1%D8%A7%D9%85%DB%8C%DA%A9-'
    //option 1
    let displayData
    // function pullJson(){
    //     fetch(apiUrl)
    //         .then(response=>response.json())
    //         .then(responseData=>{
    //             displayData = responseData.map(function (todo){
    //                 return <p key={todo.id}>{todo.title}</p>
    //             })
    //             console.log(responseData)
    //             setShowPosts(displayData)
    //         })
    // }

    //option 2
    async function pullJson() {
        const response = await fetch(apiUrl);
        const responseData = await response.json();
        console.log(responseData);
        displayData = Object.keys(responseData).map(function (key,index){
            return <div key={index}><a  className="btn btn-primary m-3"  href="#" role="button">{key}</a>  </div>
        })

        console.log(responseData)
        setShowPosts(displayData)
    }

    useEffect(() => {
        pullJson()
    }, [])
    return (
        <div className="container p-3">
            <Head>
                <title>hahahah</title>
            </Head>
            <button className="btn btn-primary m-3">KindaCode.com</button>
            <button className="btn btn-warning m-3">Hello</button>
            <Link href='products/categoryMain'>next page</Link>
            {showPosts}
        </div>
    );
}
