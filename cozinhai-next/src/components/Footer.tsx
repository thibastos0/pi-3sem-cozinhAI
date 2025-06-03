import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#22577A] p-18 gap-24 flex flex-col">
      <div className="flex flelx-row justify-between">
        <Link href="#">
          <img
            src="/images/fullLogoWhite.svg"
            className="w-56 hover:brightness-75"
          />
        </Link>
        <div className="flex flex-row gap-5 items-center">
          <Link href="https://www.tiktok.com" target="_blank">
            <img
              src="/images/tiktokIcon.svg"
              className=" w-8 hover:brightness-75 transition"
            />
          </Link>
          <Link href="https://www.x.com" target="_blank">
            <img
              src="/images/twitterIcon.svg"
              className=" w-8 hover:brightness-75 transition"
            />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <img
              src="/images/instagramIcon.svg"
              className=" w-8 hover:brightness-75 transition"
            />
          </Link>
          <Link href="https://www.facebook.com" target="_blank">
            <img
              src="/images/facebookIcon.svg"
              className=" w-8 hover:brightness-75 transition"
            />
          </Link>
        </div>
      </div>

      <div>
        <ul className="text-white flex flex-col gap-8 m-2.5 text-[20px]">
          <a href="#" className="hover:underline">
            <li>Início</li>
          </a>
          <a href="" className="hover:underline">
            <li>Sobre</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
