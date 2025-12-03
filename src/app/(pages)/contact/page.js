import ContactForm from "@/app/components/(Meleese)/ContactForm";
import SubHeader from "@/app/components/(Meleese)/SubHeader";

export default function Contact() {

  return (
    <main>
        <SubHeader title="Contact Us" />
      <div className="col-start-2">
        <ContactForm />
      </div>
    </main>
  );
}
