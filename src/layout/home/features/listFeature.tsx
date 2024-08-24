import bannerFeature1 from "@assets/bannerFeature1.png";
import bannerFeature2 from "@assets/bannerFeature2.png";
import bannerFeature3 from "@assets/bannerFeature3.png";
import bannerFeature4 from "@assets/bannerFeature4.png";
import imageFeateure1 from "@assets/imageFeateure1.png";
import imageFeateure2 from "@assets/imageFeateure2.png";
import imageFeateure3 from "@assets/imageFeateure3.png";
import imageFeateure4 from "@assets/imageFeateure4.png";
import stick1_1 from "@assets/stick1_1.png";
import stick1_2 from "@assets/stick1_2.png";
import stick2 from "@assets/stick2.png";
import stick3 from "@assets/stick3.png";
import stick4_1 from "@assets/stick4_1.png";
import stick4_2 from "@assets/stick4_2.png";
import ItemFeature from "./itemFeature";

export type featureState = {
    id: number,
    title: string,
    sub: string,
    banner: string,
    img: string,
    class: string,
    listStick: {
        src: string,
        class: string,
    }[],
}

const listFeature: featureState[] = [
    {
        id: 0,
        title: 'Search Data',
        sub: 'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.',
        banner: bannerFeature1,
        img: imageFeateure1,
        class: 'top-[71.89px]',
        listStick: [
            {
                src: stick1_1,
                class: 'right-4 top-4',
            },
            {
                src: stick1_2,
                class: 'top-[43.21px] right-[115.59px]',
            }
        ]
    },
    {
        id: 1,
        title: '24 Hours Access',
        sub: 'Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.',
        banner: bannerFeature2,
        img: imageFeateure2,
        class: 'top-[69.92px]',
        listStick: [
            {
                src: stick2,
                class: 'bottom-[44px] right-[25px]',
            }
        ]
    },
    {
        id: 2,
        title: 'Print Out',
        sub: 'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
        banner: bannerFeature3,
        img: imageFeateure3,
        class: 'top-[121.13px]',
        listStick: [
            {
                src: stick3,
                class: 'top-[21.67px] right-[22.61px]',
            },
        ]
    },
    {
        id: 3,
        title: 'Security Code',
        sub: 'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.',
        banner: bannerFeature4,
        img: imageFeateure4,
        class: 'top-[84.69px]',
        listStick: [
            {
                src: stick4_1,
                class: 'right-[63.73px] top-[25px]',
            },
            {
                src: stick4_2,
                class: 'right-[24px] bottom-[57px]',
            }
        ]
    },
]

const ListFeature = () => {
    return (
        listFeature.map((item: featureState) => {
            return <ItemFeature key={item.id + item.title} item={item}/>
        })
    )
}

export default ListFeature;