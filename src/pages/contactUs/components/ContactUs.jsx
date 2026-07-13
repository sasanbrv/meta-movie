import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import CONTACT_US_SCHEMA from "../data/contactUsSchema";
import FAQ from "../../Home/components/FAQ";
function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },

    validationSchema: toFormikValidationSchema(CONTACT_US_SCHEMA),

    onSubmit: (values, { resetForm }) => {
      console.log(values);

      // API request here

      resetForm();
    },
  });

  return (
    <section className="relative min-h-screen bg-black px-6 py-20 text-white">
      {/* Background Blur */}

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold">
            Contact <span className="text-primary">Meta Movie</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
            We're here to help you with any problems you may be have while using
            Meta movie.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-tl-3xl rounded-br-3xl border-2 border-primary bg-white/5 p-10 backdrop-blur-xl">
            <h3 className="mb-8 text-3xl font-semibold">Get In Touch</h3>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-primary/20 p-4">
                  <FaEnvelope className="text-xl text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-white/70">support@metamovie.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-primary/20 p-4">
                  <FaPhoneAlt className="text-xl text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-white/70">+98 938 589 1325</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-primary/20 p-4">
                  <FaMapMarkerAlt className="text-xl text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-white/70">Iran, Lorestan, Khorramabad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={formik.handleSubmit}
            className="rounded-tr-3xl rounded-bl-3xl border-2 border-primary bg-white/5 p-10 backdrop-blur-xl"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* First Name */}
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full rounded-xl border-2 border-primary bg-white/10 px-5 py-4 outline-none"
                />

                <p className="mt-2 min-h-5 text-sm text-red-500">
                  {formik.touched.firstName && formik.errors.firstName}
                </p>
              </div>

              {/* Last Name */}
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full rounded-xl border-2 border-primary bg-white/10 px-5 py-4 outline-none"
                />

                <p className="mt-2 min-h-5 text-sm text-red-500">
                  {formik.touched.lastName && formik.errors.lastName}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="mt-6">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-xl border-2 border-primary bg-white/10 px-5 py-4 outline-none"
              />

              <p className="mt-2 min-h-5 text-sm text-red-500">
                {formik.touched.email && formik.errors.email}
              </p>
            </div>

            {/* Subject */}
            <div className="mt-6">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-xl border-2 border-primary bg-white/10 px-5 py-4 outline-none"
              />

              <p className="mt-2 min-h-5 text-sm text-red-500">
                {formik.touched.subject && formik.errors.subject}
              </p>
            </div>

            {/* Message */}
            <div className="mt-6">
              <textarea
                rows={6}
                name="message"
                placeholder="Write your message..."
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full resize-none rounded-xl border-2 border-primary bg-white/10 px-5 py-4 outline-none"
              />

              <p className="mt-2 min-h-5 text-sm text-red-500">
                {formik.touched.message && formik.errors.message}
              </p>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-tr-3xl rounded-bl-3xl bg-primary py-4 text-lg font-semibold transition hover:scale-[1.02] hover:bg-[#8b2cff] active:scale-100"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <FAQ />
    </section>
  );
}

export default Contact;
