export type SkillItem = {
  source: string
  altName: string
  iconName: string
}

export type ProjectItem = {
  source: string
  CardTitle: string
  CardLanguages: string
  Github_SRC: string
}

export type ServiceDetail = {
  title: string
  description: string
  price: string
  fullDetails: string
}

// Icons
import JavaIcon from '../assets/icons/Java.svg'
import CsharpIcon from '../assets/icons/Csharp.svg'
import JavaScriptIcon from '../assets/icons/JavaScript.svg'
import PHPIcon from '../assets/icons/PHP.svg'
import CppIcon from '../assets/icons/C++.svg'
import PythonIcon from '../assets/icons/Python.svg'
import VBNetIcon from '../assets/icons/VBNet.svg'
import HTMLIcon from '../assets/icons/HTML.svg'
import CSSIcon from '../assets/icons/CSS.svg'

import ReactJSIcon from '../assets/icons/react.svg'
import ExpressJSIcon from '../assets/icons/Express_JS.svg'
import LaravelIcon from '../assets/icons/Laravel.svg'

import MySQLIcon from '../assets/icons/MySQL.svg'
import SQLiteIcon from '../assets/icons/SQLite.svg'
import FirebaseIcon from '../assets/icons/Firebase.svg'

import NodeJSIcon from '../assets/icons/Node_JS.svg'

import GithubIcon from '../assets/icons/Github.svg'
import UnityIcon from '../assets/icons/Unity.svg'
import VSCIcon from '../assets/icons/Visual_Studio_Code.svg'
import VSIcon from '../assets/icons/Visual_Studio.svg'
import PyCharmIcon from '../assets/icons/PyCharm.svg'
import AndroidStudioIcon from '../assets/icons/Android_Studio.svg'
import NetBeansIcon from '../assets/icons/NetBeans.svg'
import XamppIcon from '../assets/icons/Xampp.svg'
import Microsoft365Icon from '../assets/icons/Microsoft_365.svg'
import GoogleSuiteIcon from '../assets/icons/Google_GSuite.svg'
import AfterEffectIcon from '../assets/icons/After_Effect.svg'
import PremiereProIcon from '../assets/icons/Premiere_Pro.svg'
import BlenderIcon from '../assets/icons/Blender.svg'
import BlockbenchIcon from '../assets/icons/Blockbench.svg'
import FigmaIcon from '../assets/icons/Figma.svg'
import CSPIcon from '../assets/icons/Clip_Studio_Paint.svg'
import PhotoshopIcon from '../assets/icons/Photoshop.svg'

// Thumbnail image for Projects
import YoutubeConverter from '../assets/images/Youtube_Converter.png'
import RIDEOUT_XENOGENESIS from '../assets/images/RIDEOUT-XENOGENESIS.png'

export const LanguagesList: SkillItem[] = [
  { source: JavaIcon, altName: 'Java-icon', iconName: 'Java' },
  { source: CsharpIcon, altName: 'C#-icon', iconName: 'C#' },
  { source: JavaScriptIcon, altName: 'JavaScript-icon', iconName: 'JavaScript' },
  { source: PHPIcon, altName: 'PHP-icon', iconName: 'PHP' },
  { source: CppIcon, altName: 'C++-icon', iconName: 'C++' },
  { source: PythonIcon, altName: 'Python-icon', iconName: 'Python' },
  { source: VBNetIcon, altName: 'VB.net-icon', iconName: 'Visual Basic .Net' },
  { source: HTMLIcon, altName: 'HTML-icon', iconName: 'HTML' },
  { source: CSSIcon, altName: 'CSS-icon', iconName: 'CSS' },
]

export const FrameworksList: SkillItem[] = [
  { source: ReactJSIcon, altName: 'React-JS-icon', iconName: 'React JS' },
  { source: ExpressJSIcon, altName: 'Express-JS-icon', iconName: 'Express JS' },
  { source: LaravelIcon, altName: 'Laravel-icon', iconName: 'Laravel' },
]

export const DatabasesList: SkillItem[] = [
  { source: MySQLIcon, altName: 'MySQL-icon', iconName: 'MySQL' },
  { source: SQLiteIcon, altName: 'SQLite-icon', iconName: 'SQLite' },
  { source: FirebaseIcon, altName: 'Firebase-icon', iconName: 'Firebase' },
]

export const RuntimeList: SkillItem[] = [{ source: NodeJSIcon, altName: 'Node-JS-icon', iconName: 'Node JS' }]

