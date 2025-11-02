import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
export default function NewMeetupPage() {
  const router = useRouter();

  async function onAddMeetupHandler(meetupData) {
    console.log(meetupData);
    const response = await fetch("/api/new-meetups", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a new metup</title>
        <meta
          name="description"
          content="Add your own meetups create amazing networking opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </>
  );
}
