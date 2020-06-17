import { useRouter } from 'next/router'
import { sourcebitDataClient } from 'sourcebit-target-next'

export async function getStaticProps({ params }) {
    const pagePath = '/blog/' + params.slug;
    const props = await sourcebitDataClient.getStaticPropsForPageAtPath(pagePath);
    console.log(props.page.teaser[0].children);
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
    const richText = page.teaser.map(block => {
        if (block.__metadata.modelName == "block")
        {
            return block.children.map(c => {
                if (c.__metadata.modelName == "span")
                {
                    return <p>{c.text}</p>
                }
            });
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