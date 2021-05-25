import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../layout/Colors';
import Font from '../layout/Font';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {currentTime: null, currentDay: null};
    this.daysArray = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ];
    this.monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }



  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'pm';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour === 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'am';
    }

    this.setState({
      currentTime: hour + ':' + minutes,
    });

    this.daysArray.map((item, key) => {
      if (key === new Date().getDay()) {
        const month = new Date().getMonth();
        const date = new Date().getDate();
        const CurrentDate =
          item.charAt(0).toUpperCase() +
          item.slice(1) +
          ',' +
          this.monthNames[month] +
          ' ' +
          date;
        this.setState({currentDay: CurrentDate});
      }
    });
  };

  render() {
    return (
      <View style={styles.clock}>
        <View style={styles.rowCenter}>
          <Text style={styles.time}>{this.state.currentTime}</Text>
        </View>
        <View style={{marginVertical: 8}}>
          <Text style={styles.date}>{this.state.currentDay}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  clock: {
    width: '100%',
    backgroundColor: Colors.clock,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  time: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 120,
    color: Colors.white,
  },
  date: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 16,
    color: Colors.white,
  },
});
Clock.propTypes = {};

export default Clock;
