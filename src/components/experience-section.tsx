import { Award, BriefcaseBusiness } from "lucide-react";
import { Timeline } from "./timeline";
import { Card, CardContent } from "./ui/card";
import Certificate1 from "../assets/certificate-1.webp";
import Certificate2 from "../assets/certificate-2.webp";
import Certificate3 from "../assets/certificate-3.webp";
import Certificate4 from "../assets/certificate-4.webp";
import Certificate5 from "../assets/certificate-5.webp";
import Certificate6 from "../assets/certificate-6.webp";
import { Marquee } from "./ui/marquee";

export default function ExperienceSection() {
  const certificates = [
    {
      src: Certificate1,
      description: "IDCamp Indosat 2026 Frontend Certificate",
      size: "h-40 w-60 md:h-100 md:w-150 overflow-visible",
    },
    {
      src: Certificate2,
      description: "Dicoding Intermediate Certificate",
      size: "h-40 w-60 md:h-100 md:w-150 overflow-visible",
    },
    {
      src: Certificate4,
      description: "Cisco Academy Networking Cybersecurity Certificate",
      size: "h-40 w-50 md:h-100 md:w-130 overflow-visible",
    },
    {
      src: Certificate5,
      description: "Codepolitan ExpressJS Backend Certificate",
      size: "h-40 w-50 md:h-100 md:w-130 overflow-visible",
    },
    {
      src: Certificate6,
      description: "Dicoding AWS Cloud Architecture",
      size: "h-40 w-50 md:h-100 md:w-150 overflow-visible",
    },
    {
      src: Certificate3,
      description: "Alibaba Cloud Generative AI Certificate",
      size: "h-40 w-60 md:h-100 md:w-150 overflow-visible",
    },
  ];

  const data = [
    {
      title: "March 2025 - Present",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-800">
            <BriefcaseBusiness className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Freelancer</h3>
          </div>
          <div className="flex items-center gap-2 text-gray-800 space-y-5">
            <div>
              <h3 className="text-lg font-semibold">
                <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                  <span className="font-medium">ARABINESIA Company</span>
                  <span>•</span>
                  <span>Remote</span>
                </div>
              </h3>
            </div>
          </div>

          <div className="px-2">
            <div className="space-y-3 text-sm text-gray-600">
              <p className="leading-relaxed">
                Full-stack development role focusing on building scalable
                learning platform web applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Designed and developed a complete web-based learning
                    platform from scratch to production release.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Built authentication, dashboard, course modules, and admin
                    panel using Next.js and Postgresql as a backend.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Collaborated with UI/UX designer to refine user journey and
                    improve accessibility across devices.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Managed the full development cycle: architecture, coding,
                    deployment, and iteration based on feedback.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2025 - Present",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-800">
            <BriefcaseBusiness className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Associate Engineer</h3>
          </div>
          <h3 className="text-lg font-semibold">
            <span className="flex flex-wrap items-center gap-2 text-gray-600 text-sm wrap-break-words">
              <span className="font-medium">
                PT Digitech Swakarya Indonesia
              </span>
              <span>•</span>
              <span>On site</span>
            </span>
          </h3>

          <div className="px-2">
            <div className="space-y-3 text-sm text-gray-600">
              <p className="leading-relaxed">
                Worked in a call center environment with a focus on telephony
                integration and software solutions to optimize customer support
                workflows.
              </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Integrated PBX systems with internal software to streamline
                    call routing and reduce wait times.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Managed SIP trunks and VoIP configurations to ensure stable
                    and high-quality voice communication.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Developed monitoring scripts and dashboards to track call
                    volume, uptime, and system performance.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Collaborated with software engineers to integrate CRM tools,
                    ticketing systems, and analytics platforms for seamless
                    workflow.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▹</span>
                  <span>
                    Assisted in troubleshooting network issues, call drops, and
                    connectivity problems to maintain consistent service
                    quality.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Awards and Honors",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-800">
            <Award className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold">
              Achievements and Certification
            </h3>
          </div>

          <div className="px-2 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="shrink-0 w-2 h-2 rounded-full bg-blue-600" />
                <a
                  href="https://drive.google.com/file/d/1geWqNACtRISPsYEGEq9_aOyKyuPCIg1d/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h4 className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200 inline-flex items-center gap-1">
                    Dicoding Academy
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h4>
                </a>
              </div>
              <div className="pl-5">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Has successfully completed coding training on the Intermediate
                  level Front-End Web Developer learning path of the IDCamp 2024
                  program.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Front-End
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Web Development
                  </span>
                </div>
              </div>
            </div>

            {/* Codepolitan Backend */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="shrink-0 w-2 h-2 rounded-full bg-blue-600" />
                <h4 className="text-gray-800 font-medium">Codepolitan</h4>
              </div>
              <div className="pl-5">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Completed the devhandal program organized by Alibaba Cloud x
                  Codepolitan, and received a scholarship + certificate for
                  backend developer.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Backend Developer
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    Web Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="milestone" className="w-full bg-white">
      {/* Milestone Timeline */}
      <Timeline data={data} />

      {/* Awards and Certification */}
      <div className="flex justify-center items-center gap-2 md:my-10 ">
        <Marquee pauseOnHover className="[--duration:150s]">
          {certificates.map((cert, index) => (
            <Card key={index}>
              <CardContent>
                <img
                  src={cert.src}
                  alt={cert.description}
                  className={cert.size}
                />
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
