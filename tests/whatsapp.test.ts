import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildBookingMessage,
  buildWhatsAppUrl,
  formatWhatsAppNumber,
  getWhatsAppNumber,
} from '../lib/integrations/whatsapp.ts';

const inquiry = {
  service: 'Airport Transfer',
  date: '2026-09-10',
  vehicle: 'Toyota Alphard Gen 4 Hybrid',
  pickup: 'Jakarta Barat',
  destination: 'Soekarno-Hatta',
  passengers: '5',
  name: 'Test Customer',
  phone: '081234567890',
};

void test('buildBookingMessage emits every required booking field', () => {
  const message = buildBookingMessage(inquiry);
  assert.match(message, /Service: Airport Transfer/);
  assert.match(message, /Tanggal: 2026-09-10/);
  assert.match(message, /Pickup: Jakarta Barat/);
  assert.match(message, /Tujuan: Soekarno-Hatta/);
  assert.match(message, /Pilihan kendaraan: Toyota Alphard Gen 4 Hybrid/);
  assert.match(message, /Penumpang: 5/);
  assert.match(message, /Nama: Test Customer/);
  assert.match(message, /Nomor WhatsApp: 081234567890/);
});

void test('buildWhatsAppUrl safely encodes inquiry text with default number', () => {
  const url = buildWhatsAppUrl('Halo TRAVELOZY\nAirport & Wedding');
  assert.ok(url.startsWith('https://wa.me/'));
  assert.match(url, /6281298605977/);
  assert.match(url, /Halo%20TRAVELOZY%0AAirport%20%26%20Wedding/);
});

void test('getWhatsAppNumber and formatWhatsAppNumber return configured real number', () => {
  assert.equal(getWhatsAppNumber(), '6281298605977');
  assert.equal(formatWhatsAppNumber(), '+62 812-9860-5977');
  assert.equal(buildWhatsAppUrl(), 'https://wa.me/6281298605977');
});
