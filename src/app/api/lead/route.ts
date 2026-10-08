import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("==========================================");
    console.log("[BRIDAL LEAD RECEIVED] Timestamp:", new Date().toISOString());
    console.log("Lead Details:", JSON.stringify(body, null, 2));
    console.log("==========================================");

    const { name, phone, service, date, location, message } = body;

    // Basic server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    const cleanPhone = (phone || "").replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Availability confirmed! Our senior bridal coordinator will contact you within 2 hours.",
        leadId: `KNK-BRIDE-${Date.now().toString().slice(-6)}`,
        data: {
          name,
          phone,
          service: service || "HD Bridal Makeup",
          date: date || "Upcoming Wedding",
          location: location || "Hazratganj Studio",
          message: message || "",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[BRIDAL LEAD API ERROR]:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again or WhatsApp us directly." },
      { status: 500 }
    );
  }
}
