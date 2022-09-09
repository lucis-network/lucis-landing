import Head from "next/head";

type Props = {
  title?: string,
};

export default function DocHead(props: Props) {
  const titleSuffix = props.title ?? "Gaming SocialFi and Insights";
  const title = "Lucis Platform - " + titleSuffix;
  const desc = "Unite Gamers Across The Globe With The Power of Decentralize Finance. We transform & educate players from traditional games to NFT games ";
  const thumb = "/assets/img/howwework.png";

  return <Head>
    <link rel="icon" href="/assets/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
    <meta charSet="utf-8" />

    <title>{title}</title>
    <meta name="description" content={desc} />

    <meta data-hid="og:title" name="og:title" content={title} />
    <meta data-hid="og:description" name="og:description" content={desc} />
    <meta data-hid="og:type" property="og:type" content="website" />

    <meta name="apple-mobile-web-app-title" content={title} />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="application-name" content="Lucis Platform" />

    <meta property="og:title" content={title} />
    <meta data-hid="description" name="description" content={desc} />
    <meta property="og:description" content={desc} />

    <meta data-hid="image" itemProp="image" content={thumb} />
    <meta data-hid="og:image" property="og:image" content={thumb} />
    <meta property="og:locale" content="en_US" />
  </Head>
}