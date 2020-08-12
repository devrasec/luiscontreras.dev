import { parseISO, format } from 'date-fns';

export default function Date({ dateString, className, isPubdate }) {
  const date = parseISO(dateString);
  return (
    <time className={className} dateTime={dateString} pubdate={isPubdate ? 'pubdate' : null}>
      {format(date, 'LLL d, yyyy')}
    </time>
  );
}
