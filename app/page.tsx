import Link from "next/link";
import {
  AsteriskIcon,
  Computer,
  FunctionSquare,
  Heart,
  ParenthesesIcon,
  RefreshCcw,
  Telescope,
} from "lucide-react";
import StarOnGithubBtn from "@/components/StarOnGithubBtn";

export default function Home() {
  return (
    <>
      <section className="relative mx-auto mt-20 flex w-full max-w-7xl flex-col items-center gap-8">
        <div className="mx-auto flex w-full flex-col items-center gap-5 px-4 py-12 md:gap-7 md:px-0 md:py-20">
          <h1 className="font-display text-primary-text inline-flex flex-col gap-1 text-center text-4xl leading-none font-semibold tracking-wider transition sm:text-5xl md:text-6xl lg:text-[4rem]">
            <span>
              Test Any{" "}
              <span className="text-primary-800 relative whitespace-nowrap">
                <span className="bg-primary-600/10 absolute -top-[2.5%] -left-[2.5%] z-0 h-[105%] w-[105%] -rotate-1"></span>{" "}
                MCP Server
                <span className="hidden sm:inline-block">⚡</span>
              </span>{" "}
            </span>
            <div className="pt-4">With Ease</div>
          </h1>
          <p className="text-primary-text/80 py-5 text-center text-lg/7 text-pretty sm:text-center sm:text-wrap md:py-10 md:text-xl/8">
            Just enter your
            <span className="text-primary-text px-1">MCP</span>,
            <span className="text-primary-text">Server Configuration</span> and
            <span className="inline sm:block">
              <span className="text-primary-text">get instant response</span>.
            </span>
          </p>
          <div className="text-left">
            <ul className="text-muted-dark grid gap-3 text-lg/7">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check text-primary-600 size-5"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Incredible developer experience</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check text-primary-600 size-5"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Fast and reliable</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check text-primary-600 size-5"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>No more hassle of testing</span>
              </li>
            </ul>
          </div>
          <Link
            href={"/test"}
            className="button from-primary-900 to-secondary-900 hover:bg-secondary-900/75 text-background-50 relative z-10 mt-4 inline-flex h-14 w-full max-w-sm cursor-pointer items-center justify-center gap-1.5 rounded-md bg-gradient-to-br px-5 py-2.5 font-semibold shadow-xl transition hover:scale-[0.98] active:scale-[0.95]"
          >
            Test your server
          </Link>
        </div>
      </section>
      <section className="dark:bg-background-200/50 flex w-full flex-col items-center gap-8 border-y-2 border-dashed border-gray-700/50 bg-slate-100 px-4 py-28 sm:px-0">
        <h1 className="font-display relative z-10 gap-1 text-center text-4xl font-semibold tracking-tight text-pretty transition sm:text-5xl">
          <span className="relative mx-3 whitespace-nowrap text-white">
            <span className="bg-secondary-600/10 absolute -top-[2.5%] -left-[5%] z-0 h-[110%] w-[110%] -rotate-1"></span>
            <span className="text-primary-800 relative z-10">Stay in sync</span>
          </span>
          <span className="relative z-10">with our repo</span>
        </h1>

        <svg
          width="91"
          height="195"
          viewBox="0 0 91 195"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow text-primary-700 order-1 size-20 transition-transform duration-300 peer-hover:-rotate-12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.8275 2.83924C71.2259 10.0664 63.6462 14.9471 55.0809 21.3765C41.8223 31.3725 31.6613 40.3126 29.0565 44.3251C27.6954 46.4604 27.32 47.7744 27.4373 50.074C27.5546 52.4439 28.2821 53.9222 30.2533 55.729C33.8671 59.061 40.4143 61.2901 54.4943 63.9417C58.9764 64.7864 60.9476 65.42 60.9476 65.9831C60.9476 66.5463 58.6948 69.3151 56.6767 71.2392C54.0719 73.75 51.1855 76.0261 45.6239 79.9916C37.6687 85.6466 34.313 88.5797 31.3797 92.4984C29.2442 95.2907 28.2352 97.5433 28.1413 99.6551C28.0005 102.377 28.7983 104.067 30.8869 105.381C33.1397 106.812 34.2895 107 42.761 107.328C52.6873 107.704 53.0628 107.844 51.115 110.543C50.6223 111.247 47.9471 113.992 45.178 116.667C40.2501 121.407 38.0677 123.777 35.6037 127.062C33.7263 129.573 29.9248 135.439 26.5221 141.024C18.4027 154.399 16.5957 158.575 12.2309 173.804C11.48 176.432 10.7995 178.567 10.7056 178.567C10.424 178.567 10.0486 177.324 9.79044 175.447C9.3915 172.725 7.98349 167.375 7.30295 165.967C6.62242 164.535 5.87149 163.878 4.6043 163.55C2.72697 163.034 0.708845 164.23 0.145647 166.154C-0.112485 166.952 -0.0420511 167.75 0.474214 171.364C0.826212 173.71 1.20167 176.948 1.34247 178.567C1.92913 186.146 2.0934 187.648 2.39846 189.244C2.77393 191.285 3.36058 192.482 4.44004 193.514C6.05924 195.063 8.28857 195.415 10.3771 194.43C11.0342 194.148 12.536 192.975 13.7563 191.848C16.8773 188.986 20.3035 186.452 34.4303 176.573C43.066 170.542 45.9055 168.477 46.3983 167.914C46.7268 167.492 46.5156 167.07 46.0228 167.07C45.53 167.07 33.5386 171.786 29.6197 173.522C27.9301 174.273 25.0906 175.611 23.2837 176.549C21.4768 177.465 19.928 178.239 19.8341 178.286C19.7403 178.333 19.7637 178.075 19.8576 177.699C24.5509 162.94 26.0293 159.608 33.6324 146.726C41.8223 132.858 43.9812 129.807 50.7396 122.721C55.034 118.192 56.9348 115.775 58.1081 113.359C58.8121 111.857 58.9529 111.294 59.0233 109.534C59.1172 107.586 59.0937 107.375 58.3897 105.944C57.1694 103.456 54.9636 101.931 51.6314 101.251C50.7631 101.086 48.041 100.805 45.577 100.664C41.0949 100.406 37.2463 100.054 36.4954 99.8194C35.9557 99.6551 36.1669 99.2562 38.0677 96.7924C40.4613 93.7185 43.1364 91.3251 50.0356 86.1159C55.2687 82.1738 58.0612 79.8273 60.666 77.1993C67.0489 70.7465 68.9497 65.6546 66.2041 62.4399C64.5379 60.5158 62.778 59.8353 55.1983 58.2866C43.77 55.9636 37.7391 53.8753 34.9701 51.3176C33.304 49.7924 33.6325 48.713 36.7535 45.4044C44.6852 37.004 59.9855 24.4504 75.6142 13.4923C85.6814 6.42936 89.4595 3.47279 90.14 1.99451C90.5155 1.22017 90.5154 1.10285 90.1869 0.563162C89.9522 0.234654 89.5768 0 89.2717 0C88.9901 0 86.5496 1.29056 83.8275 2.83924Z"
            fill="currentColor"
          ></path>
        </svg>
        <StarOnGithubBtn />
      </section>

      <section className="relative mx-auto mt-20 flex w-full max-w-7xl flex-col items-center gap-6 px-4 md:mt-32 md:gap-8 md:px-6">
        <h2 className="text-secondary-text text-center text-4xl leading-none font-semibold tracking-tight sm:text-5xl">
          Start testing your MCP server{" "}
          <span className="text-primary-600 relative mt-2 inline-block whitespace-nowrap md:mt-0 md:inline">
            <span className="bg-primary-200/10 absolute -left-[5%] z-0 h-full w-[110%] -rotate-1"></span>
            this morning!
          </span>
        </h2>
        <p className="text-muted max-w-2xl text-center text-lg text-pretty md:text-xl/8">
          Everything you need for testing your config
          <span className="inline sm:block"> even if you are a beginner.</span>
        </p>
        <div id="features">
          <div className="mx-auto grid grid-cols-1 gap-6 sm:w-[80%] sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-background-400/20 hover:border-accent-600 transform rounded-xl border-2 border-transparent p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col items-center">
                <div className="bg-background-400/20 flex h-12 w-12 items-center justify-center rounded-full">
                  <RefreshCcw className="text-primary-700 size-6" />
                </div>
                <h3 className="text-muted-dark mt-4 mb-2 text-center text-lg font-semibold">
                  Real time
                </h3>
                <p className="text-muted text-center text-sm">
                  Instantly verify your MCP server configuration with immediate
                  feedback on connectivity.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-background-400/20 hover:border-accent-600 transform rounded-xl border-2 border-transparent p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col items-center">
                <div className="bg-background-400/20 flex h-12 w-12 items-center justify-center rounded-full">
                  <FunctionSquare className="text-primary-700 size-6" />
                </div>
                <h3 className="text-muted-dark mt-4 mb-2 text-center text-lg font-semibold">
                  Intuitive UI
                </h3>
                <p className="text-muted text-center text-sm">
                  Experience a modern and responsive design built with Next.JS
                  and Tailwind CSS for seamless interaction.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-background-400/20 hover:border-accent-600 transform rounded-xl border-2 border-transparent p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col items-center">
                <div className="bg-background-400/20 flex h-12 w-12 items-center justify-center rounded-full">
                  <Computer className="text-primary-700 size-6" />
                </div>
                <h3 className="text-muted-dark mt-4 mb-2 text-center text-lg font-semibold">
                  Detailed Reports
                </h3>
                <p className="text-muted text-center text-sm">
                  Receive comprehensive, actionable error messages that help
                  diagnose issues quickly.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-background-400/20 hover:border-accent-600 hover:border-2hover:shadow-lg transform rounded-xl border border-transparent p-6 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center">
                <div className="bg-background-400/20 flex h-12 w-12 items-center justify-center rounded-full">
                  <ParenthesesIcon className="text-primary-700 size-6" />
                </div>
                <h3 className="text-muted-dark mt-4 mb-2 text-center text-lg font-semibold">
                  Robust API
                </h3>
                <p className="text-muted text-center text-sm">
                  Leverage Next.js API routes to securely and accurately test
                  your MCP server endpoints.
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-background-400/20 hover:border-accent-600 transform rounded-xl border-2 border-transparent p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col items-center">
                <div className="bg-background-400/20 flex h-12 w-12 items-center justify-center rounded-full">
                  <AsteriskIcon className="text-primary-700 size-6" />
                </div>
                <h3 className="text-muted-dark mt-4 mb-2 text-center text-lg font-semibold">
                  TypeScript's Reliability
                </h3>
                <p className="text-muted text-center text-sm">
                  Enjoy enhanced code safety and maintainability through full
                  TypeScript support.
                </p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="bg-background-400/20 hover:border-accent-600 transform rounded-xl border-2 border-transparent p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col items-center">
                <div className="bg-background-400/20 flex h-12 w-12 items-center justify-center rounded-full">
                  <Telescope className="text-primary-700 size-6" />
                </div>
                <h3 className="text-muted-dark mt-4 mb-2 text-center text-lg font-semibold">
                  Easy Deployment
                </h3>
                <p className="text-muted text-center text-sm">
                  Optimized for rapid deployment on platforms like Vercel,
                  ensuring a scalable and efficient solution.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 mb-4 w-full max-w-4xl">
          <div className="text-center">
            <p className="text-muted-dark mb-6 text-center text-lg text-pretty md:text-xl/8">
              Built with modern, battle-tested tools:
            </p>
          </div>
          <div className="grid w-full grid-cols-2 items-center justify-center gap-8 px-4 sm:flex sm:flex-wrap md:px-6">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="sm:border-dark-gray flex items-center justify-center opacity-50 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 sm:pr-8"
              href="https://nextjs.org"
            >
              <svg
                aria-label="Next.js logotype"
                height="68"
                role="img"
                viewBox="0 0 394 79"
                width="394"
                className="text-primary-text w-24 md:w-32"
              >
                <path
                  d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
                  fill="currentColor"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
                <path
                  d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="sm:border-dark-gray flex items-center justify-center opacity-50 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 sm:pr-8"
              href="https://www.typescriptlang.org"
            >
              <svg
                id="Capa_1"
                enableBackground="new 0 0 512 512"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 md:size-12"
              >
                <g>
                  <path
                    d="m50 0h412c27.614 0 50 22.386 50 50v412c0 27.614-22.386 50-50 50h-412c-27.614 0-50-22.386-50-50v-412c0-27.614 22.386-50 50-50z"
                    fill="#3178c6"
                  ></path>
                  <path
                    d="m50 0h412c27.614 0 50 22.386 50 50v412c0 27.614-22.386 50-50 50h-412c-27.614 0-50-22.386-50-50v-412c0-27.614 22.386-50 50-50z"
                    fill="#3178c6"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c21.219 0 44.448-3.035 62.602-14.784 18.064-11.691 26.449-31.14 26.449-52.172 0-15.637-4.851-30.684-15.807-42.081-16.429-17.091-39.516-24.022-60.255-34.183-10.389-5.09-24.727-12.992-24.727-26.361 0-3.441.887-6.543 2.661-9.307 7.132-11.113 22.973-13.376 35.057-13.376 13.717 0 28.189 3.071 40.926 8.76 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 11.792 4.822 24.053 9.581 34.665 16.739 7.355 4.96 14.007 11.877 14.007 21.275 0 6.821-3.856 12.604-9.468 16.192-8.303 5.308-18.936 6.492-28.563 6.492-10.851 0-21.597-1.903-32.24-5.71-10.641-3.806-20.501-9.516-29.578-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
                    fill="#e4e4e7"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 flex items-center justify-center opacity-50 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 sm:col-span-1"
              href="https://tailwindcss.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 262 33"
                className="my-4 h-6 w-auto sm:my-0 md:h-7"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
                  fill="#38BDF8"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M80.996 13.652H76.284V22.772C76.284 25.204 77.88 25.166 80.996 25.014V28.7C74.688 29.46 72.18 27.712 72.18 22.772V13.652H68.684V9.69996H72.18V4.59596L76.284 3.37996V9.69996H80.996V13.652ZM98.958 9.69996H103.062V28.7H98.958V25.964C97.514 27.978 95.272 29.194 92.308 29.194C87.14 29.194 82.846 24.824 82.846 19.2C82.846 13.538 87.14 9.20596 92.308 9.20596C95.272 9.20596 97.514 10.422 98.958 12.398V9.69996ZM92.954 25.28C96.374 25.28 98.958 22.734 98.958 19.2C98.958 15.666 96.374 13.12 92.954 13.12C89.534 13.12 86.95 15.666 86.95 19.2C86.95 22.734 89.534 25.28 92.954 25.28ZM109.902 6.84996C108.458 6.84996 107.28 5.63396 107.28 4.22796C107.281 3.53297 107.558 2.86682 108.049 2.37539C108.541 1.88395 109.207 1.60728 109.902 1.60596C110.597 1.60728 111.263 1.88395 111.755 2.37539C112.246 2.86682 112.523 3.53297 112.524 4.22796C112.524 5.63396 111.346 6.84996 109.902 6.84996ZM107.85 28.7V9.69996H111.954V28.7H107.85ZM116.704 28.7V0.959961H120.808V28.7H116.704ZM147.446 9.69996H151.778L145.812 28.7H141.784L137.832 15.894L133.842 28.7H129.814L123.848 9.69996H128.18L131.866 22.81L135.856 9.69996H139.77L143.722 22.81L147.446 9.69996ZM156.87 6.84996C155.426 6.84996 154.248 5.63396 154.248 4.22796C154.249 3.53297 154.526 2.86682 155.017 2.37539C155.509 1.88395 156.175 1.60728 156.87 1.60596C157.565 1.60728 158.231 1.88395 158.723 2.37539C159.214 2.86682 159.491 3.53297 159.492 4.22796C159.492 5.63396 158.314 6.84996 156.87 6.84996ZM154.818 28.7V9.69996H158.922V28.7H154.818ZM173.666 9.20596C177.922 9.20596 180.962 12.094 180.962 17.034V28.7H176.858V17.452C176.858 14.564 175.186 13.044 172.602 13.044C169.904 13.044 167.776 14.64 167.776 18.516V28.7H163.672V9.69996H167.776V12.132C169.03 10.156 171.082 9.20596 173.666 9.20596ZM200.418 2.09996H204.522V28.7H200.418V25.964C198.974 27.978 196.732 29.194 193.768 29.194C188.6 29.194 184.306 24.824 184.306 19.2C184.306 13.538 188.6 9.20596 193.768 9.20596C196.732 9.20596 198.974 10.422 200.418 12.398V2.09996ZM194.414 25.28C197.834 25.28 200.418 22.734 200.418 19.2C200.418 15.666 197.834 13.12 194.414 13.12C190.994 13.12 188.41 15.666 188.41 19.2C188.41 22.734 190.994 25.28 194.414 25.28ZM218.278 29.194C212.54 29.194 208.246 24.824 208.246 19.2C208.246 13.538 212.54 9.20596 218.278 9.20596C222.002 9.20596 225.232 11.144 226.752 14.108L223.218 16.16C222.382 14.374 220.52 13.234 218.24 13.234C214.896 13.234 212.35 15.78 212.35 19.2C212.35 22.62 214.896 25.166 218.24 25.166C220.52 25.166 222.382 23.988 223.294 22.24L226.828 24.254C225.232 27.256 222.002 29.194 218.278 29.194ZM233.592 14.944C233.592 18.402 243.814 16.312 243.814 23.342C243.814 27.142 240.508 29.194 236.404 29.194C232.604 29.194 229.868 27.484 228.652 24.748L232.186 22.696C232.794 24.406 234.314 25.432 236.404 25.432C238.228 25.432 239.634 24.824 239.634 23.304C239.634 19.922 229.412 21.822 229.412 15.02C229.412 11.448 232.49 9.20596 236.366 9.20596C239.482 9.20596 242.066 10.65 243.396 13.158L239.938 15.096C239.254 13.614 237.924 12.93 236.366 12.93C234.884 12.93 233.592 13.576 233.592 14.944ZM251.11 14.944C251.11 18.402 261.332 16.312 261.332 23.342C261.332 27.142 258.026 29.194 253.922 29.194C250.122 29.194 247.386 27.484 246.17 24.748L249.704 22.696C250.312 24.406 251.832 25.432 253.922 25.432C255.746 25.432 257.152 24.824 257.152 23.304C257.152 19.922 246.93 21.822 246.93 15.02C246.93 11.448 250.008 9.20596 253.884 9.20596C257 9.20596 259.584 10.65 260.914 13.158L257.456 15.096C256.772 13.614 255.442 12.93 253.884 12.93C252.402 12.93 251.11 13.576 251.11 14.944Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="mt-4 mb-24 flex w-full max-w-xs">
          <Link
            className="from-primary-800 to-primary-400 hover:bg-primary-200/75 mt-4 inline-flex h-14 w-full max-w-xs cursor-pointer items-center justify-center gap-1.5 rounded-md bg-gradient-to-br px-5 py-2.5 font-semibold text-zinc-800 shadow-xl transition hover:scale-[0.98] active:scale-[0.95]"
            href="/test"
          >
            Start Testing Today →
          </Link>
        </div>
      </section>

      <footer className="relative mx-auto flex w-full max-w-7xl items-center justify-center gap-8 py-5 md:py-10">
        <h5 className="text-muted text-lg">
          Built by rahulc0dy, a personal project{" "}
          <Heart
            className="text-danger-500 inline size-5 opacity-75"
            fill="currentColor"
          />
        </h5>
      </footer>
    </>
  );
}
