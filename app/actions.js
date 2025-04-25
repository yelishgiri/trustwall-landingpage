"use server"

import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { supabase } from "@/lib/supabase";

export async function storeLetterToCloud(formData) {
    try {
      const name = formData.get("name");
      const email = formData.get("email");
      const organization = formData.get("organization") || "N/A";
  
      if (!name || !email) {
        return { success: false, error: "Name and email are required" };
      }
  
      const pdfBytes = await generatePDF(name, email, organization);
      const fileName = `TrustWall_Letter_of_Intent_${name.replace(/\s+/g, "_")}.pdf`;
      const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
  
      const { data, error } = await supabase.storage
        .from("trustwall-letters")
        .upload(fileName, pdfBlob, {
          contentType: "application/pdf",
          upsert: true,
        });
  
      if (error) {
        console.error("Upload error:", error.message);
        return { success: false, error: "Failed to upload PDF to cloud." };
      }
  
      const publicUrl = supabase.storage
        .from("trustwall-letters")
        .getPublicUrl(fileName).data.publicUrl;
  
      return { success: true, url: publicUrl };
  
    } catch (error) {
      console.error("Unexpected error:", error);
      return { success: false, error: "Something went wrong." };
    }
  }
  

async function generatePDF(name, email, organization) {
    const pdfDoc = await PDFDocument.create();
    let page = pdfDoc.addPage([595.28, 841.89]); 
  
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  
    page.drawText("LETTER OF INTENT", {
      x: 50,
      y: 780,
      size: 24,
      font: helveticaBold,
      color: rgb(0, 0, 0),
    });
  
    page.drawText(currentDate, {
      x: 50,
      y: 750,
      size: 12,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
  
    page.drawText("TrustWall Chrome Extension", {
      x: 50,
      y: 710,
      size: 14,
      font: helveticaBold,
      color: rgb(0, 0, 0),
    });
  
    const contentText = `
  This Letter of Intent confirms that ${name} from ${organization} has expressed interest in becoming an early adopter of the TrustWall Chrome Extension.
  
  TrustWall is a privacy-focused browser extension designed to redact sensitive information when interacting with AI chatbots, starting with DeepSeek integration. This tool helps protect user privacy and prevent accidental sharing of personal information.
  
  As an early adopter, ${name} will receive:
  • Priority access to the TrustWall Chrome Extension
  • Regular updates on development progress
  • Opportunity to provide feedback on features and functionality
  • Exclusive early adopter benefits
  
  Contact Information:
  Name: ${name}
  Email: ${email}
  Organization: ${organization}
  
  This is not a binding contract but serves as documentation of interest in the TrustWall Chrome Extension.
  `;
  
    const contentLines = contentText.trim().split("\n");
    let y = 680;
    const maxWidth = 480;
    const lineHeight = 20;
  
    for (const line of contentLines) {
      if (y < 60) {
        page = pdfDoc.addPage([595.28, 841.89]);
        y = 780;
      }
  
      if (line.trim() === "") {
        y -= lineHeight;
        continue;
      }
  
      const font = line.startsWith("•") ? helveticaBold : helveticaFont;
      const words = line.split(" ");
      let currentLine = "";
  
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const testLine = currentLine + word + " ";
        const textWidth = font.widthOfTextAtSize(testLine, 12);
  
        if (textWidth > maxWidth) {
          page.drawText(currentLine, { x: 50, y, size: 12, font, color: rgb(0, 0, 0) });
          y -= lineHeight;
          currentLine = word + " ";
        } else {
          currentLine = testLine;
        }
      }
  
      if (currentLine) {
        page.drawText(currentLine.trim(), { x: 50, y, size: 12, font, color: rgb(0, 0, 0) });
        y -= lineHeight;
      }
    }
  
    page.drawText("TrustWall - Protecting Your Privacy in the Age of AI", {
      x: 50,
      y: 50,
      size: 10,
      font: helveticaFont,
      color: rgb(0.5, 0.5, 0.5),
    });
  
    return await pdfDoc.save();
  }
  