import React, { FunctionComponent } from 'react';

type Props = { page };
const Page: FunctionComponent<Props> = ({ page }) => {
  return <div dangerouslySetInnerHTML={{ __html: page }} />;
};

export default Page;
