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
              <Footer.Link href="/blog">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Help Center" />
            <Footer.LinkGroup col>
              <Footer.Link href="/ContactUs">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="/privacy">Privacy Policy</Footer.Link>
              <Footer.Link href="/licensing">Licensing</Footer.Link>
              <Footer.Link href="/terms">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow Us" />
            <Footer.LinkGroup col>
              <Footer.Link href="https://www.facebook.com" target="_blank">Facebook</Footer.Link>
              <Footer.Link href="https://www.instagram.com/hair.heritage_" target="_blank">Instagram</Footer.Link>
              <Footer.Link href="https://twitter.com" target="_blank">Twitter</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Emmilex™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <div className="transition-transform duration-300 transform hover:scale-125">
              <Footer.Icon href="https://www.facebook.com" icon={BsFacebook} />
            </div>
            <div className="transition-transform duration-300 transform hover:scale-125">
              <Footer.Icon href="https://www.instagram.com/hair.heritage_" icon={BsInstagram} />
            </div>
            <div className="transition-transform duration-300 transform hover:scale-125">
              <Footer.Icon href="https://twitter.com" icon={BsTwitter} />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;
