import { useEffect, useState } from 'react';
import Image from 'next/image';
// Import your data
import { data } from '../../static/data';

const styles = {
  wrapper: 'bg-animate flex-1 rounded-3xl flex lg:flex-col items-center relative absolute inset-0 flex snap-x items-center gap-4 overflow-x-scroll h-81 px-[1rem] py-[1rem]',
  imageContainer: 'relative h-[200px] w-[200px] flex-shrink-0 snap-center lg:h-[400px] lg:w-[400px]',
  nftImage: 'rounded-[1rem] object-cover',
};

const NFTDisplay = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Fetch and set your NFT data here, if needed
    setNfts(data.items);
  }, []);

  return (
    <div className={styles.wrapper}>
      {nfts.map((nft, index) => (
        <div key={index} className={styles.imageContainer}>
          {/* Wrap Image component in a div to ensure correct dimensions */}
          <div className="relative h-full w-full">
            <Image
              src={nft.image_link}
              alt={`NFT ${index}`}
              layout="fill"
              className={styles.nftImage}
              objectFit="cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTDisplay;
