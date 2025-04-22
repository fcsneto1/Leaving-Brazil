// app/whatsapp/page.tsx
import { redirect } from 'next/navigation';

export const runtime = 'edge';

export default function WhatsAppRedirect() {
  redirect('https://chat.whatsapp.com/JDCaX3PStFEGSbxtrPMrlN');
}