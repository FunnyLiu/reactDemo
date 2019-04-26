import {withRouter} from 'next/router'
import Layout from '../components/MyLayout'
import axios from 'axios';

//use router to parse params
const Content = withRouter(props=>(
    <div>
        <h1>{props.router.query.title}</h1>
        <p>this is the blog post content</p>
    </div>
))

const Post = props => (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={props.show.image.medium} />
    </Layout>
  )

Post.getInitialProps = async function(context){
    console.warn(context.query)
    const {id} = context.query
    //if we visit this page from client link, it is requested by client side
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
    const show =res.data

    console.log(`Fetched show: ${show.name}`)
    
    return {show}
}


export default Post

