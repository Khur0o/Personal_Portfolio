export type SkillItem = {
  source: string
  altName: string
  iconName: string
  className?: string
}

export type ProjectItem = {
  source: string
  CardTitle: string
  CardDescription: string
  fullDescription?: string
  technologies: string[]
  Github_SRC: string
  Type: string
  Status: string
  category: 'WEB' | 'GAME' | 'MOBILE' | 'SOFTWARE' | 'ART'
  slug: string
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
import TypescriptIcon from '../assets/icons/Typescript.svg'
import PHPIcon from '../assets/icons/PHP.svg'
import CppIcon from '../assets/icons/C++.svg'
import PythonIcon from '../assets/icons/Python.svg'
import VBNetIcon from '../assets/icons/VBNet.svg'
import HTMLIcon from '../assets/icons/HTML.svg'
import CSSIcon from '../assets/icons/CSS.svg'
import TailwindCSSIcon from '../assets/icons/TailwindCSS.svg'

import ReactJSIcon from '../assets/icons/React.svg'
import ExpressJSIcon from '../assets/icons/Express_JS.svg'
import LaravelIcon from '../assets/icons/Laravel.svg'
import SpringIcon from '../assets/icons/Spring.svg'
import SpringBootIcon from '../assets/icons/Spring_Boot.svg'

import MySQLIcon from '../assets/icons/MySQL.svg'
import SQLiteIcon from '../assets/icons/SQLite.svg'
import FirebaseIcon from '../assets/icons/Firebase.svg'
import MicrosoftSQLServerIcon from '../assets/icons/Microsoft_SQL_Server.svg'
import MongoDBIcon from '../assets/icons/MongoDB.svg'
import PostgreSQLIcon from '../assets/icons/PostgreSQL.svg'

import NodeJSIcon from '../assets/icons/Node_JS.svg'

import GitIcon from '../assets/icons/Git.svg'
import GithubIcon from '../assets/icons/Github.svg'
import GitlabIcon from '../assets/icons/Gitlab.svg'
import DockerIcon from '../assets/icons/Docker.svg'
import UnityIcon from '../assets/icons/Unity.svg'
import VSCIcon from '../assets/icons/Visual_Studio_Code.svg'
import VSIcon from '../assets/icons/Visual_Studio.svg'
import IntellijIcon from '../assets/icons/Intellij_Idea.svg'
import PyCharmIcon from '../assets/icons/PyCharm.svg'
import AndroidStudioIcon from '../assets/icons/Android_Studio.svg'
import NetBeansIcon from '../assets/icons/NetBeans.svg'
import EclipseIcon from '../assets/icons/Eclipse.svg'
import PHPmyAdminIcon from '../assets/icons/PHPmyAdmin.svg'
import XamppIcon from '../assets/icons/Xampp.svg'
import PostmanIcon from '../assets/icons/Postman.svg'
import ClaudeIcon from '../assets/icons/Claude.svg'
import GithubCopilotIcon from '../assets/icons/Github_Copilot.svg'
import OpenAIIcon from '../assets/icons/OpenAI.svg'
import Microsoft365Icon from '../assets/icons/Microsoft_365.svg'
import GoogleWorkspaceIcon from '../assets/icons/Google-Workspace.svg'
import AfterEffectIcon from '../assets/icons/After_Effect.svg'
import PremiereProIcon from '../assets/icons/Premiere_Pro.svg'
import BlenderIcon from '../assets/icons/Blender.svg'
import BlockbenchIcon from '../assets/icons/Blockbench.svg'
import FigmaIcon from '../assets/icons/Figma.svg'
import CSPIcon from '../assets/icons/Clip_Studio_Paint.svg'
import PhotoshopIcon from '../assets/icons/Photoshop.svg'
import ItchdotioIcon from '../assets/icons/Itchdotio.svg'
import SteamIcon from '../assets/icons/Steam.svg'
import SupabaseIcon from '../assets/icons/Supabase.svg'
import VercelIcon from '../assets/icons/Vercel.svg'

// Thumbnail image for Projects
import YoutubeConverter from '../assets/images/Youtube_Converter.png'
import RIDEOUT_XENOGENESIS from '../assets/images/RIDEOUT-XENOGENESIS.png'

export const LanguagesList: SkillItem[] = [
  { source: JavaIcon, altName: 'Java-icon', iconName: 'Java' },
  { source: CsharpIcon, altName: 'C#-icon', iconName: 'C#' },
  { source: JavaScriptIcon, altName: 'JavaScript-icon', iconName: 'JavaScript' },
  { source: TypescriptIcon, altName: 'TypeScript-icon', iconName: 'TypeScript' },
  { source: PHPIcon, altName: 'PHP-icon', iconName: 'PHP' },
  { source: CppIcon, altName: 'C++-icon', iconName: 'C++' },
  { source: PythonIcon, altName: 'Python-icon', iconName: 'Python' },
  { source: VBNetIcon, altName: 'VB.net-icon', iconName: 'Visual Basic .Net', className: 'skill-icon-plain-black' },
  { source: HTMLIcon, altName: 'HTML-icon', iconName: 'HTML' },
  { source: CSSIcon, altName: 'CSS-icon', iconName: 'CSS' },
  { source: TailwindCSSIcon, altName: 'Tailwind-CSS-icon', iconName: 'Tailwind CSS' },
]

export const FrameworksList: SkillItem[] = [
  { source: ReactJSIcon, altName: 'React-JS-icon', iconName: 'React' },
  { source: ExpressJSIcon, altName: 'Express-JS-icon', iconName: 'Express JS', className: 'skill-icon-plain-white' },
  { source: LaravelIcon, altName: 'Laravel-icon', iconName: 'Laravel' },
  { source: SpringIcon, altName: 'Spring-icon', iconName: 'Spring' },
  { source: SpringBootIcon, altName: 'Spring-Boot-icon', iconName: 'Spring Boot' },
]

export const DatabasesList: SkillItem[] = [
  { source: MySQLIcon, altName: 'MySQL-icon', iconName: 'MySQL' },
  { source: SQLiteIcon, altName: 'SQLite-icon', iconName: 'SQLite' },
  { source: FirebaseIcon, altName: 'Firebase-icon', iconName: 'Firebase' },
  { source: MicrosoftSQLServerIcon, altName: 'Microsoft-SQL-Server-icon', iconName: 'Microsoft SQL Server' },
  { source: MongoDBIcon, altName: 'MongoDB-icon', iconName: 'MongoDB' },
  { source: PostgreSQLIcon, altName: 'PostgreSQL-icon', iconName: 'PostgreSQL' },
]

export const RuntimeList: SkillItem[] = [
  { source: NodeJSIcon, altName: 'Node-JS-icon', iconName: 'Node JS' }
]

export const PlatformsList: SkillItem[] = [
  { source: GitIcon, altName: 'Git-icon', iconName: 'Git' },
  { source: GithubIcon, altName: 'Github-icon', iconName: 'Github', className: 'skill-icon-plain-white' },
  { source: GitlabIcon, altName: 'Gitlab-icon', iconName: 'Gitlab' },
  { source: DockerIcon, altName: 'Docker-icon', iconName: 'Docker' },
  { source: FirebaseIcon, altName: 'Firebase-icon', iconName: 'Firebase' },
  { source: UnityIcon, altName: 'Unity-icon', iconName: 'Unity', className: 'skill-icon-plain-white' },
  { source: VSCIcon, altName: 'Visual-Studio-Code-icon', iconName: 'Visual Studio Code' },
  { source: VSIcon, altName: 'Visual-Studio-icon', iconName: 'Visual Studio' },
  { source: IntellijIcon, altName: 'Intellij-IDEA-icon', iconName: 'IntelliJ IDEA' },
  { source: PyCharmIcon, altName: 'PyCharm-icon', iconName: 'PyCharm' },
  { source: AndroidStudioIcon, altName: 'Android-Studio-icon', iconName: 'Android Studio' },
  { source: NetBeansIcon, altName: 'Netbeans-icon', iconName: 'NetBeans' },
  { source: EclipseIcon, altName: 'Eclipse-icon', iconName: 'Eclipse' },
  { source: XamppIcon, altName: 'Xampp-icon', iconName: 'Xampp' },
  { source: PostmanIcon, altName: 'Postman-icon', iconName: 'Postman' },
  { source: PHPmyAdminIcon, altName: 'PHPmyAdmin-icon', iconName: 'PHP my Admin' },
  { source: ClaudeIcon, altName: 'Claude-icon', iconName: 'Claude AI' },
  { source: GithubCopilotIcon, altName: 'Github-Copilot-icon', iconName: 'Github Copilot', className: 'skill-icon-plain-white' },
  { source: OpenAIIcon, altName: 'OpenAI-icon', iconName: 'OpenAI', className: 'skill-icon-plain-white' },
  { source: Microsoft365Icon, altName: 'Microsoft-365-icon', iconName: 'Microsoft 365' },
  { source: GoogleWorkspaceIcon, altName: 'Google-Workspace-icon', iconName: 'Google Workspace' },
  { source: AfterEffectIcon, altName: 'After-Effect-icon', iconName: 'After Effect' },
  { source: PremiereProIcon, altName: 'Premiere-Pro-icon', iconName: 'Premiere Pro' },
  { source: BlenderIcon, altName: 'Blender-icon', iconName: 'Blender' },
  { source: BlockbenchIcon, altName: 'Blockbench-icon', iconName: 'Blockbench' },
  { source: FigmaIcon, altName: 'Figma-icon', iconName: 'Figma' },
  { source: CSPIcon, altName: 'Clip-Studio-Paint-icon', iconName: 'Clip Studio Paint', className: 'skill-icon-plain-black' },
  { source: PhotoshopIcon, altName: 'Photoshop-icon', iconName: 'Photoshop' },
  { source: SupabaseIcon, altName: 'Supabase-icon', iconName: 'Supabase' },
  { source: VercelIcon, altName: 'Vercel-icon', iconName: 'Vercel', className: 'skill-icon-plain-white' },
  { source: ItchdotioIcon, altName: 'Itchdotio-icon', iconName: 'Itch.io' },
  { source: SteamIcon, altName: 'Steam-icon', iconName: 'Steam' },


]

export const ProjectsLists: ProjectItem[] = [
  {
    source: YoutubeConverter,
    CardTitle: 'YouTube Converter',
    CardDescription:
      'A web-based media conversion tool built around FFmpeg, Node.js, and the YouTube API.',
    fullDescription:
      'YouTube Converter is a comprehensive web-based media conversion platform that allows users to download, convert, and process media from YouTube. Built with a modern tech stack including Node.js backend, Firebase for storage and authentication, and integration with the YouTube API. The application supports multiple formats, quality options, and batch processing capabilities.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'FFmpeg',
      'Firebase',
      'YouTube API',
    ],
    Github_SRC: 'https://github.com/Khur0o/Youtube_Converter',
    Type: 'Web',
    Status: 'Completed',
    category: 'WEB',
    slug: 'youtube-converter',
  },

  {
    source: RIDEOUT_XENOGENESIS,
    CardTitle: 'RIDEOUT-XENOGENESIS',
    CardDescription:
      'A Unity game prototype focused on gameplay systems, AI path-finding, and combat.',
    fullDescription:
      'RIDEOUT-XENOGENESIS is an advanced game prototype developed in Unity that showcases complex gameplay mechanics, sophisticated AI pathfinding algorithms, and engaging combat systems. The game demonstrates proficiency in game design patterns, performance optimization, and 3D game development. Features include dynamic enemy AI, responsive player controls, and a comprehensive combat system.',
    technologies: [
      'Unity',
      'C#',
      'Path-finding',
    ],
    Github_SRC: 'https://github.com/Khur0o/RIDEOUT-XENOGENESIS',
    Type: 'Game',
    Status: 'Prototype',
    category: 'GAME',
    slug: 'rideout-xenogenesis',
  },
]

