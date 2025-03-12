import Jobs from "@/app/find-jobs/FindJobs/Jobs";
import SearchBar from "@/app/find-jobs/FindJobs/SearchBar"
import "@/app/globals.css";
import { Divider } from "@mantine/core";

const FindJobs = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]' >
      <Divider mx="md" size="xs" />
      <SearchBar />
      <Divider mx="md" size="xs" />
      <Jobs />
    </div>
  )
}

export default FindJobs