import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Rating, Input, Icon} from 'react-native-elements';
import Colors from '../../layout/Colors';
import Font from '../../layout/Font';
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.visible && (
          <View style={styles.container}>
            <Rating
              type="custom"
              imageSize={17}
              ratingColor={Colors.primary}
              onFinishRating={this.ratingCompleted}
              style={{paddingVertical: 5}}
            />
            <Input
              placeholder={'Flexible & Adaptable'}
              containerStyle={[styles.containerStyle, {width: 180}]}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.input}
              placeholderTextColor={Colors.mutedText}
            />
            <View>
              <TouchableOpacity
                onPress={() => this.setState({visible: !this.state.visible})}>
                <Icon
                  name={'closecircleo'}
                  type={'ant-design'}
                  size={25}
                  color={Colors.danger}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  containerStyle: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.mutedText,
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderColor: Colors.transparent,
  },
  input: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 10,
    color: Colors.primary,
  },
});
Card.propTypes = {};

export default Card;