export const serviceDetails: ServiceDetail[] = [
  {
    title: 'Automation',
    description:
      'Custom automation solutions designed to reduce repetitive tasks and improve everyday business workflows.',
    price: 'Custom Quote',
    fullDetails: `Automation solutions can be developed based on the specific requirements of a workflow or business process.

- Workflow and task automation
- Data processing and transformation
- File processing
- Notification and alert systems
- API integrations
- Custom automation tools

Pricing depends on the complexity of the workflow, required integrations, and development time.`,
  },

  {
    title: 'Programming',
    description:
      'Custom software and web development for personal, academic, and small-business requirements.',
    price: 'Custom Quote',
    fullDetails: `Programming services can be tailored to specific project requirements.

- Web applications
- Backend systems and APIs
- Database-driven applications
- Custom desktop applications
- Internal tools
- System development and maintenance

Technology selection depends on the project's requirements.

Pricing depends on project scope, functionality, complexity, and development time.`,
  },

  {
    title: 'Printing',
    description:
      'Local document and printing services for personal, academic, and business needs.',
    price: 'Starting at ₱X',
    fullDetails: `Printing services are available for common personal, academic, and business requirements.

- Document printing
- Photo printing
- Posters and layouts
- Business documents
- Academic materials
- Custom print requests

Pricing depends on the material, size, quantity, color requirements, and finishing options.`,
  },
]