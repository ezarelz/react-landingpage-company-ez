// src/components/container/ContactSection/Contact.tsx
import React, { useMemo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Input, Textarea } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { ResultModal } from './Popup/ResultModal';

const ALL_SERVICES = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Cloud Solutions',
  'Software Development',
  'Other',
] as const;

type Service = (typeof ALL_SERVICES)[number];

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [selected, setSelected] = useState<Service[]>(['Web Development']);
  const servicesCSV = useMemo(() => selected.join(', '), [selected]);

  const [sending, setSending] = useState(false);

  // modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState<'success' | 'error'>(
    'success'
  );
  const [modalTitle, setModalTitle] = useState('');
  const [modalMsg, setModalMsg] = useState('');

  const toggleService = (svc: Service) => {
    setSelected((prev) =>
      prev.includes(svc) ? prev.filter((v) => v !== svc) : [...prev, svc]
    );
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setSending(true);
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // sinkronkan hidden input services sebelum kirim
      const hidden =
        formRef.current.querySelector<HTMLInputElement>('#servicesCSV');
      if (hidden) hidden.value = servicesCSV;

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      );

      // success modal
      setModalVariant('success');
      setModalTitle('Message Received!');
      setModalMsg(
        'Thanks for reaching out — we’ll get back to you as soon as possible.'
      );
      setModalOpen(true);

      formRef.current.reset();
      setSelected(['Web Development']);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setModalVariant('error');
      setModalTitle('Oops! Something went wrong.');
      setModalMsg(
        'We couldn’t send your message. Please try again or check your connection.'
      );
      setModalOpen(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id='contact'
      className='py-16 px-4 bg-white text-gray-900 dark:bg-black dark:text-white'
      aria-labelledby='contact-heading'
    >
      {/* Heading */}
      <header className='mx-auto max-w-3xl text-center'>
        <h2
          id='contact-heading'
          className='text-[28px] leading-[36px] font-bold sm:text-[32px] sm:leading-[40px]'
        >
          Ready to Start? Let’s Talk.
        </h2>
        <p className='mb-10 text-[15px] leading-[28px] text-gray-600 dark:text-gray-300'>
          Tell us what you need, and we’ll get back to you soon.
        </p>
      </header>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className='mx-auto max-w-3xl space-y-6'
        noValidate
      >
        <Input
          id='name'
          name='name'
          label='Name'
          placeholder='Enter your name'
          required
        />

        <Input
          id='email'
          name='email'
          type='email'
          label='Email'
          placeholder='Enter your email'
          required
        />

        <Textarea
          id='message'
          name='message'
          rows={5}
          label='Message'
          placeholder='Enter your message'
          required
        />

        {/* Services */}
        <fieldset>
          <legend className='mb-3 block text-[14px] font-semibold'>
            Services
          </legend>
          <div className='grid grid-cols-1 gap-y-2 lg:grid-cols-2 lg:gap-x-4'>
            {ALL_SERVICES.map((svc) => (
              <label key={svc} className='inline-flex items-center space-x-2'>
                <input
                  type='checkbox'
                  name='services[]'
                  value={svc}
                  className='h-5 w-5 accent-[#FF5722]'
                  checked={selected.includes(svc)}
                  onChange={() => toggleService(svc)}
                />
                <span className='text-[14px]'>{svc}</span>
              </label>
            ))}
          </div>
          {/* Hidden input tetap, bisa digunakan jika mau string gabungan */}
          <input
            id='servicesCSV'
            type='hidden'
            name='services_combined'
            value={servicesCSV}
            readOnly
          />
        </fieldset>

        {/* Submit */}
        <div className='pt-6'>
          <Button
            type='submit'
            size='lg'
            variant='primary'
            className='w-full'
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </form>

      {/* Modal hasil */}
      <ResultModal
        open={modalOpen}
        variant={modalVariant}
        title={modalTitle}
        message={modalMsg}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};

export default Contact;
