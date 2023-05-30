import styles from "./page.module.scss"
import { redirect } from 'next/navigation';
import { Button } from '@/components/button/Button'
import { Input } from '@/components/input/Input';
import { extractOfferIdFromUrl } from "@/services/extractOfferIdFromUrl";
import { getOffer } from "@/services/getOffer";
import { Logo } from "@/components/logo/Logo";
import { LinkPreview } from "@/components/link-preview/LinkPreview";
import { Offer } from "@/models/Offer";
import { LinkShare } from "@/components/link-share/LinkShare";
import { Link } from "@/components/link/Link";
import { CopyToClipboardButton } from "@/components/copy-to-clipboard-button/CopyToClipboardButton";
import { truncate } from "@/services/truncate";


const isDev = process.env.NODE_ENV === "development"

const HOSTNAME =  isDev ? '' : 'https://infojobs-link-preview.vercel.app'

const INPUT_PLACEHOLDER = 'https://www.infojobs.net/barcelona/hackathon-con-midudev/of-ie15595827948f0a59a61970bae7ec8'

interface HomePageProps {
  searchParams: {
    offerUrl: string | undefined
  }
}


export default async function Home(props: HomePageProps) {

  const offerUrl = props.searchParams.offerUrl;

  async function onSubmit(data: FormData) {
    'use server'
    const url = data.get('url') as string;
    redirect(`?offerUrl=${url}`)
  }

  const offerId = offerUrl ? extractOfferIdFromUrl(offerUrl) : null;

  const offer = offerId ? await getOffer(offerId) : null;

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>
        <Logo /> Link Preview
      </h1>
      <form className={styles.row} action={onSubmit}>
        <Input required type='url' name='url' defaultValue={offerUrl} placeholder={INPUT_PLACEHOLDER}/>
        <Button>Create</Button>
      </form>
      {
        offer
        ? <LinkPreviewAndLink
            offer={offer}
          /> 
        : undefined
      }
      <Examples />
    </main>
  )
}

function createLink(offerId: string) {
  return `${HOSTNAME}/offer/${offerId}`
}

function LinkPreviewAndLink({offer}: {offer:Offer}) {
  const link = createLink(offer.id);
  return (
    <div className={styles.linkPreviewAndLink}>
      <div className={styles.row}>
        <Link className={styles.generateLink} href={link}>{link}</Link>
        <CopyToClipboardButton value={link} />
        <LinkShare link={link} />
      </div>
      <LinkPreview
            className={styles.linkPreview}
            preview={<img src={`/offer/${offer.id}/image`}/>}
            description={truncate(offer.description,160)}
            domain='InfoJobs'
            title={offer.title}
      />
      
    </div>
  )
}




function Examples() {

  const urls = [
    INPUT_PLACEHOLDER,
    'https://www.infojobs.net/madrid/instalador-cocinas/of-i4bb52d080e47f8b6f924e012cfed06',
    'https://www.infojobs.net/sant-cugat-del-valles/enfermero-hospital/of-i5430a0d9534f77b1151289f0ed4e7b'
  ]

  return (
    <section>
      <h2 className={styles.examplesTitle}>Examples</h2>
      <ul className={styles.examplesList}>
      {
        urls.map(
          (url, index) => 
            <li key={url}>
              <a href={`/?offerUrl=${url}`}>Example {index + 1}</a>
            </li>
        )
      }
    </ul>
    </section>
  )
}