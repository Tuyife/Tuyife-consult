import {
  HiOutlineColorSwatch,
  HiOutlineCode,
  HiOutlineViewGrid,
  HiOutlineServer,
  HiOutlineViewBoards,
  HiOutlineLink,
  HiOutlineLightningBolt,
  HiOutlineRefresh,
  HiOutlineSearch,
  HiOutlineChip,
  HiOutlineBeaker,
  HiOutlineClipboardCheck,
  HiOutlinePaperAirplane,
  HiOutlineCog,
  HiOutlineMail,
} from 'react-icons/hi';
import { HiOutlinePaintBrush } from 'react-icons/hi2';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
} from 'react-icons/si';
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import { TbBrandMysql, TbTargetArrow, TbMicroscope, TbGauge } from 'react-icons/tb';

const MAP = {
  palette: HiOutlineColorSwatch,
  code: HiOutlineCode,
  layout: HiOutlineViewGrid,
  server: HiOutlineServer,
  layers: HiOutlineViewBoards,
  link: HiOutlineLink,
  gauge: TbGauge,
  refresh: HiOutlineRefresh,
  search: HiOutlineSearch,
  chip: HiOutlineChip,
  beaker: HiOutlineBeaker,
  bug: HiOutlineClipboardCheck,
  rocket: HiOutlinePaperAirplane,
  wrench: HiOutlineCog,
  mail: HiOutlineMail,
  brush: HiOutlinePaintBrush,
  target: TbTargetArrow,
  microscope: TbMicroscope,
  react: FaReact,
  html: FaHtml5,
  css: FaCss3Alt,
  js: FaJsSquare,
  node: FaNodeJs,
  git: FaGitAlt,
  github: FaGithub,
  figma: FaFigma,
  firebase: SiFirebase,
  db: FaDatabase,
  ts: SiTypescript,
  next: SiNextdotjs,
  express: SiExpress,
  mongo: SiMongodb,
  tailwind: SiTailwindcss,
  mysql: TbBrandMysql,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
};

export default function Icon({ name, size = 24, style, className }) {
  const Cmp = MAP[name] || HiOutlineCode;
  return <Cmp size={size} style={style} className={className} />;
}
