import connect from "@/../server";
import Profile from "@/../models/Profile";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connect();
        const profile = await Profile.findOne();
        return new NextResponse(JSON.stringify(profile), {
            status: 200,
        });
    } catch (error) {
        return new NextResponse("Error connecting to database: " + error, {
            status: 500,
        });
    }
};
