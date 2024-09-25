import { 
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  c,
  cpp,
  pytorch,
  scikit,
  docker,
  langchain,
  matlab,
  matplotlib,
  mlflow,
  nlp,
  numpy,
  opencv,
  overleaf,
  python,
  tf,
  roboflow,
  yolo,
  wildlife,
  meta,
  shopify,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "projects",
    title: "Projects",
  }
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Research Analyst",
    icon: backend,
  },
  {
    title: "Content Writer",
    icon: creator,
  },
];
const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "Tensorflow",
    icon: tf,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Scikit-learn",
    icon: scikit,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "Matlab",
    icon: matlab,
  },
  {
    name: "MLflow",
    icon: mlflow,
  },
  {
    name: "NLP",
    icon: nlp,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Overleaf",
    icon: overleaf,
  },
  {
    name: "Roboflow",
    icon: roboflow,
  },
  {
    name: "YOLO",
    icon: yolo,
  }
];


const experiences = [
  {
    title: "Machine Learning Engineer",
    company_name: "Dcube Tech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2024 - Ongoing",
    points: [
      "Developed an innovative GAN-based audio separation system, improving signal-to-noise ratio by 40%.",
      "Implemented real-time audio processing on edge devices using PyTorch and TensorFlow.",
      "Integrated audio separation technology into flagship product, expanding market potential by 25%.",
      "Contributed to two pending patents in machine learning for audio enhancement.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "OPTIMAL LAB",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2023 - May 2024",
    points: [
      "Collaborated on Fish Biomass Estimation project using advanced deep learning techniques.",
      "Deployed 3D CNNs, LSTMs, GNNs, SAM, and DepthAnything for underwater image segmentation.",
      "Optimized YOLOv8, GMMs, and Naive Bayes models for fish detection and movement analysis.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "TUKL Research Lab",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2021 - Aug 2022",
    points: [
      "Implemented 20+ SOTA techniques in NLP, Deep Learning, and Reinforcement Learning.",
      "Developed Splerge model for table extraction with 95.9% precision.",
      "Created AlexNet+MLP model for EEG anomaly detection with 89% accuracy.",
      "Automated fish annotation using YOLOv5 and Roboflow for underwater datasets.",
    ],
  },
  {
    title: "Freelance Content Writer",
    company_name: "eXputer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jan 2024",
    points: [
      "Crafted SEO-optimized articles on gaming platforms and industry trends.",
      "Significantly increased website impressions through strategic content creation.",
    ],
  },
  {
    title: "Intern",
    company_name: "World Wildlife Fund",
    icon: wildlife,
    iconBg: "#E6DEDD",
    date: "May 2021 - June 2021",
    points: [
      "Led a team of 10 students in COVID-19 awareness campaign.",
      "Executed social media campaign on COVID-19 risks and water shortage.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fish Biomass Estimation In Underwater Unconstrained Environment",
    description:
      "Developed an advanced system for fish detection and biomass estimation in underwater videos. Implemented and optimized multiple deep learning models, achieving 98% accuracy with YOLOv8. Integrated GMM for enhanced tracking, and utilized state-of-the-art depth estimation techniques for precise biomass calculation. Explored image enhancement methods and contributed to a research paper in marine sciences.",
    tags: [
      {
        name: "Computer Vision",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "YOLOv8",
        color: "pink-text-gradient",
      },
      {
        name: "Depth Estimation",
        color: "orange-text-gradient",
      },
      {
        name: "Marine Science",
        color: "blue-text-gradient",
      },
    ],
    image: carrent, // You may want to replace this with an appropriate image
    source_code_link: "https://github.com/Abubakar17/FYP-reports---", // Replace with actual link if available
  },
  {
    name: "EmoSenseVision",
    description:
      "Engineered a real-time facial sentiment analysis system using a CNN model inspired by VGGnet. Achieved 70% accuracy through advanced regularization techniques including Dropout, L1, and L2. Implemented live inference capabilities for real-time emotion prediction from webcam feeds, demonstrating practical applications in human-computer interaction.",
    tags: [
      {
        name: "Computer Vision",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
      {
        name: "Sentiment Analysis",
        color: "orange-text-gradient",
      },
      {
        name: "Real-time Processing",
        color: "blue-text-gradient",
      },
    ],
    image: jobit, // You may want to replace this with an appropriate image
    source_code_link: "https://github.com/Abubakar17/EmoSenseVision", // Replace with actual link if available
  },
  {
    name: "Audio Steganography Techniques",
    description:
      "Conducted a comprehensive study and implementation of three audio steganography methods: Phase Encoding, Parity Encoding, and Least Significant Bit (LSB) Encoding. Performed a detailed comparative analysis of these techniques, evaluating their data hiding capacity, perceptual transparency, and robustness against cyber attacks, providing valuable insights for practical applications in information security.",
    tags: [
      {
        name: "Audio Processing",
        color: "blue-text-gradient",
      },
      {
        name: "Information Security",
        color: "green-text-gradient",
      },
      {
        name: "Steganography",
        color: "pink-text-gradient",
      },
      {
        name: "Signal Processing",
        color: "orange-text-gradient",
      },
      {
        name: "Cryptography",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide, // You may want to replace this with an appropriate image
    source_code_link: "https://github.com/Abubakar17/Audio-Stag-DSP", // Replace with actual link if available
  },
];
export { services, technologies, experiences, testimonials, projects };
