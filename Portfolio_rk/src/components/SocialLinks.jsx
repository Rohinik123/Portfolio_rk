import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

// Change resume URL: set REACT_APP_RESUME_URL in .env (e.g. Google Drive PDF link), or add Rohini_main_Resume.pdf to /public
const resumeHref =
  process.env.REACT_APP_RESUME_URL ||
  `${process.env.PUBLIC_URL}/Rohini_main_Resume.pdf`;

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rohini-kalane-26a407219",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/rohinik123",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:rohinik1619@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resumeHref,
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <>
      <div className="hidden lg:flex flex flex-col top-[35%] left-0 fixed z-30">
        <ul>
          {links.map(({ id, child, href, style, download }) => {
            const openInNewTab =
              href.startsWith("http") || href.startsWith("mailto:");
            const useDownload = download && !openInNewTab;
            return (
              <li
                key={id}
                className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style ?? ""}`}
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  {...(useDownload ? { download: "Rohini_main_Resume.pdf" } : {})}
                  {...(openInNewTab
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {child}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-30 flex justify-around items-center bg-gray-800/95 backdrop-blur-sm border-t border-gray-600 py-3 px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        aria-label="Social links"
      >
        {links.map(({ id, href, download }) => {
          const openInNewTab =
            href.startsWith("http") || href.startsWith("mailto:");
          const useDownload = download && !openInNewTab;
          const icon =
            id === 1 ? (
              <FaLinkedin className="text-2xl" />
            ) : id === 2 ? (
              <FaGithub className="text-2xl" />
            ) : id === 3 ? (
              <HiOutlineMail className="text-2xl" />
            ) : (
              <BsFillPersonLinesFill className="text-2xl" />
            );
          return (
            <a
              key={id}
              href={href}
              className="p-2 text-white rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-gray-600"
              title={
                id === 1
                  ? "LinkedIn"
                  : id === 2
                    ? "GitHub"
                    : id === 3
                      ? "Email"
                      : "Resume"
              }
              {...(useDownload ? { download: "Rohini_main_Resume.pdf" } : {})}
              {...(openInNewTab
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {icon}
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default SocialLinks;
