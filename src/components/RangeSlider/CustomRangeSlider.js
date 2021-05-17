import React, {useState, useCallback} from 'react';
import RangeSlider from 'rn-range-slider';
import Thumb from './Helper/Thumb';
import Rail from './Helper/Rail';
import RailSelected from './Helper/RailSelected';
import Label from './Helper/Label';
import Notch from './Helper/Notch';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
function CustomRangeSlider() {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Min.</Text>
        <Text style={styles.title}>Max.</Text>
      </View>
      <RangeSlider
        style={styles.sliderStyle}
        min={0}
        max={100}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderStyle: {
    backgroundColor: Colors.transparent,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 12,
    color: Colors.white,
  },
});

export default CustomRangeSlider;
