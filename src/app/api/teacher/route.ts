import connectMongoDB from "../config/mongoConnect";
import Teacher from "../model/teacherModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const teachers: ITeacher[] = await Teacher.find();
  return NextResponse.json({ data: teachers });
}

export async function POST(req: Request) {
  try {
    const newTeacher: ITeacher = await req.json();
    await connectMongoDB();
    const missingFields = [];

    if (!newTeacher.nationalId) missingFields.push("nationalId");
    if (!newTeacher.title) missingFields.push("title");
    if (!newTeacher.firstname) missingFields.push("firstname");
    if (!newTeacher.surname) missingFields.push("surname");
    if (!newTeacher.dob) missingFields.push("dob");
    if (!newTeacher.teacher_number) missingFields.push("teacher_number");

    if (missingFields.length > 0) {
      let error_response = {
        status: 400,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    let json_response = {
      status: "success",
      message: "Teacher Created",
      data: { ...newTeacher },
    };

    await Teacher.create(newTeacher);
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
    });
  } catch (error) {
    console.log(error);

    let error_response = {
      status: "failed",
      message: "Error creating teacher",
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 409,
    });
  }
}
