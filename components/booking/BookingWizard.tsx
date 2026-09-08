'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { services } from '@/content/services';
import { fleet } from '@/content/fleet';
import { buildBookingMessage, buildWhatsAppUrl, type BookingInquiry } from '@/lib/integrations/whatsapp';

const initialInquiry: BookingInquiry = {
  service: '',
  date: '',
  vehicle: '',
  pickup: '',
  destination: '',
  passengers: '',
  name: '',
  phone: '',
};

const steps = ['Service', 'Tanggal', 'Kendaraan', 'Kontak'];

export function BookingWizard() {
  const [step, setStep] = useState(0);
  const [inquiry, setInquiry] = useState(initialInquiry);
  const [error, setError] = useState('');

  const update = (field: keyof BookingInquiry, value: string) => {
    setInquiry((current) => ({ ...current, [field]: value }));
    setError('');
  };

  const stepIsValid = useMemo(() => {
    if (step === 0) return Boolean(inquiry.service);
    if (step === 1) return Boolean(inquiry.date && inquiry.pickup && inquiry.destination);
    if (step === 2) return Boolean(inquiry.vehicle && inquiry.passengers);
    return Boolean(inquiry.name.trim() && /^\+?[0-9][0-9\s-]{7,}$/.test(inquiry.phone.trim()));
  }, [inquiry, step]);

  const next = () => {
    if (!stepIsValid) {
      setError('Lengkapi informasi pada langkah ini untuk melanjutkan.');
      return;
    }
    setStep((current) => Math.min(3, current + 1));
  };

  const submit = () => {
    if (!stepIsValid) {
      setError('Masukkan nama dan nomor WhatsApp yang valid.');
      return;
    }
    window.open(buildWhatsAppUrl(buildBookingMessage(inquiry)), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="booking-section" id="booking" aria-labelledby="booking-title">
      <div className="container-shell booking-grid">
        <div className="booking-intro">
          <p className="eyebrow">Find your ride</p>
          <h2 id="booking-title">Tell us where the moment begins.</h2>
          <p>Empat langkah singkat. Detail inquiry akan disiapkan untuk WhatsApp.</p>
          <ol className="booking-steps" aria-label="Tahapan booking">
            {steps.map((label, index) => (
              <li key={label} className={index === step ? 'is-active' : index < step ? 'is-done' : ''}>
                <span>{index < step ? <Check size={14} aria-hidden="true" /> : index + 1}</span>{label}
              </li>
            ))}
          </ol>
        </div>

        <div className="booking-card">
          <p className="booking-card__step">Langkah {step + 1} dari 4</p>
          {step === 0 && (
            <div className="booking-fields">
              <label>
                Pilih layanan
                <NativeSelect className="field-control" value={inquiry.service} onChange={(event) => update('service', event.target.value)}>
                  <NativeSelectOption value="">Pilih kebutuhan perjalanan</NativeSelectOption>
                  {services.map((service) => <NativeSelectOption key={service.slug} value={service.shortName}>{service.shortName}</NativeSelectOption>)}
                </NativeSelect>
              </label>
            </div>
          )}
          {step === 1 && (
            <div className="booking-fields booking-fields--split">
              <label>Tanggal<input type="date" min={new Date().toISOString().slice(0, 10)} value={inquiry.date} onChange={(event) => update('date', event.target.value)} /></label>
              <label>Lokasi pickup<input type="text" placeholder="Contoh: Jakarta Barat" value={inquiry.pickup} onChange={(event) => update('pickup', event.target.value)} /></label>
              <label className="span-two">Tujuan<input type="text" placeholder="Contoh: Soekarno-Hatta" value={inquiry.destination} onChange={(event) => update('destination', event.target.value)} /></label>
            </div>
          )}
          {step === 2 && (
            <div className="booking-fields booking-fields--split">
              <label>
                Kelas kendaraan
                <NativeSelect className="field-control" value={inquiry.vehicle} onChange={(event) => update('vehicle', event.target.value)}>
                  <NativeSelectOption value="">Pilih kelas</NativeSelectOption>
                  {fleet.map((vehicle) => <NativeSelectOption key={vehicle.id} value={vehicle.name}>{vehicle.name}</NativeSelectOption>)}
                </NativeSelect>
              </label>
              <label>Jumlah penumpang<input inputMode="numeric" type="number" min="1" max="60" placeholder="4" value={inquiry.passengers} onChange={(event) => update('passengers', event.target.value)} /></label>
            </div>
          )}
          {step === 3 && (
            <div className="booking-fields booking-fields--split">
              <label>Nama<input autoComplete="name" type="text" placeholder="Nama Anda" value={inquiry.name} onChange={(event) => update('name', event.target.value)} /></label>
              <label>Nomor WhatsApp<input autoComplete="tel" inputMode="tel" type="tel" placeholder="08xxxxxxxxxx" value={inquiry.phone} onChange={(event) => update('phone', event.target.value)} /></label>
              <p className="privacy-note span-two">Dengan melanjutkan, detail perjalanan akan dibuka di WhatsApp. Belum ada reservasi sebelum ketersediaan dikonfirmasi.</p>
            </div>
          )}
          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="booking-actions">
            {step > 0 && <Button type="button" variant="ghost" className="booking-button" onClick={() => { setStep((current) => current - 1); setError(''); }}><ArrowLeft /> Kembali</Button>}
            {step < 3 ? (
              <Button type="button" className="booking-button booking-button--primary" onClick={next}>Lanjut <ArrowRight /></Button>
            ) : (
              <Button type="button" className="booking-button booking-button--primary" onClick={submit}><MessageCircle /> Buka WhatsApp</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
