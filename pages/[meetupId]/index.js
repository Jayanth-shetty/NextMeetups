import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  return (
    <>
      <MeetupDetail {...props.meetupData}/>
    </>
  );
}

export async function getStaticPaths(){
  return {
    fallback:false,
    paths:[
      {
        params:{
          meetupId:'m1'
        }
      },
      {
        params:{
          meetupId:'m2',
        }
      }
    ]
  }
}

export async function getStaticProps(context){
  const meetupId=context.params.meetupId;
  return {
    props:{
      meetupData:{ 
        id: meetupId,
        image:
          "https://karnatakatourism.org/wp-content/uploads/2020/06/Mysuru-Palace-banner-1920_1100.jpg",
        title: "A First Meetup",
        address: "sterret 55 cross 1",
        desc: "the meetup desc",
      }
    }
  }
}