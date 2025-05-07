"use client"
import { usePathname, useRouter } from 'next/navigation';
import Dropdown, { DropdownProps } from '../Dropdown/Dropdown';
import { locales } from '@/i18n/i18nConfig';
import { useTranslations } from 'next-intl';

export default function LanguageSwitcher({dropdownBoxSide}: {dropdownBoxSide:DropdownProps["dropdownBoxSide"]}) {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1];
  const t = useTranslations("Languages");

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  const options = locales.map((locale) => ({
    label: t(locale),
    value: locale
  }));

  return (
    <Dropdown
      label={t(currentLocale)}
      options={options}
      onSelect={handleLocaleChange}
      selectedValue={currentLocale}
      dropdownBoxSide={dropdownBoxSide}
    />
  );
}