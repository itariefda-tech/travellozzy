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

export function buildWhatsAppUrl(message: string) {
  const configuredNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '');
  const target = configuredNumber ? `https://wa.me/${configuredNumber}` : 'https://wa.me/';
  return `${target}?text=${encodeURIComponent(message)}`;
}
