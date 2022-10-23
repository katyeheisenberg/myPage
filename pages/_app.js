import "../styles/reset.scss";
import "../styles/global.scss";
import React from "react";
import { useState } from "react";
import Section from "../components/Section";
import Cover from "../components/Cover";
import SocialNetwork from "../components/SocialNetworks";
import { BuyMeCoffee, PostGrid, Post } from "../components";
import Title from "../components/Title";

import { loadPosts } from "./api/posts";

const LOAD_MORE = 4;

export async function getServerSideProps() {
  const { posts, total } = loadPosts(0, LOAD_MORE);
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
}

function MyApp({ initialPosts, total }) {
  console.log(initialPosts);
  const [post, setMyPosts] = useState([]);
  return (
    <div>
      <Section>
        <Cover title="Kate <br /> Chicherina" />
        <SocialNetwork />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New post</Title>
        <PostGrid>
          {post.map((post) => {
            return <Post key={post.slug.current} {...post} />;
          })}
        </PostGrid>
      </Section>
    </div>
  );
}

export default MyApp;
