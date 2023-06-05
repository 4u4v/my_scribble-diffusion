import Link from "next/link";
import Image from "next/image";
// import "react-tooltip/dist/react-tooltip.css";

const linkStyles =
  "inline-block relative w-12 h-12 mx-2 opacity-40 hover:opacity-100 transition-all duration-200";
const imageStyles =
  "p-3 hover:p-1  transition-all duration-200  hover:saturate-100";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="">
        <p className="text-center">
        CopyRight {" "}
          <Link
            className="underline"
            href="https://www.4u4v.com"
            target="_blank"
          >
            4u4v.com
          </Link>
          All Rights Reserved.
        </p>

        <nav className="text-center mt-16">
          <Link
            className={linkStyles}
            href="#"
          >
            <Image
              src="/logomarks/replicate.svg"
              alt="Replicate"
              data-tooltip-id="replicate-tooltip"
              data-tooltip-content="Built by Replicate"
              className={imageStyles}
              fill={true}
              unoptimized={true}
            />
          </Link>
          <Link
            className={linkStyles}
            href="#"
          >
            <Image
              src="/logomarks/uploadio.svg"
              data-tooltip-id="uploadio-tooltip"
              data-tooltip-content="File storage from Upload.io"
              alt="File storage from Upload.io"
              className={imageStyles}
              fill={true}
              unoptimized={true}
            />
          </Link>
          <Link className={linkStyles} href="#">
            <Image
              src="/logomarks/vercel.svg"
              data-tooltip-id="vercel-tooltip"
              data-tooltip-content="Hosted on Vercel"
              alt="Vercel"
              className={imageStyles}
              fill={true}
              unoptimized={true}
            />
          </Link>

          <Link className={linkStyles} href="#">
            <Image
              src="/logomarks/youtube.svg"
              data-tooltip-id="youtube-tooltip"
              data-tooltip-content="See how it was made"
              alt="See how it was made"
              className={imageStyles}
              fill={true}
              unoptimized={true}
            />
          </Link>
          <Link
            className={linkStyles}
            href="#">
            <Image
              src="/logomarks/github.svg"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="Fork it on GitHub"
              alt="Fork it on GitHub"
              className={imageStyles}
              fill={true}
              unoptimized={true}
            />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
