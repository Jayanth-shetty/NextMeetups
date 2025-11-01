import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";


const Dummy_Meetups=[
    {
        id:'m1',
        title:'Afirst meet up',
        image:'https://karnatakatourism.org/wp-content/uploads/2020/06/Mysuru-Palace-banner-1920_1100.jpg',
        desc:'this is first meet up'
    },
    {
        id:'m2',
        title:'A second meet up',
        image:'https://www.holidify.com/images/cmsuploads/compressed/mallofmysore_20190511153027.jpg',
        desc:'this is second meet up'
    }
]

export default function HomePage(props){
    return(
       <MeetupList meetups={props.meetups} />
    )
}

export async function getServerSideProps(context){
    const req=context.req;
    const res=context.res;
    return {
        props:{
            meetups:Dummy_Meetups
        }
    }
}

// export async function getStaticProps(){
//     return {
//         props:{
//             meetups:Dummy_Meetups,
//         },
//         revalidate:10,
//     }
// }