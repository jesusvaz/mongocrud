import TopicsList from "@/components/TopicsList";
import Image from "next/image";

export default function Home() {
  console.log('uri:',process.env.MONGODB_URI)
  return (
    <>
      <TopicsList/>

    </>
  
  );
}
