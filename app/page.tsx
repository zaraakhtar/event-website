import ExploreBtn from "@/components/explorebtn"

const page = () => {
  return (
    <section className="mr-7 ml-5">
      <h1 className="text-center">The Hub for Every Dev <br />Event You Can&lsquo;t Miss</h1>
      <p className="text-center mt-5">Hechathon, Meetups and Confrences all in one</p>
      <ExploreBtn />
      <div className="mt-20 space-y-7 ">
        <h3 className="text-2xl font-semibold">Featured Events</h3>
        <ul className="events">
          {[1, 2, 3, 4, 5].map((event) => (
            <li key={event}> Event {event}</li>
          ))}

        </ul>
      </div>
    </section>
  )
}

export default page