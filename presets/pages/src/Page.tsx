import React, { FunctionComponent } from 'react';

type Props = { page };
const Page: FunctionComponent<Props> = ({ page }) => {
  return <div className="wingsuit-page-wrapper" dangerouslySetInnerHTML={{ __html: page }} />;
};

export default Page;
