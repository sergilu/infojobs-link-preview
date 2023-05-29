import styles from "./page.module.scss"
import { redirect } from 'next/navigation';
import { Button } from '@/components/button/Button'
import { Input } from '@/components/input/Input';
import { extractOfferIdFromUrl } from "@/services/extractOfferIdFromUrl";
import { RedirectType } from "next/dist/client/components/redirect";
import { getOffer } from "@/services/getOffer";
import { unescape } from "querystring";
import { Logo } from "@/components/logo/Logo";
import { OfferPreview } from "@/components/offer-preview/OfferPreview";
import { LinkPreview } from "@/components/link-preview/LinkPreview";

interface HomePageProps {
  searchParams: {
    offerId: string | undefined
  }
}

export default async function Home(props: HomePageProps) {

  const offerId = props.searchParams.offerId;

  async function onSubmit(data: FormData) {
    'use server'
    const url = data.get('url') as string;
    const id = extractOfferIdFromUrl(url);
    redirect(`?offerId=${id}`, RedirectType.replace)
  }

  const offer = offerId ? await getOffer(offerId) : null;

  return (
    <main className={styles.main}>
      <Logo /> Link Preview
      <form action={onSubmit}>
        <Input required type='url' name='url' />
        <Button>Preview</Button>
      </form>
      {
      offer
      ? <LinkPreview
          className={styles.linkPreview}
          preview={<OfferPreview offer={offer} />}
        /> 
      : undefined}
    </main>
  )
}
