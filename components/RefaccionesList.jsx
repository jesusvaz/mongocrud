//"use client"
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

//funcion praa obtener las refacciones
const getRefactions = async () => {
  try {
    //http://localhost:3000/api/refacciones
    //http://localhost:3000/api/topics
    //aqui golpeamos endpoint que regresa refacciones en formato
    //json para hacer loop
      const res = await fetch("http://localhost:3000/api/refacciones", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

// no impo
export default async function RefactionsList() {
 // {refacciones} viene de GET() en route .js
  const { refacciones } = await getRefactions();
  console.log('refacciones encontradas:',refacciones)

  return (
    <>


      {refacciones.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

 






  


     
