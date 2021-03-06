import React from 'react'

const ArticleForm = ({ article, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <input
      required
      name="title"
      type="text"
      placeholder="Headline"
      value={article.title}
      onChange={handleChange}
    />
    <input
      required
      name="intro"
      type="text"
      placeholder="Intro"
      value={article.intro}
      onChange={handleChange}
    />
    <input
      name="img2"
      type="text"
      placeholder="img2"
      value={article.img2}
      onChange={handleChange}
    />
    <input
      name="heading2"
      type="text"
      placeholder="heading2"
      value={article.heading2}
      onChange={handleChange}
    />
    <input
      name="paragraph2"
      type="text"
      placeholder="paragraph2"
      value={article.paragraph2}
      onChange={handleChange}
    />
    <input
      name="img3"
      type="text"
      placeholder="img3"
      value={article.img3}
      onChange={handleChange}
    />
    <input
      name="heading3"
      type="text"
      placeholder="heading3"
      value={article.heading3}
      onChange={handleChange}
    />
    <input
      name="paragraph3"
      type="text"
      placeholder="paragraph3"
      value={article.paragraph3}
      onChange={handleChange}
    />
    <input
      name="img4"
      type="text"
      placeholder="img4"
      value={article.img4}
      onChange={handleChange}
    />
    <input
      name="heading4"
      type="text"
      placeholder="heading4"
      value={article.heading4}
      onChange={handleChange}
    />
    <input
      name="paragraph4"
      type="text"
      placeholder="paragraph4"
      value={article.paragraph4}
      onChange={handleChange}
    />
    <input
      required
      name="authorName"
      type="text"
      placeholder="author"
      value={article.authorName}
      onChange={handleChange}
    />
    <input
      required
      name="mainImageUrl"
      type="text"
      placeholder="1 image url"
      value={article.mainImageUrl}
      onChange={handleChange}
    />
    <input
      required
      name="publishDate"
      type="text"
      placeholder="publishDate"
      value={article.publishdate}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default ArticleForm
