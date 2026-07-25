import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const fallbackPath = "C:\\Users\\USER\\.gemini\\antigravity\\brain\\70d7e596-3612-4a34-be8b-16b82b2cf8bd\\.user_uploaded\\media__1784961363280.jpg";
  const publicPhotoPath = path.join(process.cwd(), "public", "profile.jpg");

  if (fs.existsSync(fallbackPath)) {
    try {
      fs.copyFileSync(fallbackPath, publicPhotoPath);
      const buffer = fs.readFileSync(fallbackPath);
      return new NextResponse(buffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      });
    } catch (err) {
      console.error("Error serving uploaded image:", err);
    }
  }

  if (fs.existsSync(publicPhotoPath)) {
    const buffer = fs.readFileSync(publicPhotoPath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
      },
    });
  }

  return new NextResponse("Image Not Found", { status: 404 });
}
