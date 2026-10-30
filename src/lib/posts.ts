type PostFrontmatter = {
  title: string;
  external_url?: string;
};

type PostModule = {
  frontmatter: PostFrontmatter;
};

export type Post = {
  title: string;
  external_url?: string;
  url: string;
  dateStr: string;
  formattedDate: string;
};

// Glob is resolved relative to this file
const postFiles = import.meta.glob<PostModule>('../pages/posts/*.md', { eager: true });

export function getPosts(): Post[] {
  return Object.entries(postFiles)
    .map(([filepath, mod]) => {
      const filename = filepath.split('/').pop()!.replace('.md', '');
      const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/);
      const dateStr = dateMatch ? dateMatch[1] : '';
      const date = dateStr ? new Date(dateStr) : null;
      const formattedDate = date
        ? date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
        : '';

      return {
        title: mod.frontmatter.title,
        external_url: mod.frontmatter.external_url,
        url: `/posts/${filename}`,
        dateStr,
        formattedDate,
      };
    })
    .sort((a, b) => b.dateStr.localeCompare(a.dateStr));
}
