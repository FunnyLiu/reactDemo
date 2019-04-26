import Link from "next/link";
import Layout from "../components/MyLayout";
import axios from "axios";

const PostLink = props => (
  <li>
    {/* use as to make url seems beautiful */}
    <Link href={`/post?title=${props.title}`} as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = (props) => (
  <div>

    <Layout>
      {/* a simple client router  */}
      <Link href="/about">
        {/* <a>About Page</a> */}
        <button>Go to About Page</button>
      </Link>
      <p>Hello Next.js</p>

      <ul>
        <PostLink id="hello-brizer" title="hello,brizer" />
        <PostLink id="hello-brizer-good" title="hello,brizer good" />
        <PostLink id="hello-brizer-amazing" title="hello,brizer amazing" />
      </ul>

      <div>data fetch from server</div>
      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  </div>
);

Index.getInitialProps = async function() {
  //this is requested in server land
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=batman");
  const data = res.data;

  //we can only see this output in server 
  //because we render the page on the server
  console.log(`show data fetched. Count:${data.length}`);
  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