export const PlatformsList: SkillItem[] = [
  { source: GithubIcon, altName: 'Github-icon', iconName: 'Github' },
  { source: FirebaseIcon, altName: 'Firebase-icon', iconName: 'Firebase' },
  { source: UnityIcon, altName: 'Unity-icon', iconName: 'Unity' },
  { source: VSCIcon, altName: 'Visual-Studio-Code-icon', iconName: 'Visual Studio Code' },
  { source: VSIcon, altName: 'Visual-Studio-icon', iconName: 'Visual Studio' },
  { source: PyCharmIcon, altName: 'PyCharm-icon', iconName: 'PyCharm' },
  { source: AndroidStudioIcon, altName: 'Android-Studio-icon', iconName: 'Android Studio' },
  { source: NetBeansIcon, altName: 'Netbeans-icon', iconName: 'NetBeans' },
  { source: XamppIcon, altName: 'Xampp-icon', iconName: 'Xampp' },
  { source: Microsoft365Icon, altName: 'Microsoft-365-icon', iconName: 'Microsoft 365' },
  { source: GoogleSuiteIcon, altName: 'Google-Suite-icon', iconName: 'Google Suite' },
  { source: AfterEffectIcon, altName: 'After-Effect-icon', iconName: 'After Effect' },
  { source: PremiereProIcon, altName: 'Premiere-Pro-icon', iconName: 'Premiere Pro' },
  { source: BlenderIcon, altName: 'Blender-icon', iconName: 'Blender' },
  { source: BlockbenchIcon, altName: 'Blockbench-icon', iconName: 'Blockbench' },
  { source: FigmaIcon, altName: 'Figma-icon', iconName: 'Figma' },
  { source: CSPIcon, altName: 'Clip-Studio-Paint-icon', iconName: 'Clip Studio Paint' },
  { source: PhotoshopIcon, altName: 'Photoshop-icon', iconName: 'Photoshop' },
]

export const ProjectsLists: ProjectItem[] = [
  {
    source: YoutubeConverter,
    CardTitle: 'YouTube Converter',
    CardLanguages: 'HTML, CSS, JS, Node.js, FFmpeg, Firebase, Youtube API',
    Github_SRC: 'https://github.com/Khur0o/Youtube_Converter',
  },
  {
    source: RIDEOUT_XENOGENESIS,
    CardTitle: 'RIDEOUT-XENOGENESIS',
    CardLanguages: 'Unity, C#, Path-finding',
    Github_SRC: 'https://github.com/Khur0o/RIDEOUT-XENOGENESIS',
  },
  {
    source: RIDEOUT_XENOGENESIS,
    CardTitle: 'RIDEOUT-XENOGENESIS',
    CardLanguages: 'Unity, C#, Path-finding',
    Github_SRC: 'https://github.com/Khur0o/RIDEOUT-XENOGENESIS',
  },
  {
    source: RIDEOUT_XENOGENESIS,
    CardTitle: 'RIDEOUT-XENOGENESIS',
    CardLanguages: 'Unity, C#, Path-finding',
    Github_SRC: 'https://github.com/Khur0o/RIDEOUT-XENOGENESIS',
  },
]

export const serviceDetails: ServiceDetail[] = [
  {
    title: 'Web-Based Development',
    description: 'I build responsive websites and fully functional web applications tailored to your needs.',
    price: '₱2,000 - ₱20,000+',
    fullDetails: `This service includes the design and development of:

<Static Websites> — Ideal for portfolios, landing pages, or company profiles. Built using HTML, CSS (Standard, Tailwind, Bootstrap), JavaScript, and React.

- <₱2,000> Each pages. Comes mobile-responsive and optimized for performance.

<Web Applications> — Dynamic, data-driven systems with user authentication, dashboards, and admin panels. Technologies may include React, Firebase, Node.js, or PHP/MySQL depending on your needs.

- <₱2,000 - ₱4,000> Simple system
- <₱6,000 - ₱20,000+> Advanced system

Additional Options:
- Source code delivery with documentation (upon request).
- Deployment assistance (₱500 additional fee).

All projects come with mobile responsiveness and post-launch bug fix support.`,
  },
  {
    title: 'Mobile App Development',
    description: 'Android-based app development using Java or Firebase.',
    price: '₱15,000 - ₱30,000+',
    fullDetails: 'Includes UI/UX design, backend services, authentication, and real-time data handling.',
  },
  {
    title: 'Software App Development',
    description: 'Custom-built desktop or cross-platform applications tailored to your workflow.',
    price: '₱20,000 - ₱60,000+',
    fullDetails: `Includes system analysis, UI/UX design, development, testing, and deployment.
Technologies may include Java, C#, or Python depending on the project's needs.
Deliverables include the installer, user guide, and post-launch support for bug fixes and minor updates.
Source code can be provided upon request with an additional fee, along with documentation and build instructions.`,
  },
  {
    title: 'Game Development',
    description: '2D/3D games built with Unity and C#.',
    price: '₱10,000 - ₱50,000+',
    fullDetails: 'Can develop platformers, adventure games, or shooters with animations and basic mechanics.',
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing for vlogs, promos, and events.',
    price: '₱2,000 - ₱8,000 per project',
    fullDetails: 'Services include trimming, audio syncing, transitions, effects, and export in full HD.',
  },
  {
    title: 'Graphic Design and Illustration',
    description: 'Design logos, posters, banners, social media content, and hand-drawn illustrations.',
    price: '₱500 - ₱3,000 per design',
    fullDetails: `Delivered in PNG, JPEG, or PDF formats with 2–3 revisions included.
Also offers custom illustrations created in Clip Studio Paint, with the option to receive the original .clip (CSP) raw file upon request.`,
  },
  {
    title: '3D Design',
    description: 'Create low-poly 3D models and visualizations for games, products, or presentations.',
    price: '₱500 - ₱20,000+',
    fullDetails: `Includes modeling, texturing, lighting, and rendering using tools like Blender.
Can provide assets for games, architecture, or promotional materials. Turnaround time depends on complexity.`,
  },
]