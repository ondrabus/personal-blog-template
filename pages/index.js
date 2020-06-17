import Head from 'next/head'
import { sourcebitDataClient } from 'sourcebit-target-next'

export async function getStaticProps({params}){
  const data = await sourcebitDataClient.getData();
  const blogPosts = data.pages.filter(p => p.path.startsWith('/blog/'));
  return { props: { blogPosts } };
}


export default function Home({ blogPosts }) {
  const list = blogPosts.map((post, index) => {
    const published = new Date(post.page.publishedAt);
    return (<article className={`style${index}`}>
    <span className="image">
      <img src={post.page.image ? post.page.image.url : post.page.imageUrl} />
    </span>
    <a href={post.path}>
      <h2>{post.page.title}</h2>
      <div className="content">
        {`${published.getFullYear()}-${(published.getMonth()+1)}-${published.getDate()}`}
      </div>
    </a>
  </article>);
  });

  return (
            <div className="inner">
							<header>
								<h1>This is Ondra's personal blog<br />
								powered by Sourcebit.</h1>
								<p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
							</header>
							<section className="tiles">
								{list}
							</section>
						</div>
  )
}
