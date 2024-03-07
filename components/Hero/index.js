const styles = {
  wrapper: 'flex w-full items-center justify-center pt-16 lg:pt-20',
  container: 'space-y-10',
  heroTitle: 'xl:pr-40 text-6xl font-bold',
  heroParagraph: 'xl:pr-40',
  heroCta: 'flex items-center space-x-10',
  mintButton:
    'rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]',
}

const Hero = () => {

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>Solana Penguin Business</h1>
        <p className={styles.heroParagraph}>
          *This is NOT a real SPM NFT it is a clone made for learning purposes!*
        </p>
        <p className={styles.heroParagraph}>
        "SPM Gen2 is a collection of 5000 unique 24x24 pixel randomly generated Penguins stored on the Solana blockchain. These penguins, inspired by the famous 'Return to Monke' meme, are designed to bring accessibility and community engagement to the blockchain. Each penguin comes with exclusive NFT ownership rights and access to a community wallet, enabling holders to participate in future on-chain voting systems.

The metadata of the Solana Penguins is securely stored on Arweave, ensuring permanent decentralized data storage. These penguins are generated from over 99 possible traits spread across 6 layers, resulting in some penguins being rarer than others.

Embracing the spirit of 'Reject humanity, return to penguin,' the Solana Penguins aim to establish a vibrant and inclusive community within the blockchain ecosystem.
        </p>
        <div className={styles.heroCta}>
        </div>
      </div>
    </main>
  )
}

export default Hero
