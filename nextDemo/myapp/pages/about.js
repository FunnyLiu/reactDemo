import Layout from "../components/MyLayout";
import ReactMarkdown from "react-markdown";
export default function About(){
    const input = `This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.
### This is a title
And here's the content.`
    return (
        <div>
            <Layout>
                <p>this is the about page</p>
                <div className="markdown">
                    <ReactMarkdown source={input} />    
                </div>
                {/* this is a global style */}
                <style jsx global>{`
                .markdown {
                    font-family: 'Arial';
                }

                .markdown a {
                    text-decoration: none;
                    color: blue;
                }

                .markdown a:hover {
                    opacity: 0.6;
                }

                .markdown h3 {
                    margin: 0;
                    padding: 0;
                    text-transform: uppercase;
                }
                `}</style>
            </Layout>
        </div>
    )
}