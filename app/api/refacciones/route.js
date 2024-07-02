import  connectMongoDB from "../../libs/mongodb";
// aqui se specifica el modelo qu utilizzaremos
// de mongo
import Refacciones from "../../models/refacciones";

import { NextResponse } from "next/server";

export async function POST(request) {
  console.log('POST')
  const { car,model,year, description } = await request.json();
  await connectMongoDB();
  // crear entry en mongo
  await Refacciones.create({ car,model,year, description });
  return NextResponse.json({ messge: "Refaccion Created" }, { status: 201 });
}

export async function GET() {
  console.log('GET api/refacciones function');
  await connectMongoDB();
  // refacciones variablle que se retorna y sera itilizada en front end
  // en este caso RefaccionesList.jsx
  const refacciones = await Refacciones.find();
  return NextResponse.json({ refacciones });
}

export async function DELETE(request) {
  //obtener id en los persmetros
  console.log("inside de borrar refaccion:",id);
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  console.log("la id a borrar:",id);
  await Refacciones.findByIdAndDelete(id);
  return NextResponse.json({ message: "Refaccion deleted" }, { status: 200 });
}


// DELETE /api/refactions?id=66637df84fad5ab4b842820d 404 in 571ms

