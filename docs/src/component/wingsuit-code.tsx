import { codeToHtml } from 'shiki';

export default async function WingsuitCode({
  children,
  code,
}: {
  children: React.ReactNode;
  code: string;
}) {
  const html = await codeToHtml(code, {
    lang: 'javascript',
    theme: 'github-dark',
  });

  return <div className="w-full" dangerouslySetInnerHTML={{ __html: html }} />;
}
