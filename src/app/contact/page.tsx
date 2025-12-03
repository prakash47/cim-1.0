import Hero from '@/components/contact/Hero';
// import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import Location from '@/components/contact/Location';

export const metadata = {
    title: 'Contact Us | Cinute InfoMedia',
    description: 'Get in touch with Cinute InfoMedia. We are ready to help you build your next digital success story.',
};

export default function ContactPage() {
    return (
        <div className="bg-white">
            <Hero />
            {/* <ContactInfo /> */}
            <ContactForm />
            <Location />
        </div>
    );
}
