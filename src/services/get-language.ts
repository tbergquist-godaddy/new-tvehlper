import Negotiator from 'negotiator';
import { headers } from 'next/headers';

export default function getAcceptLanguage() {
  const acceptLanguages = headers().get('accept-language');
  const defaultLocale = 'en-US';

  if (acceptLanguages == null) {
    return defaultLocale;
  }

  const languages = new Negotiator({
    headers: { 'accept-language': acceptLanguages },
  }).languages();

  return languages ?? defaultLocale;
}
