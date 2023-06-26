import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { InputGroup } from '@/components/molecules/InputGroup';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/molecules/Card';

import { getNews } from '@/services/api';
export const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage]);

  const fetchArticles = async (page) => {
    try {
      const response = await getNews(page);
      const { data } = response;
      setArticles(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };
  //
  return (
    <div className="news">
      <form>
        <InputGroup
          label={null}
          placeholder={'Search for an article'}
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="" stroke="">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          }
        />
      </form>

      <header>
        <h6>News Feed</h6>
        <div aria-label="pagination">
          <Button disabled={currentPage === 1} onClick={() => handlePagination(currentPage - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Button>
          <p>Page {currentPage}</p>
          <Button disabled={currentPage === totalPages} onClick={() => handlePagination(currentPage + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Button>
        </div>
      </header>

      <section>
        {articles.map((article) => (
          <a href={article.web_url} target="_blank" rel="noreferrer" key={article.id}>
            <Card
              title={article.title}
              author={article.author}
              date={moment(article.date).format('L')}
              source={article.source}
            />
            <hr />
          </a>
        ))}
      </section>
    </div>
  );
};
