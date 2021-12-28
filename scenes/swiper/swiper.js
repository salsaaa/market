import { Image, Text } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import { Animated, TouchableOpacity, View } from "react-native-web";
import styles from "./swiper-style";
import { Ionicons } from '@expo/vector-icons';

const Swiper = ({ setShowOnBoarding }) => {
    return (
        <Onboarding
            showNext={false}
            showSkip={false}
            onDone={() => setShowOnBoarding(false)}
            bottomBarColor='#F1F1F1'
            containerStyles={{ padding: 20 }}
            bottomBarHeight={100}
            showDone={true}
            imageContainerStyles={{ paddingBottom: 20 }}
            DoneButtonComponent={props => <Text onPress={() => setShowOnBoarding(false)} style={styles.icon}> <Ionicons name="arrow-forward-circle" size={28} color="black" /></Text>}
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