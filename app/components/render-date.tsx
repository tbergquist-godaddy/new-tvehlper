import getAcceptLanguage from '@/src/services/get-language';

type Props = {
  date: string;
};

export default function RenderDate({ date }: Props) {
  const language = getAcceptLanguage();
  return new Intl.DateTimeFormat(language).format(new Date(date));
}
