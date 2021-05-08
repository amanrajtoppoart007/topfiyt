import { Image, KeyboardAvoidingView, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Colors from "../layout/Colors";
import { Input } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

<SafeAreaView style={styles.container}>
  <View style={styles.wrapper}>
    <View style={styles.logoWrapper}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo/logo-with-title.png')}
      />
    </View>
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>SIGN UP</Text>
    </View>
    <View style={styles.subTitleWrapper}>
      <Text style={styles.subTitle}>
        Lorem Ipsum typesetting industry.
      </Text>
    </View>
    <View style={styles.inputBoxContainer}>
      <KeyboardAvoidingView>
        <View style={{flexDirection: 'row', paddingHorizontal: 10,backgroundColor:Colors.white}}>
          <View style={styles.nameInputBox}>
            <View style={styles.labelWrapper}>
              <Text style={styles.label}>First Name</Text>
            </View>
            <Input
              leftIcon={() => (
                <FontAwesome
                  style={{marginHorizontal: 10}}
                  name={'user-o'}
                  size={17}
                  color={Colors.primary}
                />
              )}
              placeholder={'Your First Name'}
              inputContainerStyle={styles.nameInputContainerStyle}
              style={styles.nameInput}
              placeholderTextColor={Colors.mutedText}
            />
          </View>

          <View style={styles.nameInputBox}>
            <View style={styles.labelWrapper}>
              <Text style={styles.label}>Last Name</Text>
            </View>
            <Input
              leftIcon={() => (
                <FontAwesome
                  style={{marginHorizontal: 10}}
                  name={'user-o'}
                  size={17}
                  color={Colors.primary}
                />
              )}
              placeholder={'Your Last Name'}
              inputContainerStyle={styles.nameInputContainerStyle}
              style={styles.nameInput}
              placeholderTextColor={Colors.mutedText}
            />
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Email</Text>
          </View>
          <Input
            leftIcon={() => (
              <FontAwesome
                style={{marginHorizontal: 10}}
                name={'envelope-o'}
                size={17}
                color={Colors.primary}
              />
            )}
            placeholder={'Enter your email'}
            inputContainerStyle={styles.inputContainerStyle}
            style={styles.input}
            placeholderTextColor={Colors.mutedText}
          />
        </View>
        <View style={styles.inputBox}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Password</Text>
          </View>
          <Input
            leftIcon={() => (
              <Ionicons
                style={{marginHorizontal: 10}}
                name={'lock-closed-outline'}
                size={17}
                color={Colors.primary}
              />
            )}
            rightIcon={() => (
              <TouchableOpacity
                onPress={() => this.toggleSecureInput()}
                style={{marginHorizontal: 5}}>
                <Ionicons
                  name={this.state.secureTextEntry ? 'eye' : 'eye-off'}
                  size={17}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            )}
            secureTextEntry={this.state.secureTextEntry}
            placeholder={'Enter you password'}
            inputContainerStyle={styles.inputContainerStyle}
            style={styles.input}
            placeholderTextColor={Colors.mutedText}
          />
        </View>

        <View style={styles.inputBox}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Password</Text>
          </View>
          <Input
            leftIcon={() => (
              <Ionicons
                style={{marginHorizontal: 10}}
                name={'lock-closed-outline'}
                size={17}
                color={Colors.primary}
              />
            )}
            rightIcon={() => (
              <TouchableOpacity
                onPress={() => this.toggleSecureInput()}
                style={{marginHorizontal: 5}}>
                <Ionicons
                  name={this.state.secureTextEntry ? 'eye' : 'eye-off'}
                  size={17}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            )}
            secureTextEntry={this.state.secureTextEntry}
            placeholder={'Confirm Password'}
            inputContainerStyle={styles.inputContainerStyle}
            style={styles.input}
            placeholderTextColor={Colors.mutedText}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP & CONTINUE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.registerText}> Have an account ?</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text
            style={[styles.registerText, {color: Colors.primaryLight}]}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</SafeAreaView>
