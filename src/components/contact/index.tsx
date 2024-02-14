import ContactForm from './features/ContactForm';
import ContactTitle from './features/ContactTitle';

function Contact() {
  return (
    <div id="contact" className="bg-lightBG h-screen snap-center">
      <div className="flex flex-col justify-center h-[inherit] desktop:flex-row">
        <ContactTitle />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
