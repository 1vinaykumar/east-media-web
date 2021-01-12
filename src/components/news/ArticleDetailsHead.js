import Head from "next/head";

function ArticleDetailsHead({ article, siteName, siteUrl }) {
  return (
    <Head>
      <title>
        {`${article.title ? article.title + " | " : ""}${siteName}`}
      </title>
      <link rel="icon" href="/images/logo.jpg" />
      <meta property="og:title" content={article.title} />
      <meta property="og:image" itemProp="image" content={article.image_url} />
      <meta name="description" content={article.body} />
      <meta property="og:description" content={article.body} />
      <meta property="og:url" content={`${siteUrl}/article/${article.id}`} />
      <meta property="og:image:url" content={article.image_url} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:updated_time" content={article.published_at} />
      <meta property="article:published_time" content={article.published_at} />
      <meta property="article:modified_time" content={article.published_at} />
      <link rel="canonical" href={`${siteUrl}/article/${article.id}`} />
      <meta property="og:site_name" content={siteName} />
      <meta name="msapplication-TileImage" content={article.image_url} />
      <meta property="twitter:image" content={article.image_url} />
      <meta name="twitter:card" content={article.image_url} />
      <meta name="twitter:url" content={`${siteUrl}/article/${article.id}`} />
      <meta
        name="twitter:title"
        content={article.title ? article.title : siteName}
      />
      <meta property="og:type" content="article" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="apple-touch-fullscreen" content="YES" />
    </Head>
  );
}

export default ArticleDetailsHead;
