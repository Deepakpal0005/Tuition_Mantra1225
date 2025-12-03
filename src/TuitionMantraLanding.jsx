import React, { useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  Users,
  Award,
  Clock,
  Globe,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
} from "lucide-react";
import logo from "/TMLogo.jpg";
const TuitionMantraLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const courses = [
    {
      id: 1,
      grade: "Grades 1-5",
      title: "Foundation Learning",
      subjects: ["Mathematics", "English", "Science"],
      price: "$70-120/mo",
      curriculum: ["British", "CBSE", "American"],
    },
    {
      id: 2,
      grade: "Grades 6-8",
      title: "Concept Building",
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English"],
      price: "$100-180/mo",
      curriculum: ["Cambridge", "IGCSE", "IB"],
    },
    {
      id: 3,
      grade: "Grades 9-10",
      title: "Board Preparation",
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "Business",
      ],
      price: "$150-250/mo",
      curriculum: ["IGCSE", "CBSE", "Cambridge"],
    },
    {
      id: 4,
      grade: "Grades 11-12",
      title: "IB / A-Level / SAT",
      subjects: [
        "Advanced Math",
        "Physics",
        "Chemistry",
        "Biology",
        "Economics",
        "Computer Science",
      ],
      price: "$150-300/mo",
      curriculum: ["IB", "A-Level", "AP"],
    },
    {
      id: 5,
      grade: "All Grades",
      title: "Language Learning",
      subjects: ["Arabic", "French", "German"],
      price: "$80-150/mo",
      curriculum: ["All Curriculums"],
    },
    {
      id: 6,
      grade: "Grades 9-12",
      title: "Computer Science",
      subjects: ["Programming", "Web Development", "CS Fundamentals"],
      price: "$120-200/mo",
      curriculum: ["Cambridge", "IB", "CBSE"],
    },
  ];

  const testimonials = [
    {
      name: "Fatima Al-Mansouri",
      location: "Dubai, UAE",
      rating: 5,
      text: "Tuition Mantra helped my daughter excel in IGCSE Mathematics. The teacher was patient, professional, and understood the curriculum perfectly. Highly recommended!",
    },
    {
      name: "Rajesh Sharma",
      location: "Riyadh, Saudi Arabia",
      rating: 5,
      text: "Excellent service! Our son improved from a C to an A in Physics within 3 months. The flexible timing suited our family schedule perfectly.",
    },
    {
      name: "Sarah Ahmed",
      location: "Doha, Qatar",
      rating: 5,
      text: "Professional teachers who truly care about student progress. The regular progress reports give us confidence in the investment we are making.",
    },
    {
      name: "Mohammed Al-Khatib",
      location: "Kuwait City, Kuwait",
      rating: 5,
      text: "Our twins are taking IB Math and Chemistry tutoring. The quality of teaching is exceptional and worth every dirham we spend.",
    },
  ];

  const countries = [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Oman",
  ];
  const curriculums = ["British", "Cambridge/IGCSE", "IB", "American", "CBSE"];

  const filteredCourses =
    activeFilter === "all"
      ? courses
      : courses.filter(
          (course) =>
            course.grade.includes(activeFilter) ||
            course.title.toLowerCase().includes(activeFilter.toLowerCase())
        );

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.grade ||
      !formData.subject
    ) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 3000);
      return;
    }

    setFormStatus("sending");

    const whatsappMessage = `New Inquiry from ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AGrade: ${formData.grade}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;

    try {
      setTimeout(() => {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          grade: "",
          subject: "",
          message: "",
        });

        window.open(
          `https://wa.me/919599452301?text=${whatsappMessage}`,
          "_blank"
        );

        setTimeout(() => setFormStatus(""), 3000);
      }, 1000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 3000);
    }
  };

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-10 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* <BookOpen className="h-8 w-8 text-blue-600" /> */}
              <img src={logo} alt="logo" className="h-16 w-20 " />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Tuition Mantra
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                About
              </a>
              <a
                href="#courses"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Courses
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Contact
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#courses"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Online Tuition for Gulf Students
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert tutoring for UAE, Saudi Arabia, Qatar, Kuwait, Bahrain &
              Oman
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {countries.map((country) => (
                <span
                  key={country}
                  className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                >
                  {country}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
              >
                Get Started
              </a>
              <a
                href="https://wa.me/919599452301"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Gulf Families Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-blue-50 rounded-lg">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Gulf-Focused Expertise</h3>
              <p className="text-gray-700">
                We understand the academic landscape, school culture, and parent
                expectations across all Gulf countries.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Top Curriculums</h3>
              <p className="text-gray-700">
                Specialized teachers for British, Cambridge/IGCSE, IB, American,
                and CBSE curriculums.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Flexible Timings</h3>
              <p className="text-gray-700">
                Evening sessions, weekend classes (Fri-Sat-Sun), and late
                evening availability for Gulf time zones.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Professional Teachers</h3>
              <p className="text-gray-700">
                Clear English accent, strong subject command, respectful
                approach, and consistent progress reporting.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Exam Excellence</h3>
              <p className="text-gray-700">
                Special focus on board prep, IGCSE, IB, A-Level, SAT, and AP
                exam scoring & grade improvement.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <Check className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-700">
                Track record of helping students achieve A grades and
                significant academic improvement.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Curriculums We Specialize In
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {curriculums.map((curr) => (
                <div
                  key={curr}
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center font-semibold"
                >
                  {curr}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Courses
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeFilter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setActiveFilter("1-5")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeFilter === "1-5"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              Grades 1-5
            </button>
            <button
              onClick={() => setActiveFilter("6-8")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeFilter === "6-8"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              Grades 6-8
            </button>
            <button
              onClick={() => setActiveFilter("9-12")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeFilter === "9-12"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              Grades 9-12
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-blue-100">{course.grade}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      Subjects:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      Curriculums:
                    </p>
                    <p className="text-sm text-gray-700">
                      {course.curriculum.join(", ")}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-2xl font-bold text-blue-600">
                      {course.price}
                    </span>
                    <a
                      href="#contact"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                    >
                      Enroll
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What Gulf Parents Say
          </h2>

          <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 md:p-12">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>
              <p className="text-lg md:text-xl text-gray-800 italic mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="font-bold text-gray-900">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-gray-600">
                {testimonials[currentTestimonial].location}
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-blue-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-blue-600" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition ${
                    index === currentTestimonial
                      ? "bg-blue-600 w-8"
                      : "bg-blue-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="https://wa.me/919599452301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 bg-green-50 rounded-lg hover:bg-green-100 transition"
                >
                  <Phone className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      WhatsApp (Fast Response)
                    </p>
                    <p className="text-gray-700">+91 9599452301</p>
                  </div>
                </a>

                <a
                  href="mailto:tuitionmantra10@gmail.com"
                  className="flex items-start p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                >
                  <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">tuitionmantra10@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 bg-blue-600 text-white rounded-lg">
                <h4 className="font-bold text-lg mb-3">
                  Why Gulf Parents Trust Us
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Deep knowledge in Math & Sciences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Strong grammar foundations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Exam coaching orientation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cost-effective premium education</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="grade"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Grade *
                  </label>
                  <select
                    id="grade"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.grade}
                    onChange={(e) =>
                      setFormData({ ...formData, grade: e.target.value })
                    }
                  >
                    <option value="">Select Grade</option>
                    <option value="1-5">Grades 1-5</option>
                    <option value="6-8">Grades 6-8</option>
                    <option value="9-10">Grades 9-10</option>
                    <option value="11-12">Grades 11-12</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Subject of Interest *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="e.g., Mathematics, Physics"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={formStatus === "sending"}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {formStatus === "sending" ? "Sending..." : "Send Inquiry"}
                </button>

                {formStatus === "success" && (
                  <p className="mt-4 text-green-600 text-center font-semibold">
                    Message sent! Redirecting to WhatsApp...
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="mt-4 text-red-600 text-center font-semibold">
                    Error sending message. Please try WhatsApp directly.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                {/* <BookOpen className="h-8 w-8 text-blue-400" /> */}
                <img src={logo} alt="logo" className="h-16 w-20 rounded-lg " />

                <span className="ml-2 text-xl font-bold">Tuition Mantra</span>
              </div>
              <p className="text-gray-400">
                Premium online tuition trusted by Gulf families for academic
                excellence.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#home"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-gray-400 hover:text-white transition"
                >
                  About
                </a>
                <a
                  href="#courses"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Courses
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Serving Gulf Countries</h4>
              <div className="grid grid-cols-2 gap-2 text-gray-400">
                {countries.map((country) => (
                  <p key={country}>{country}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Tuition Mantra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TuitionMantraLanding;
