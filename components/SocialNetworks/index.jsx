import React from 'react'
import cl from "classnames";
import { GrLinkedin, AiFillGithub, BsTelegram }  from "react-icons/ai";
import styles from "./index.module.scss";

const socialNetworks = [
  {
    id: 1,
    href: "https://github.com/katyeheisenberg",
    icon: AiFillGithub,
  },
  {
    id: 2,
    href: "https://t.me/oneonetwofour",
    icon: BsTelegram,
  },
  {
    id: 3,
    href: "https://www.linkedin.com/in/kate-chicherina-0ab464228",
    icon: GrLinkedin,
  },
];

const SocialNetwork = ({ className }) => {
  return <ul className={cl(className, styles.list)}>
    {socialNetworks.map((network) => {
      return <li key={network.id} className={styles.listItem}>
        <a
        href={network.href}
        target="_blank"
        className={styles.listLink}
        rel="noreferrer" >
          {React.createElement(network.icon, { color: 'black', size: 50})}
        </a>
      </li>
    })}
  </ul>;
};

export default SocialNetwork