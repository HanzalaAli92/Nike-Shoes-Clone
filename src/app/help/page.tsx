import { CiSearch } from "react-icons/ci";
import Image from "next/image";

export default function GetHelpSearch() {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-4">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6 text-center">GET HELP</h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-md mb-10">
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
        />
        <button className="absolute right-3 top-2 text-gray-500 hover:text-black">
          <CiSearch className="text-gray-500 flex" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:gap-10 w-full max-w-6xl">
        {/* Left Section */}
        <div className="lg:w-2/3 border-r border-gray-300 lg:pr-6 mb-6 lg:mb-0">
          <h1 className="text-2xl font-bold mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h1>
          <p className="mb-4">
            We want to make buying your favorite Nike shoes and gear online fast
            and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </li>
            <li>
              If you enter your PAN information at checkout, you'll be able to
              pay for your order with PayTM or a local credit or debit card.
            </li>
            <li>Apple Pay</li>
          </ul>
          <p className="mb-4">
            Nike Members can store multiple debit or credit cards in their
            profile for faster checkout. If you're not already a Member,{" "}
            <a href="#" className="text-blue-500 underline">
              join us
            </a>{" "}
            today.
          </p>

          <div className="flex gap-4 mb-8">
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
              JOIN US
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
              SHOP NIKE
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          <div className="mb-4">
            <p className="font-semibold">
              Does my card need international purchases enabled?
            </p>
            <p className="text-gray-700">
              Yes, we recommend asking your bank to enable international
              purchases on your card. You will be notified at checkout if
              international purchases need to be enabled.
            </p>
            <p className="text-gray-700">
              Please note, some banks may charge a small transaction fee for
              international orders.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">
              Can I pay for my order with multiple methods?
            </p>
            <p className="text-gray-700">
              No, payment for Nike orders can't be split between multiple
              payment methods.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">
              What payment method is accepted for SNKRS orders?
            </p>
            <p className="text-gray-700">
              You can use any accepted credit card to pay for your SNKRS order.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">
              Why don’t I see Apple Pay as an option?
            </p>
            <p className="text-gray-700">
              To see Apple Pay as an option in the Nike App or on Nike.com,
              you’ll need to use a compatible Apple device running the latest
              iOS, be signed in to your iCloud account, and have a supported
              card in your Wallet. Additionally, you’ll need to use Safari to
              use Apple Pay on Nike.com.
            </p>
          </div>

          <p className="text-gray-600 text-sm mt-6">
            Was this answer helpful?
            <div className="flex">
              <Image
                src="/like.png"
                alt="Like"
                width={30}
                height={30}
                className="hover:cursor-pointer"
              />
              <Image
                src="/dislike.png"
                alt="Dislike"
                width={30}
                height={30}
                className="hover:cursor-pointer"
              />
            </div>
          </p>

          <p className="text-gray-600 text-sm mt-1">RELATED</p>
          <div className="gap-2 ml-6 mt-7">
            <a href="#" className="text-blue-500 block underline">
              WHAT ARE NIKE'S DELIVERY OPTIONS?
            </a>
            <a href="#" className="text-blue-500 block underline">
              HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
            </a>
          </div>
        </div>

        {/* Right Section (Sidebar) */}
        <div className="lg:w-1/3 flex flex-col justify-center items-center gap-10">
          <h2 className="text-xl font-bold mb-4 text-center">CONTACT US</h2>

          {/* Phone Section */}
          <div className="flex flex-col items-center gap-2 text-center">
            <Image src="/mobile.png" alt="Mobile" width={64} height={64} />
            <p className="font-semibold">000 800 919 0566</p>
            <p className="text-sm text-gray-600">
              Products & Orders: 24 hours a day, 7 days a week
            </p>
            <p className="text-sm text-gray-600">
              Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
            </p>
          </div>

          {/* Chat Section */}
          <div className="flex flex-col items-center gap-2 text-center">
            <Image src="/text.png" alt="Text" width={64} height={64} />
            <p className="text-sm text-gray-600">24 hours a day</p>
            <p className="text-sm text-gray-600">7 days a week</p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center gap-2 text-center">
            <Image src="/message.png" alt="Message" width={64} height={64} />
            <p className="text-sm text-gray-600">
              We'll reply within five business days
            </p>
          </div>

          {/* Store Locator Section */}
          <div className="flex flex-col items-center gap-2 text-center">
            <Image src="/location.png" alt="Location" width={64} height={64} />
            <p className="font-semibold">STORE LOCATOR</p>
            <p className="text-sm text-gray-600">
              Find Nike retail stores near you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
