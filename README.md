# NextMeetups
NextMeetup is a full-stack web application built using Next.js and MongoDB that allows users to browse, create, and view detailed meetups. It demonstrates static site generation (SSG) and server-side rendering (SSR) features of Next.js with seamless MongoDB Atlas database
# NextMeetups

NextMeetups is a full-stack meetup application built with **Next.js** and **MongoDB**, demonstrating Next.js features like static site generation (SSG) and dynamic routing. Users can browse meetups, view detailed meetup pages, and add new meetups.

---

## 🚀 Features

- **Browse Meetups** — See a list of all meetups.
- **Meetup Detail Page** — Dynamic route for each meetup showing full details.
- **Add New Meetup** — Form to create new meetups.
- **MongoDB Atlas** — Stores meetup data in the cloud.
- **Server-Side Data Fetching** — Uses Next.js `getStaticProps` and `getStaticPaths`.

---

## 🧰 Tech Stack

- **Frontend / Backend**: Next.js  
- **Database**: MongoDB (Atlas)  
- **Styling**: CSS Modules  
- **Environment Variables**: `.env.local` for secure credentials

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Jayanth-shetty/NextMeetups.git
cd NextMeetups
/pages
  /[meetupId].js         # Dynamic page for individual meetups  
  /new-meetup.js         # Form page to add a new meetup  
  index.js               # Homepage listing all meetups  
/components
  /meetups
    MeetupDetail.js       # Component to render meetup details  
  /ui
    Layout.js             # Layout component (if any)  
/lib
  /mongodb.js             # Helper to connect to MongoDB  
.env.local                # Environment variables (not committed)  

#💡 How It Works

In getStaticPaths, the app fetches all meetup IDs from MongoDB.

In getStaticProps, it fetches the data for a specific meetup using its ID.

The MeetupDetail component displays the title, image, address, and description.

New meetups can be added via a form; data is inserted into MongoDB through an API route.
