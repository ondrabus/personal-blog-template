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
    return <div class="inner">
                <h1>{page.title}</h1>
                <span className="image main">
                    <img src={page.image ? page.image : page.image_url} alt="" />
                </span>
				<div dangerouslySetInnerHTML={{__html: page.teaser}}></div>
            </div>
}