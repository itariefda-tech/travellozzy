export type BookingInquiry = {
  service: string;
  date: string;
  vehicle: string;
  pickup: string;
  destination: string;
  passengers: string;
  name: string;
  phone: string;
};

export const DEFAULT_WHATSAPP_NUMBER = '6281298605977';

export function getWhatsAppNumber(): string {
  const configuredNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '');
  return configuredNumber || DEFAULT_WHATSAPP_NUMBER;
}

export function formatWhatsAppNumber(phone = getWhatsAppNumber()): string {
  if (phone.startsWith('62') && phone.length >= 11) {
    return `+62 ${phone.slice(2, 5)}-${phone.slice(5, 9)}-${phone.slice(9)}`;
  }
  return phone;
}

export function buildBookingMessage(inquiry: BookingInquiry) {
  return [
    'Halo TRAVELOZY,',
    '',
    'Saya ingin membuat inquiry perjalanan:',
    '',
    `Service: ${inquiry.service}`,
    `Tanggal: ${inquiry.date}`,
    `Pickup: ${inquiry.pickup}`,
    `Tujuan: ${inquiry.destination}`,
    `Pilihan kendaraan: ${inquiry.vehicle}`,
    `Penumpang: ${inquiry.passengers}`,
    '',
    `Nama: ${inquiry.name}`,
    `Nomor WhatsApp: ${inquiry.phone}`,
    '',
    'Mohon informasi pilihan dan ketersediaannya. Terima kasih.',
  ].join('\n');
}

export function buildWhatsAppUrl(message?: string) {
  const number = getWhatsAppNumber();
  const target = `https://wa.me/${number}`;
  if (!message) return target;
  return `${target}?text=${encodeURIComponent(message)}`;
}
