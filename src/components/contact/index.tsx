import ContactForm from './features/ContactForm';
import ContactTitle from './features/ContactTitle';

function Contact() {
  return (
    <div id="contact" className="h-screen ">
      <div className="flex p-16 h-[inherit]">
        <ContactTitle />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
