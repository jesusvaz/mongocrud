import EditRefaccionesForm from "@/components/EditRefaccionForm";


const getRefacionesById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/refacciones/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const {refaccion } = await getRefacionesById(id);
  const { car,model,year, description } = refaccion;

  return <EditRefaccionesForm id={id} car={car} model={model} year={year} description={description} />;
}
