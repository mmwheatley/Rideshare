import { StyleSheet } from 'react-native';

const colorOfmyLocationMapMarker = 'blue';
const SIZE = 35;
const HALO_RADIUS = 6;
const ARROW_SIZE = 7;
const ARROW_DISTANCE = 6;
const HALO_SIZE = SIZE + HALO_RADIUS;
const HEADING_BOX_SIZE = HALO_SIZE + ARROW_SIZE + ARROW_DISTANCE;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    marker: {
        justifyContent: 'center',
        backgroundColor: colorOfmyLocationMapMarker,
        width: SIZE,
        height: SIZE,
        borderRadius: Math.ceil(SIZE / 2),
        margin: (HEADING_BOX_SIZE - SIZE) / 2,
      },
});

//make this component available to the app
export default styles;
