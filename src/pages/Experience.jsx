import { Building2, Calendar, MapPin } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const Experience = () => {
  const experiences = [
    {
      company: 'Waveion Technologies',
      location: 'Gurugram',
      role: 'Senior Software Engineer',
      period: 'Jan 2025 – Present',
      description:
        'At Waveion Technologies, I lead the development of CAASTV CMS, a full-scale content management ecosystem powering an Android TV application for IPTV operations.',
      contributions: [
        'Designed and developed the entire CMS from scratch, covering both backend architecture and responsive frontend interfaces.',
        'Implemented real-time integration with the Android TV app to control channel listings, EPG, metadata, watermarking, fingerprint overlays, and scrolling messages.',
        'Architected a modular, scalable backend with clean separation of services, ensuring long-term maintainability and expansion.',
        'Developed the TV Provider database layer to manage channel metadata, inputs, and content mapping seamlessly within Android.',
        'Integrated ExoPlayer with DRM for secure media playback.',
        "Built the complete EPG system: XML parsing, metadata processing, synchronization with Android's TIF framework, and scheduled content flow.",
        'Delivered critical CMS modules including channel, genre, banner, language, and package management with real-time app synchronization.',
        'Implemented role-based access control, secure authentication (JWT, bcrypt), and comprehensive audit logging.',
        'Dockerized the entire platform using Docker Compose for smooth deployment and development workflows.',
      ],
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Android TV',
        'TIF Framework',
        'ExoPlayer',
        'DRM',
        'JWT',
        'Bcrypt',
        'Docker',
        'Docker Compose',
        'REST API',
        'XML Parsing',
        'Real-time Integration',
      ],
    },
    {
      company: 'Three Meadows Software',
      location: 'Bengaluru',
      role: 'Senior Software Engineer',
      period: 'Sep 2021 – Jan 2025',
      description:
        'Worked on digital TV broadcasting solutions, Android middleware integrations, and system-level enhancements across multiple chipsets and markets.',
      contributions: [
        {
          title: 'Digital TV Broadcast Stack (ATSC)',
          items: [
            'Implemented test suites for MediaTek and Realtek chipsets aligned with Eurofins Digital TV standards.',
            'Ported the ATSC broadcast stack onto Android 11 for next-gen TV solutions.',
            'Collaborated with major platform teams to integrate and adapt middleware for US-based markets.',
            'Worked closely on audio/video playback pipelines and tuning for Android-based digital TV devices.',
          ],
        },
        {
          title: 'Telly ATSC 1.0 Solution',
          items: [
            'Integrated CBS 4.0 middleware (Java-based) with Android systems to support TV operations on Android boxes.',
            'Built a custom testing application enabling communication with CBS middleware, supporting PAT/NIT scanning, AV playback, and channel switching.',
            'Developed an Android application that interacts with C-based Iwedia middleware for fundamental TV features.',
          ],
        },
        {
          title: 'Google Ref+',
          items: [
            'Collaborated on the Google TV Android application built over the Android TV Input Framework.',
            'Integrated Iwedia middleware APIs with Android TIF to enable multi-audio track support.',
            'Designed and implemented first-time installation flows, channel editing features, and Zap Banner UI.',
            'Updated underlying middleware logic to match new app-level requirements and customer specifications.',
          ],
        },
      ],
      technologies: [
        'Android',
        'AOSP',
        'Android TV',
        'TIF Framework',
        'Java',
        'C',
        'CBS Middleware',
        'Iwedia Middleware',
        'ATSC',
        'MediaTek',
        'Realtek',
        'Android 11',
        'Digital TV',
        'Broadcast Stack',
        'Middleware Integration',
      ],
    },
  ]

  return (
    <div className="min-h-screen container mx-auto px-4 pt-1 pb-8 md:pb-20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal delay={0}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">My Experience</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 md:mb-12 px-4">
            Professional experience that I have accumulated over several years.
          </p>
        </ScrollReveal>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-8 border-l-2 border-gray-300 dark:border-gray-700">
              {/* Static Timeline Line and Dot */}
              <div className="absolute -left-2.5 md:-left-3 top-0 w-5 h-5 md:w-6 md:h-6 bg-gray-900 dark:bg-gray-100 rounded-full border-2 md:border-4 border-white dark:border-gray-900"></div>
              
              {/* Animated Content */}
              <ScrollReveal delay={0.16 + index * 0.08}>
                <div>
                  <div className="flex items-start gap-2 md:gap-3 mb-2">
                    <Building2 className="w-4 h-4 md:w-5 md:h-5 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg md:text-xl font-bold">{exp.company}</h3>
                      <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-semibold mb-2">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    {exp.period}
                  </div>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Key Contributions */}
                  <div className="mb-4 md:mb-6">
                    <h5 className="text-sm md:text-base font-semibold mb-2 md:mb-3 text-gray-800 dark:text-gray-200">Key Contributions</h5>
                    {Array.isArray(exp.contributions) && exp.contributions[0] && typeof exp.contributions[0] === 'string' ? (
                      <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 ml-2 md:ml-4">
                        {exp.contributions.map((contribution, idx) => (
                          <li key={idx} className="leading-relaxed">{contribution}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-3 md:space-y-4">
                        {exp.contributions.map((contribution, idx) => (
                          <div key={idx} className="ml-2 md:ml-4">
                            <h6 className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 mb-1.5 md:mb-2">{contribution.title}</h6>
                            <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-gray-600 dark:text-gray-400 ml-2 md:ml-4">
                              {contribution.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="leading-relaxed">{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm md:text-base font-semibold mb-2 md:mb-3 text-gray-800 dark:text-gray-200">Technologies</h5>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 md:px-3 py-0.5 md:py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
