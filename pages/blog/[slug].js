import { useRouter } from 'next/router'
import { sourcebitDataClient } from 'sourcebit-target-next'

export async function getStaticProps({ params }) {
    const pagePath = '/blog/' + params.slug;
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
    return { props };
}

export async function getStaticPaths() {
    const paths = await sourcebitDataClient.getStaticPaths();
    return {
        paths: paths.filter(path => path.startsWith('/blog/')),
        fallback: false
    };
}

export default function BlogPost({ page }) {
    const richText = page.teaser.content.map(block => {
        if (block.nodeType == "paragraph")
        {
			return <p>{block.content.map(b => {
				if (b.nodeType == "text"){
					return b.value;
				}
			})}</p>
        }
    });

    return <div class="inner">
                <h1>{page.title}</h1>
                <span className="image main">
                    <img src={page.image.url ? page.image.url : page.imageUrl} alt="" />
                </span>
                {richText}
            </div>
}