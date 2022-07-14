import Link from "next/link";
import mysTyle from '../../components/layout.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Home(data) {

    let res= data?.data?.decors?.data[0]//.length>[0];
    let result= data?.data?.decors?.data//.length>[0];

    console.log(result)
    let srcc = res.images[0].image_path;
    const myLoader = ({  width, quality }) => {
        return `https://cerampakhsh.com/${srcc}?w=${width}&q=${quality || 75}`
    }
    return (

        <div>
            {res.map}
            id:{res.id}<br/>
            price:{res.price}<br/>
            code:{res.code}<br/>
            id:{res.id}<br/>

            <Image
                loader={myLoader}
                src="me.png"
                alt="Picture of the author"
                width={500}
                height={500}
            />
            {
                Object.keys(data.data).map(function (key,index){

                    return <div key={index}><a  className="btn btn-primary m-3"  href="#" role="button">{key}</a>  </div>
                })
            }
            <img src="/vercel.svg" alt="uid"/>
            <br/>
            <br/>
            <p className="test"> this is test for style</p>
            <p className={mysTyle.text}> this is test for style</p>
            <br/>
            {/*displayData = Object.keys(data).map(function (key,index){*/}
            {/* <div key={data.index}><a  className="btn btn-primary m-3"  href="#" role="button">{data}</a>  </div>*/}
        {/*})*/}
            <br/>
            <Link href='/'>first page</Link>
            <Link href='main'>main page</Link>
            <style jsx>
                {
                    `
                        .test{color:red;background:black;font-size: 32px;}
                    `
                }
            </style>
        </div>
    );
}
export async function getServerSideProps(context) {
    console.log(context.params)
    let params = context?.params;

    const res = await fetch(`https://api.cerampakhsh.com/api/v1/decors-v2/${params?.categoryMain}`)
    const data = await res.json()
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}