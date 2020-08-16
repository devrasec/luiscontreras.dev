/* eslint-disable react/jsx-props-no-spreading */
export default function Link({ children, to, openNewTab }) {
  const attrs = openNewTab ? { rel: 'noopener noreferrer', target: '_blank' } : {};

  return (
    <a href={to} {...attrs}>
      {children}
    </a>
  );
}
