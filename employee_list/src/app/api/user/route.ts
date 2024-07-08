import { NextResponse } from "next/server";
import { db } from "@/app/lib/db"
import * as z from 'zod'

const userSchema = z.object({
    firstName: z.string().min(1, 'FirstName is required').max(100),
    lastName: z.string().min(1, 'FirstName is required').max(100),
    pointSystem: z.string().min(1, 'FirstName is required').max(100),
    remarks: z.string().min(1, 'FirstName is required').max(100),
    addedBy: z.string().min(1, 'FirstName is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email')
})
export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log(body, 'sdfsdfasdf')
        const { firstName, lastName, email, pointSystem, remarks, addedBy } = userSchema.parse(body)

        //check email
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });
        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: "User with the email already exists" }, { status: 409 })
        }

        const newUser = await db.user.create({
            data: {
                firstName,
                lastName,
                email,
                pointSystem,
                remarks,
                addedBy
            }
        })

        return NextResponse.json({ user: newUser, message: "User created Successfully" }, { status: 201 })
    } catch (error) {

    }

}