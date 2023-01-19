import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
const [stickyClass, setstickyClass] = useState("relative");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200
        ? setstickyClass(" fixed top-0  z-50 w-4/5")
        : setstickyClass("relative");
    }
  };
function Navbar() {
  return (
    <>
      <section className=" absolute top-0 w-4/5 z-50 ">
        <nav
          className={`py-10 mb-12 flex justify-between items-center ${stickyClass}`}
        >
          <h1 className=" text-xl font-semibold font-burtons dark:text-white">
            BeardKoda
          </h1>
          <ul className=" flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkmode(!darkMode)}
                className=" text-2xl cursor-pointer  dark:text-white"
              />
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className=" ml-5"
              >
                <a
                  href="https://www.linkedin.com/in/joshua-akinsuyi/"
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-7"
                >
                  Contact Me
                </a>
              </motion.div>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
