import React from 'react';
import Link from '@docusaurus/Link';
import { Easy, Medium, Hard } from '..';

const SimilarQuestion = (props) => {
  const { title, e, m, h } = props;
  const Tag = e ? Easy : m ? Medium : h ? Hard : 'div';
  const href = `./${title.toLowerCase().replaceAll(/\s+/g, '-')}`;
  return (
    <Tag>
      <p>
        <Link to={href}>
          {title}
        </Link>
      </p>
    </Tag>
  );
};

export default SimilarQuestion;