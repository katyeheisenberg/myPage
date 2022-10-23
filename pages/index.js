import React, { useEffect, useState } from "react";
import Section from '../components/Section'
import Cover from '../components/Cover'
import SocialNetwork from '../components/SocialNetworks';
import Title from '../components/Title'
import PostGrid from '../components/PostGrid'
import BuyMeCoffee from "../components";
import Post from '../components/Post'

import { loadPosts } from './api/posts'


const LOAD_MORE = 4

export default function Home({ initialPosts, total }) {
  console.log(initialPosts)
  const [posts, setPosts] = useState(initialPosts)

  return (
    <div>
      <Section>
        <Cover title="Kate <br /> Chicherina" />
        <SocialNetwork />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New pt</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post key={post.slug.current} {...post} />
          ))}
          {posts}
        </PostGrid>
      </Section>
    </div>
  );
}


export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE);
  return {
    props: {
      initialPosts: posts,
      total
    }
  }
}
