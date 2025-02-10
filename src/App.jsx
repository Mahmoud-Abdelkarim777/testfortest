import logo from "./assets/image/logo.jpg";
import "./App.css";
import { useState } from "react";
import axios from "axios";


function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = async (e) => {
    e.preventDefault();
  
    const data = {
      fullName,
      phone,
      email,
      message,
    };
  
    try {
      const response = await axios.post("https://api.resend.com/emails", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log(response.data);
  
      if (response.data.id) {
        alert("تم إرسال الرسالة بنجاح");
        setFullName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        alert("حدث خطأ أثناء إرسال الرسالة");
      }
    } catch (error) {
      console.error("Error sending contact request:", error);
      alert("تعذر إرسال الرسالة، يرجى المحاولة لاحقًا.");
    }
  };
  
  
  
  return (
    <>
      {/* <!-- start header sextion  --> */}
      <header className="bg-main shadow-md font-sans tracking-wide relative z-50 w-full">
        <div className="container px-3 mx-auto flex flex-wrap items-center justify-between gap-2  py-3  min-h-[70px]">
          <a
            href="https://www.SSCIA.com"
            target="_blank"
            className="font-bold text-lg cursor-pointer"
          >
            المركز المتخصص السعودي للتحكيم
          </a>
          <div
            id="collapseMenu"
            className={`${
              toggleMenu ? null : "hidden"
            } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 transition duration-300 ease-in-out`}
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>
            <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-main max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className=" mb-6 hidden max-lg:block">
                <p className="font-bold text-lg">
                  {" "}
                  المركز المتخصص السعودي للتحكيم
                </p>
              </li>
              <li className="swinging-animation-a-1 max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#services"
                  className="  text-black block font-bold text-[15px]"
                >
                  خدماتنا
                </a>
              </li>
              <li className="swinging-animation-a-2 max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#contact"
                  className=" text-black block font-bold text-[15px]"
                >
                  تواصل معنا
                </a>
              </li>

              <li className="swinging-animation-btn-3 max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="#vision"
                  className=" text-black block font-bold text-[15px]"
                >
                  رؤيتنا
                </a>
              </li>
            </ul>
          </div>
          <div className="flex lg:hidden">
            <button id="toggleOpen" className="lg:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}>
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* <!-- end header sextion  --> */}
      <main className="container px-3 mx-auto mt-7 bg-white">
        {/* <!-- start hero section  --> */}
        <section
          id="hero"
          className=" w-full bg-white flex flex-col md:flex-row-reverse items-center justify-between"
        >
          <div className="">
            <img
              src={logo}
              className="h-[15rem]"
              alt="المركز المتخصص السعودي للتحكيم"
            ></img>
          </div>
          <div>
            <h1 className="text-xl md:text-4xl font-bold text-center md:text-right mb-4">
              المركز المتخصص السعودي للتحكيم
            </h1>
            <p className="text-lg md:text-2xl font-medium text-gray-600 text-center md:text-right">
              نقدم خدمات التحكيم المتخصصة بكفاءة عالية وفقاً للمعايير الدولية
              والأنظمة السعودية
            </p>
          </div>
        </section>
        {/* <!-- end hero section  --> */}
        {/* <!-- start services section  --> */}
        <section id="services" className="">
          <h2 className="text-4xl font-bold text-center my-10">خدماتنا</h2>
          <div className="grid  grid-cols-1 md:grid-cols-4  gap-4">
            <article className="shadow-md bg-secondary rounded-lg p-4 text-lg font-medium">
              <p>
                {" "}
                يتميز المركز بكونه الأقل تكلفةً على مستوى العالم في مجال خدمات
                التحكيم.
              </p>
            </article>
            <article className="shadow-md bg-secondary rounded-lg p-4 text-lg font-medium">
              <p>
                يسعى المركز إلى إنهاء النزاعات في غضون مُتوسط زمني لا يتجاوز 45
                يومًا من تاريخ تقديم طلب إدارة التحكيم.
              </p>
            </article>
            <article className="shadow-md bg-secondary rounded-lg p-4 text-lg font-medium">
              <p>
                يحرص المركز على اختيار محكمين مُتخصصين ذوي خبرة عالية في
                المجالات ذات الصلة بموضوع النزاع، لضمان الفعالية والاحترافية.
              </p>
            </article>
            <article className="shadow-md bg-secondary rounded-lg p-4 text-lg font-medium">
              <p>
                يتمتع المركز بأعلى معايير السِّرية المهنية في مجال فض المنازعات
                تحكيميًا على المستوى الدولي، بما يضمن حماية كافة التفاصيل
                المرتبطة بالقضايا
              </p>
            </article>
          </div>
        </section>
        {/* <!-- end services section  --> */}
        {/* <!-- start contact section  --> */}
        <section id="contact" className="mt-10">
          <div className="bg-white rounded-lg shadow-lg flex flex-col items-center ">
            <h2 className="text-4xl font-bold text-center mb-10">تواصل معنا</h2>
            <form className="flex flex-col items-center justify-center gap-4 w-full md:w-[500px]"
            onSubmit={(e) => sendEmail(e)}>
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="flex w-full rounded-lg border bg-secondary px-3 py-3 text-lg focus-visible:outline-1 outline-cyan-500"
                  placeholder="الاسم بالكامل"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex w-full rounded-lg border bg-secondary px-3 py-3 text-lg focus-visible:outline-1 outline-cyan-500"
                  placeholder="رقم الجوال"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex w-full rounded-lg border bg-secondary px-3 py-3 text-lg focus-visible:outline-1 outline-cyan-500"
                  placeholder="البريد الإلكتروني"
                  required
                />
              </div>
              <div className="w-full">
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex min-h-[80px] w-full rounded-lg border bg-secondary p-3 text-lg focus-visible:outline-1 outline-cyan-500"
                  placeholder="اكتب رسالتك هنا"
                  required
                  rows="5"
                ></textarea>
              </div>
              <button
                className="flex items-center justify-center px-6 py-3 rounded-lg text-lg font-medium transition-colors focus-visible:outline-1 outline-cyan-500 bg-secondary hover:bg-main mb-4"
                type="submit"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </section>
        {/* <!-- end about section  --> */}
        {/* <!-- start section our vision  --> */}
        <section
          id="vision"
          className="mt-10 bg-secondary rounded-lg px-4 py-10"
        >
          <h2 className="text-4xl font-bold text-center mb-10">رؤيتنا</h2>
          <div>
            <p className="text-lg md:text-2xl font-medium text-center ">
              نسعى لأن نكون المركز الرائد في مجال التحكيم والوساطة في المملكة
              العربية السعودية، من خلال تقديم خدمات عالية الجودة تتوافق مع
              المعايير الدولية والأنظمة المحلية.
            </p>
          </div>
        </section>
        {/* <!-- end section our vision  --> */}
      </main>
      {/* <!-- start footer section  --> */}
      <footer className=" bg-main py-8 mt-10 ">
        <p className="container px-3 mx-auto text-sm md:text-2xl text-center">
          جميع الحقوق محفوظة © <span id="year">{new Date().getFullYear()}</span> المركز المتخصص
          السعودي للتحكيم
        </p>
      </footer>
      {/* <!-- end footer section  --> */}
    </>
  );
}

export default App;
