
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dua & Ruqyah | All Dua collection",
  description: "Dua Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#f7f8fa]">
          <div className="grid grid-cols-10 grid-rows-10    h-screen">
            {/* ----start Left-bar--- */}
            <div className="row-span-full hidden xl:block w-[105px] ">
              <div
                id="left-bar"
                className="w-[100px] flex flex-col gap-y-5 overflow-hidden"
              >
                <div className="bg-white rounded-3xl px-4 dark:bg-dark-bg h-[95vh] scrl-left pb-16 border">
                  <div className="pt-7 mb-10 xl:mb-16 2xl:mb-16 3xl:mb-24 container ">
                    <Link href="/">
                      <Image
                        src="/assets/dua-logo.svg"
                        alt="dua-logo"
                        className="h-13 w-16 mx-auto drop-shadow-[#1fa45b] xl:mb-0 cursor-pointer"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                  <Link href="/">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-[#f7f8fa] dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <Image
                            src="/assets/nav/home.svg"
                            alt="/"
                            width={20}
                            height={20}
                          />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-[#1fa45b] font-medium " />
                      </div>
                    </div>
                  </Link>
                  <Link href="/alldua">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-[#f7f8fa] dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <Image
                            src="/assets/nav/alldua.svg"
                            alt="/alldua"
                            width={20}
                            height={20}
                          />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-[#1fa45b] font-medium " />
                      </div>
                    </div>
                  </Link>
                  <Link href="/memorize">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-[#f7f8fa] dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <Image
                            src="/assets/nav/memorize.svg"
                            alt="/memorize"
                            width={20}
                            height={20}
                          />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-[#1fa45b] font-medium " />
                      </div>
                    </div>
                  </Link>
                  <Link href="/bookmark">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-[#f7f8fa] dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <Image
                            src="/assets/nav/bookmark.svg"
                            alt="/bookmark"
                            width={20}
                            height={20}
                          />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-[#1fa45b] font-medium " />
                      </div>
                    </div>
                  </Link>
                  <Link href="/ruqyah">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-[#f7f8fa] dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <Image
                            src="/assets/nav/ruqyah.svg"
                            alt="/ruqyah"
                            width={20}
                            height={20}
                          />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-[#1fa45b] font-medium " />
                      </div>
                    </div>
                  </Link>
                  <Link href="/dua-info">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-[#f7f8fa] dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <Image
                            src="/assets/nav/dua-info.svg"
                            alt="/dua-info"
                            width={20}
                            height={20}
                          />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-[#1fa45b] font-medium " />
                      </div>
                    </div>
                  </Link>
                  <Link href="/books">
                    <div className="justify-center items-center  cursor-pointer my-2 flex flex-row w-full rounded-lg group">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg " />
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-[#f7f8fa] dark:bg-dark-bg-dark flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <Image
                            src="/assets/nav/books.svg"
                            alt="/books"
                            width={20}
                            height={20}
                          />
                        </div>
                        <h2 className="text-mute-grey-200 dark:text-dark-text style-Kalpurush text-sm text-start group-hover:text-[#1fa45b] font-medium " />
                      </div>
                    </div>
                  </Link>
                  <div>
                    <div className="pt-6 xl:pt-16 2xl:pt-16 3xl:pt-24 pb-2 pl-2 text-center">
                      <Link href="/support">
                        <button className="w-13 h-13 bg-[#1fa45b] drop-shadow-[#1fa45b] rounded-lg lg:mr-4 text-white text-sm">
                          <div className="flex justify-center items-center">
                            <p className="hidden">I Want To Support</p>{" "}
                            <svg
                              width={50}
                              height={50}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.2577 7.39C19.7087 6.925 19.9877 6.282 19.9877 5.572C19.9877 4.862 19.7087 4.219 19.2577 3.754C19.0296 3.51598 18.7558 3.3265 18.4527 3.19693C18.1496 3.06736 17.8234 3.00038 17.4937 3C17.4937 3 16.2497 2.997 14.9997 4.286C13.7497 2.997 12.5057 3 12.5057 3C12.1762 3.00042 11.8501 3.06732 11.547 3.19671C11.2439 3.32609 10.97 3.5153 10.7417 3.753C10.2907 4.219 10.0117 4.861 10.0117 5.571C10.0117 6.281 10.2907 6.925 10.7417 7.389L13.5305 10.409C14.3224 11.2665 15.6772 11.2666 16.4691 10.4092L19.2577 7.39Z"
                                fill="white"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.226 13.02L16.0478 15.5619C15.6932 15.8455 15.2526 16 14.7986 16H11C10.7239 16 10.5 15.7761 10.5 15.5C10.5 15.2239 10.7239 15 11 15H14.565C14.6554 15 14.7442 14.9754 14.8218 14.9289C14.8993 14.8824 14.9629 14.8157 15.0055 14.736C15.0482 14.6563 15.0685 14.5664 15.0642 14.4761C15.0598 14.3858 15.0311 14.2983 14.981 14.223L14.093 12.891C13.9108 12.6168 13.6636 12.392 13.3735 12.2365C13.0833 12.081 12.7592 11.9998 12.43 12H7C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.26671 12.3191 6.22752 12.3615 6.17673 12.4164C5.86372 12.755 5.1104 13.5698 4.25 14L1.5 14V19H3.75C5 19 6.12493 19.1249 6.5 19.5C6.87507 19.8751 7.46957 20 8 20H15.139C15.5666 20.0001 15.9893 19.9088 16.3787 19.7322C16.7682 19.5556 17.1153 19.2977 17.397 18.976L22.4064 14.0708C22.906 13.5816 22.7114 12.7371 22.048 12.516C21.573 12.3577 21.0658 12.3208 20.5729 12.4089C20.0799 12.4969 19.6169 12.707 19.226 13.02Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ---End Left-bar--- */}

            {/* ---Start Top-bar--- */}
            <div className="col-span-full md:col-span-11 md:col-start-2 bg-white rounded-2xl  md:bg-transparent md:rounded-none ">
              {" "}
              <div className=" flex items-center h-full">
                <div className="w-5/6 flex justify-between h-full items-center">
                  <Link className="md:hidden" href="/">
                    <Image
                      src="/assets/dua-logo.svg"
                      alt="dua-logo"
                      className="h-12 w-12 md:hidden mx-auto drop-shadow-[#1fa45b] xl:mb-0 cursor-pointer"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <p className="md:text-xl xl:text-2xl hidden md:block ">
                    Dua Page
                  </p>
                  <div className="sm:flex mr-16 hidden ">
                    <input
                      className=" border rounded-md mr-6  sm:w-[250px] md:w-[350px] placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder: placeholder:text-sm bg-white  py-[0.75rem] px-4 shadow-sm focus:outline-none focus:border-[#1fa45b] focus:ring-[#1fa45b] focus:ring-1  sm:text-sm sm-max:dark:bg-dark-bg-lite md:dark:bg-dark-bg-dark dark:bg-dark-bg dark:placeholder:opacity-[.6] lg:dark:bg-dark-bg-dark "
                      type="text"
                      placeholder="Search by Dua Name"
                    />
                    <div className="rounded-lg ml-[-70px]  flex justify-center items-center">
                      <Image
                        alt="search-icon"
                        src={"/assets/search-icon.svg"}
                        width={20}
                        height={20}
                        className=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-1/6 ">
                  <div className="flex justify-end items-center gap-4">
                    {" "}
                    <Image
                      src="/assets/settings/profile.svg"
                      alt="profile"
                      width={45}
                      height={45}
                    />
                    <svg
                      className="ml-2 mr-2"
                      width={10}
                      height={7}
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                        fill="#868686"
                      />
                    </svg>
                    <Image
                      src="/assets/tab/home/settings.svg"
                      className="xl: hidden"
                      alt="settings"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* ---End Top-bar--- */}

            {/* ------  Middle part----- */}

            {children}
 
          </div>
        </div>
      </body>
    </html>
  );
}
