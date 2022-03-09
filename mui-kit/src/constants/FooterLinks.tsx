import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Material Kit 2",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://github.com" },
        { name: "freebies", href: "https://github.com" },
        { name: "premium tools", href: "https://github.com" },
        { name: "blog", href: "https://github.com" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://github.com" },
        { name: "bits & snippets", href: "https://github.com" },
        { name: "affiliate program", href: "https://github.com" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://github.com" },
        { name: "knowledge center", href: "https://github.com" },
        { name: "custom development", href: "https://github.com" },
        { name: "sponsorships", href: "https://github.com" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://github.com" },
        { name: "privacy policy", href: "https://github.com" },
        { name: "licenses (EULA)", href: "https://github.com" },
      ],
    },
  ],

}