import ContactForm from "@/app/components/(Meleese)/ContactForm";
import SubHeader from "@/app/components/(Meleese)/SubHeader";
import HeaderNav from "@/app/components/(Bjorn)/header-elem/HeaderNav";
import FooterBox from "@/app/components/(Bjorn)/footer-elem/FooterBox";


export default function Contact() {

  return (
        <div>
        <HeaderNav/>
    <main>
        <SubHeader title="Contact Us" />
      <div className="col-start-2">
        <ContactForm />
      </div>
    </main>
    {/* <FooterBox /> */}
    </div>
  );
}
