const Youtube = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.8 2 2.1 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/></svg>;
const Facebook = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4C19.6 23 24 18 24 12z"/></svg>;
const Instagram = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 5.8.1 4.9.3 4.1.6c-.8.3-1.5.7-2.2 1.4C1.3 2.6.9 3.3.6 4.1.3 4.9.1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c0 1.3.2 2.2.5 3 .3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.7.5 3 .5C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c1.3 0 2.2-.2 3-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.7.5-3 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c0-1.3-.2-2.2-.5-3-.3-.8-.7-1.5-1.4-2.2-.7-.7-1.4-1.1-2.2-1.4-.8-.3-1.7-.5-3-.5C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-10.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z"/></svg>;

export default function Footer() {
  return (
    <footer>
      {/* Grass green feedback banner */}
      <div className="bg-[#8DC640] text-white">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <p className="text-sm font-medium">We are improving our website and value your feedback to better meet your needs</p>
          <button className="text-sm text-white/80 hover:text-white">Hide</button>
        </div>
      </div>

      {/* Moss section - Popular tasks and Contact */}
      <div className="bg-[#004E3E] text-white px-6 py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WF Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5C20 5 15 8 15 12C15 14 16 15 17 16C15 16 13 17 13 19C13 21 14 22 15 23C13 23 11 24 11 26C11 28 12 29 13 30C11 30 9 31 9 33C9 35 11 36 13 36H27C29 36 31 35 31 33C31 31 29 30 27 30C28 29 29 28 29 26C29 24 27 23 25 23C26 22 27 21 27 19C27 17 25 16 23 16C24 15 25 14 25 12C25 8 20 5 20 5Z" fill="white"/>
              </svg>
              <span className="text-base font-bold">Waltham Forest</span>
            </div>
            <p className="text-xs text-white/60">&copy; London Borough of Waltham Forest, {new Date().getFullYear()}</p>
          </div>

          {/* Popular tasks */}
          <div>
            <h3 className="font-bold mb-4 text-base">Popular tasks</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white no-underline hover:underline">Apply for a school place</a></li>
              <li><a href="#" className="text-white no-underline hover:underline">Check your bin day</a></li>
              <li><a href="#" className="text-white no-underline hover:underline">Get a parking permit</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-base">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white no-underline hover:underline">Contact us</a></li>
              <li><a href="#" className="text-white no-underline hover:underline">Make a complaint or compliment</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Black bottom section */}
      <div className="bg-[#231F20] text-white px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-6 text-xs text-gray-400">
              <a href="#" className="text-gray-400 no-underline hover:underline">Privacy policy</a>
              <a href="#" className="text-gray-400 no-underline hover:underline">Cookies policy</a>
              <a href="#" className="text-gray-400 no-underline hover:underline">Disclaimer</a>
              <a href="#" className="text-gray-400 no-underline hover:underline">Accessibility statement</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:opacity-80"><Youtube /></a>
              <a href="#" className="text-white hover:opacity-80"><Facebook /></a>
              <a href="#" className="text-white hover:opacity-80"><Instagram /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
