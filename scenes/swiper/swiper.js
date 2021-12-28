import { Image } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import { Animated } from "react-native-web";
import styles from "./swiper-style";

const Swiper = ({ setShowOnBoarding }) => {
    return (
        <Onboarding
            showNext={false}
            showSkip={false}
            onDone={() => setShowOnBoarding(false)}
            bottomBarColor='#F1F1F1'
            containerStyles={{ padding: 20 }}
            bottomBarHeight={100}
            pages={[
                {
                    backgroundColor: '#F1F1F1',
                    image: <Image style={styles.image} source={require('../../assets/images/slide3.png')} />,
                    title: 'Onboarding',
                    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been `,
                },
                {
                    backgroundColor: '#F1F1F1',
                    image: <Image style={styles.image} source={require('../../assets/images/slide1.png')} />,
                    title: 'Onboarding',
                    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been `,
                },
                {
                    backgroundColor: '#F1F1F1',
                    image: <Image style={styles.image} source={require('../../assets/images/slide2.png')} />,
                    title: 'Onboarding',
                    subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been `,
                },


            ]}
        />
    );
}

export default Swiper;