import Head from 'next/head'

export default () => (
    <div className="w-100 sans-serif bg-dark-red">
        <Head>
            <title>Tomeito - Pomodoro timer</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css" />
        </Head>
        <main className="">
            <div data-name="component">
                <section className="flex vh-100 items-center">
                    <div className="ml6-ns mr6-ns ml4-m mr4-m ml2 mr2">
                        <h3 className="f-headline normal mb3 near-white">Simple, elegant, tasty.</h3>
                        <div className="f5 ttu fw2 mb5 near-black"><span className="fw5">Tomeito</span> Pomodoro timer</div>
                        <iframe className="db mb5" src="/static/tomeito-app/index.html" width="300" height="38" frameBorder="0"></iframe>
                        <span className="link dib silver fw1 near-white">(desktop version coming soon)</span>
                    </div>
                </section>
            </div>
        </main>
        <a target="_blank" href="https://twitter.com/singuerinc" className="link fw1 red fixed bottom-1 right-1">@singuerinc</a>
    </div>
)