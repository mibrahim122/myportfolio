import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";   
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const generateCaptcha = () => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let str = '';
  for(let i = 0; i < 6; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
};

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (userCaptcha !== captchaCode) {
      alert("Incorrect Captcha");
      setCaptchaCode(generateCaptcha());
      setUserCaptcha("");
      return;
    }

    setLoading(true); // Show loading state

    try {
      if (!import.meta.env.VITE_APP_EMAILJS_SERVICE_ID) {
        throw new Error("EmailJS environment variables are missing!");
      }

      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      alert("Your message has been sent successfully!");
      
      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      setUserCaptcha("");
      setCaptchaCode(generateCaptcha());
    } catch (error) {
      setLoading(false);
      console.error("EmailJS Error:", error);
      alert("Something went wrong, please try again later.");
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5 relative z-10">
            <div className="flex flex-col justify-center items-center card-border rounded-xl p-5 md:p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="captcha" style={{ color: "var(--text-color)" }}>Security Check</label>
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                    <div className="flex gap-3 items-stretch w-full sm:w-auto">
                      <div className="flex items-center justify-center line-through tracking-widest font-bold py-2 px-4 rounded select-none border" style={{ color: "var(--text-color)", border: "1px solid var(--card-border-color)", backgroundColor: "var(--form-input-bg)" }}>
                        {captchaCode}
                      </div>
                      <button 
                        type="button" 
                        onClick={() => setCaptchaCode(generateCaptcha())}
                        className="text-sm px-4 py-2 rounded transition-colors border"
                        style={{ color: "var(--text-color)", border: "1px solid var(--card-border-color)", backgroundColor: "var(--form-input-bg)" }}
                      >
                        Refresh
                      </button>
                    </div>
                    <input
                      type="text"
                      id="captcha"
                      value={userCaptcha}
                      onChange={(e) => setUserCaptcha(e.target.value)}
                      placeholder="Enter code"
                      required
                      className="w-full sm:flex-1 h-full py-2"
                      style={{ border: "1px solid var(--card-border-color)", backgroundColor: "var(--form-input-bg)", color: "var(--text-color)" }}
                    />
                  </div>
                </div>

                <button type="submit" disabled={loading} className="w-full mt-4">
                  {/* Yahan sirf bg-gradient, text-white aur rounded-lg ka izafa kiya gaya hai colors ke liye */}
                  <div className="cta-button group w-full flex justify-center items-center bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-lg">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="./images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;