import axios from "axios";
import ArticleDetails from "../../src/components/news/ArticleDetails";
import Navbar from "../../src/components/navs/Navbar";
import Footer from "../../src/components/navs/Footer";

function Id({ article, id }) {
  return (
    <>
      <Navbar />

      {article ? (
        <ArticleDetails articleData={article} id={id} />
      ) : (
        <h1>Not Found</h1>
      )}
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  let article = null;
  await axios
    .get(
      "https://vinaykumar13.pythonanywhere.com/api/articles/" +
        context.params.id
    )
    .then((resp) => {
      article = resp.data;
    })
    .catch((err) => {
      article = null;
    });
  return {
    revalidate: 4000,
    props: { article, id: context.params.id },
  };
}

export async function getStaticPaths() {
  let articles = [];
  await axios
    .get("https://vinaykumar13.pythonanywhere.com/api/articles")
    .then((response) => {
      articles = response.data;
    })
    .catch((err) => {
      articles = [];
    });
  const articleIds = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return {
    fallback: true,
    paths: articleIds,
  };
}

export default Id;
