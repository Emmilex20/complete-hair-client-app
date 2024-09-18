import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


const MyFooter = () => {
  return (
    <Footer bgDark>
    <div className="w-full px-4 lg:px-24">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <Footer.Title title="Company" />
          <Footer.LinkGroup col>
            <Footer.Link href="/about">About</Footer.Link>
            <Footer.Link href="/career">Careers</Footer.Link>
            <Footer.Link href="#">Brand Center</Footer.Link>
            <Footer.Link href="/blog">Blog</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="help center" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Instagram</Footer.Link>
            <Footer.Link href="#">Facebook</Footer.Link>
            <Footer.Link href="/ContactUs">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="legal" />
          <Footer.LinkGroup col>
            <Footer.Link href="/privacy">Privacy Policy</Footer.Link>
            <Footer.Link href="/licensing">Licensing</Footer.Link>
            <Footer.Link href="/terms">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="download" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">iOS</Footer.Link>
            <Footer.Link href="#">Android</Footer.Link>
            <Footer.Link href="#">Windows</Footer.Link>
            <Footer.Link href="#">MacOS</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Emmilex™" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default MyFooter