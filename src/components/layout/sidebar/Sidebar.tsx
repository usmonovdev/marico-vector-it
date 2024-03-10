import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { Xmark } from "iconoir-react";
import styled from "./sidebar.module.css";
import mock from "@/mock";
import Link from "next/link";

interface ISidebarProps {
  open: boolean;
  setOpen: () => void;
}

export const Sidebar: FC<ISidebarProps> = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styled.sidebar__backdrop}
            onClick={setOpen}
          />
          <motion.section
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ stiffness: 0, duration: 0.2 }}
            className={styled.sidebar}
          >
            <div className={styled.sidebar__head} onClick={setOpen}>
              <Xmark />
              <p>Menu</p>
            </div>
            <ul className={styled.sidebar__links}>
              {mock.links.map((data) => {
                return (
                  <Link href={data.link} key={data.id}>
                    <li>{data.title}</li>
                  </Link>
                );
              })}
            </ul>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};
