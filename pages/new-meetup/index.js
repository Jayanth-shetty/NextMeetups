import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage(){
    function onAddMeetupHandler(meetupData){
        console.log(meetupData)
    }
    return(
        <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    )
}