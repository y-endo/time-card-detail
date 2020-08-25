import * as React from 'react';

import DefaultLayout from '~/layouts/default';

const IndexPage: React.FC = () => {
  const content = <div>Index</div>;

  return <DefaultLayout content={content} />;
};

export default IndexPage;
